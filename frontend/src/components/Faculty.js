import React, { useState } from 'react';
import './css/Form.css';

const FacultyRegistration = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    organisation_code: '',
    name: ''
  });

  const handleInputChange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/faculty_register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await response.json()
  };
  return (
    <div className="form-container">
      <h1 className="title">Faculty Registration</h1>
      <form className="form" onSubmit={handleSubmit}>

        <input placeholder='Email:' className='input_text' type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

        <input placeholder='Name:' className='input_text' type="text" id="Name" name="name" onChange={handleInputChange} required />

        <input placeholder='Organisation Code:' className='input_text' type="text" id="Name" name="organisation_code" onChange={handleInputChange} required />

        <input placeholder='Password:' className='input_text' type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FacultyRegistration;
