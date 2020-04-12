import React, {useState, useContext, useEffect} from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const {setAlert} = alertContext;
  const {login, error, clearErrors, isAuthenticated} = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid credentials") {
      setAlert(error, "danger", 10000);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const {email, password} = user;

  const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill ALL fields", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input name="email" value={email} onChange={onChange} type="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            value={password}
            onChange={onChange}
            type="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
