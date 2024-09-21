import React, { useState } from 'react';
import './UpdateServiceForm.css';

const UpdateServiceForm = ({ editingService, updateService }) => {
  const [service, setService] = useState(editingService);

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
    updateService(service);
  };

  return (
    <form onSubmit={handleSubmit} className="update-service-form">
      <h2>Update Service</h2>
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
      <button type="submit">Update Service</button>
    </form>
  );
};

export default UpdateServiceForm;
