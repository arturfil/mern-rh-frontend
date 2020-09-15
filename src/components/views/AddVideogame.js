import React, { useState, useEffect } from 'react';
import Navigation from '../functional/Navigation';
import { isAuthenticated } from '../services/apiAuth';
import { getCategories } from '../services/apiCategories';
import { createVideogame } from '../services/apiVideogames';

import './AddVideogame.css';

const AddVideogame = () => {

  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    categories: [],
    quantity: '',
    image: '',
    loading: false,
    error: '',
    createdVideogame: '',
    redirectToHome: false,
    formData: ''
  })

  const {user, token} = isAuthenticated()

  const {
    name,
    description,
    price,
    category,
    categories,
    quantity,
    image,
    loading,
    error,
    createdVideogame,
    redirectToHome,
    formData,
  } = values;

  useEffect(() => {
    setValues({...values, formData: new FormData()})
    init();
  }, [])

  const init = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, categories: data, formData: new FormData()})
      }
    })
  }

  const handleChange = name => event => {
    const value = name === 'image' ? event.target.files[0] : event.target.value
    formData.set(name, value)
    setValues({ ...values, [name]: value })
  }

  const clickSubmit = event => {
    event.preventDefault()
    setValues({ ...values, error: '', loading: true })
    createVideogame(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({
          ...values,
          name: '',
          description: '',
          photo: '',
          price: '',
          quantity: '',
          loading: false,
          createdVideogame: data.name
        })
      }
    })
  }

  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  )

  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: createdVideogame ? '' : 'none' }}
    >
      <h2>{`${createdVideogame} was succesfully created`}</h2>
    </div>
  )

  const NewVideogameForm = () => (
    <div className="vd-form mt-5">
      <form className='mb-3 container' onSubmit={clickSubmit}>
        <h4>Post Image</h4>
        <div className='form-group'>
          <label className='btn btn-secondary'>
            <input
              onChange={handleChange('image')}
              type='file'
              name='image'
              accept='image/*'
            />
          </label>
        </div>
        <div className='form-group'>
          <label className='text-muted'>Name</label>
          <input
            onChange={handleChange('name')}
            type='text'
            className='form-control'
            value={name}
          />
        </div>
        <div className='form-group'>
          <label className='text-muted'>Description</label>
          <input
            onChange={handleChange('description')}
            type='text'
            className='form-control'
            value={description}
          />
        </div>
        <div className='form-group'>
          <label className='text-muted'>Price</label>
          <input
            onChange={handleChange('price')}
            type='text'
            className='form-control'
            value={price}
          />
        </div>
        <div className='form-group'>
          <label className='text-muted'>Category</label>
          <select
            onChange={handleChange('category')}
            type='text'
            className='form-control'
          >
            <option>Select Category</option>
            {categories &&
              categories.map((c, i) => (
                <option key={i} value={c._id}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>
        <div className='form-group'>
          <label className='text-muted'>Quantity</label>
          <input
            onChange={handleChange('quantity')}
            type='number'
            className='form-control'
            value={quantity}
          />
        </div>
        <button className='btn btn-outline-primary'>Create Product</button>
      </form>
    </div>
  )

  return (
    <>
      <Navigation/>
      {showSuccess()}
      {showError()}
      {NewVideogameForm()}
    </>
  )
}

export default AddVideogame;