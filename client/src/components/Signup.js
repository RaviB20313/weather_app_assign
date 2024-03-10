import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Singup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password,cpassword} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name,email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    localStorage.setItem('token', json.authtoken);
    navigate('/');
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name='name' onChange={onChange} placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name='email' onChange={onChange} placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onChange} placeholder="Password" minLength={5} required/>
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Password</label>
          <input type="cpassword" className="form-control" id="cpassword" name='cpassword' onChange={onChange} placeholder="CPassword" minLength={5} required/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Singup
