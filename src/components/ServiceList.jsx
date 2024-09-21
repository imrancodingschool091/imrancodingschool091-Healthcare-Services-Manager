import React from 'react';
import './ServiceList.css';

const ServiceList = ({ services, deleteService, setEditingService }) => {
  return (
    <div className="service-list">
      <h2>Available Services</h2>
      {services.length === 0 ? (
        <p>No services available. Please add some.</p>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span>${service.price}</span>
              </div>
              <div className="actions">
                <button onClick={() => setEditingService(service)}>Edit</button>
                <button onClick={() => deleteService(service.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceList;
