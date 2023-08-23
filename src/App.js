import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppointmentScheduler from "./components/AppointmentScheduler";
import ServiceCatalog from "./components/ServiceCatalog";
import CustomerDatabase from "./components/CustomerDatabase";
import ExpenseTracking from "./components/ExpenseTracking";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Barber Management App</h1>
        <Switch>
          <Route path="/services">
            <ServiceCatalog />
          </Route>
          <Route path="/customers">
            <CustomerDatabase />
          </Route>
          <Route path="/expenses">
            <ExpenseTracking />
          </Route>
          <Route path="/">
            <AppointmentScheduler />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
