import React, { useState } from 'react';
import './AddServiceForm.css';

const AddServiceForm = ({ addService }) => {
  const [service, setService] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) {
      alert("All fields are required!");
      return;
    }
    addService(service);
    setService({ name: '', description: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="add-service-form">
      <h2>Add New Service</h2>
      <input 
        type="text" 
        name="name" 
        value={service.name}
        onChange={handleChange} 
        placeholder="Service Name" 
      />
      <input 
        type="text" 
        name="description" 
        value={service.description}
        onChange={handleChange} 
        placeholder="Description" 
      />
      <input 
        type="number" 
        name="price" 
        value={service.price}
        onChange={handleChange} 
        placeholder="Price ($)" 
      />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default AddServiceForm;
