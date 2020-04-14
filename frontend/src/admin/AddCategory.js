import React, {useState} from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import { Link } from 'react-router-dom';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //destructured user and token from localStorage
  const {user, token} = isAuthenticated();

  const handleChange = (e) => {
    setError('');
    setName(e.target.value);
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    //make a request to API to create Category


  }

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted"></label>
        <input type="text" className="form-control" onCHange={handleChange} value={name} autofocus/>
      </div>
      <button className="btn btn-outline-primary">Create Category</button>
    </form>
  );

  return (
    <Layout title="Add a New Category" description={`Good Day ${name}, ready to add a new Category`}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {newCategoryForm()}
        </div>
      </div>
    </Layout>
  )
}

export default AddCategory;