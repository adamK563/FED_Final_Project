import React from "react";

function ServiceCatalog({ services }) {
  return (
    <div>
      <h2>Service Catalog</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} - ${service.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceCatalog;
