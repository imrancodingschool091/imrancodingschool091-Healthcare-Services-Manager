import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import AddServiceForm from './components/AddServiceForm';
import './index.css';
import UpdateServiceForm from './components/UpdateServiceForm'; 


function App() {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const updateService = (updatedService) => {
    setServices(services.map(service => 
      service.id === updatedService.id ? updatedService : service
    ));
    setEditingService(null); 
  };

  return (
    <div className="app-container">
      <header>
        <h1>Healthcare Services Manager</h1>
      </header>
      <main>
        <AddServiceForm addService={addService} />
        <ServiceList 
          services={services} 
          deleteService={deleteService}
          setEditingService={setEditingService}
        />
        {editingService && (
          <UpdateServiceForm 
            editingService={editingService} 
            updateService={updateService} 
          />
        )}
      </main>
    </div>
  );
}

export default App;
