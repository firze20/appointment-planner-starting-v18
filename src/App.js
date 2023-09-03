import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{
    name: 'Paul',
    phoneNumber: 911728098,
    email: 'paul@gmail.com'
  }]);
  const [appointments, setAppointmens] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phoneNumber, email) => {
    contacts.push({
      name,
      phoneNumber,
      email,
    });
  };

  const addAppointment = (name, date, time) => {
    appointments.push({
      name,
      date,
      time
    });
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={<AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} /> /* Add props to AppointmentsPage */}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
