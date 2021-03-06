import React, {useState, useContext, useEffect} from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const {setAlert} = alertContext;
  const {register, error, clearErrors, isAuthenticated} = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      setAlert(error, "danger", 10000);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const {name, email, password, password2} = user;

  const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please fill ALL fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords don't match, please try again...", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input name="name" value={name} onChange={onChange} type="text" required />
        </div>
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
            minLength="8"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Password confirmation: </label>
          <input
            name="password2"
            value={password2}
            onChange={onChange}
            type="password"
            minLength="8"
            required
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
