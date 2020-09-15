import React, { useState } from 'react';
import Navigation from '../functional/Navigation';
import {Link} from 'react-router-dom';
import {isAuthenticated } from '../services/apiAuth';
import { createCategory } from '../services/apiCategories';

import './AddCategory.css'

const AddCategory = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('');

  const {user, token} = isAuthenticated();

  const handleChange = (event) => {
    setError('')
    setName(event.target.value);
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess(false);
    // make api call to end-point
    createCategory({name})
    .then(data => {
      if(data.error) {
        setError(true)
      } else {
        setError('');
        setSuccess(true);
      }
    })
  }

  const showSuccess = () => {
    if(success) {
      return <h3 className="text-success">The Category "{name}" was successfully created</h3>
    }
  }

  const showError = () => {
    if (error) {
      return <h3 className="text-danger">"{name}" should be unique, try another one</h3>
    }
  }

  const NewCategoryForm = () => (
    <div className="form">
      <h2>Add New Category</h2>
      <form onSubmit={clickSubmit}>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input type="text" className="form-control"
            onChange={handleChange} value={name} required autoFocus/>
        </div>
        <button className="btn btn-outline-success">
          Create Category
        </button>
      </form>
    </div>
  )

  return (
    <>
      <Navigation/>
      <div className="container form-container">
        {NewCategoryForm()}
        {showSuccess()}
        {showError()}
      </div>
    </>
  )
}

export default AddCategory;