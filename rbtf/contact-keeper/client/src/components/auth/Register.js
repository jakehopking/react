import React, {useState} from "react";

const Register = () => {
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
    console.log("Register");
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input name="name" value={name} onChange={onChange} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input name="email" value={email} onChange={onChange} type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input name="password" value={password} onChange={onChange} type="password" />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Password confirmation: </label>
          <input name="password2" value={password2} onChange={onChange} type="password" />
        </div>
        <button type="submit" className="btn btn-block btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
