import React, {useState} from 'react';
import {isAuthenticated, signin, authenticate } from '../services/apiAuth';
import Navigation from '../functional/Navigation';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';

const Signin = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false
  })

  const { email, password, loading, error, redirectToReferrer} = values;
  const { user } = isAuthenticated();

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value})
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true })
    signin({ email, password }).then(data => { 
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false })
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true
            })
          }
        )
      }
    })
  }

  const redirectUser = () => {
    if(redirectToReferrer) {
      if(user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />
      } else {
        return <Redirect to="/"/>
      }
    }
    if(isAuthenticated()) {
      return <Redirect to="/" />
    }
  }

  const signInForm = () => (
    <form className="sign-box">
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange('email')}
          type="email"
          className="form-control"
          value={email}
          />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange('password')}
          type="password"
          className="form-control"
          value={password}
          />
      </div>
      <button onClick={clickSubmit} className="s-btn btn btn-primary">
        Sign In
      </button>
    </form>
  )


  const showError = () => (
    <div className="alert alert-danget" style={{display: error ? '': 'none'}}>
      {error}
    </div>
  )

  const showLoading = () => (
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    )
  )

  return (
    <>
      <Navigation/>
      <div className="mt-5">
        {signInForm()}
        {redirectUser()}
        {showError()}
        {showLoading()}
      </div>
    </>
  )
}

export default Signin;