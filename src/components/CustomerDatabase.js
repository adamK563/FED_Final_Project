import React, { useEffect, useState } from "react";
import idb from "../idb"; // Import the idb library

function CustomerDatabase() {
  const [customers, setCustomers] = useState([]);

  // Use idb to retrieve customer data
  useEffect(() => {
    async function fetchCustomers() {
      const db = await idb.createDB("customersDB", 1);
      const fetchedCustomers = await db.getAllCustomers();
      setCustomers(fetchedCustomers);
    }
    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customer Database</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerDatabase;
