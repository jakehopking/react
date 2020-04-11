import React, {useState} from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const {email, password} = user;

  const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input name="email" value={email} onChange={onChange} type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input name="password" value={password} onChange={onChange} type="password" />
        </div>
        <button type="submit" className="btn btn-block btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
