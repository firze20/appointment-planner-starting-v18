import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

import { v4 as uuidv4 } from "uuid";

export const ContactsPage = (props) => {
  const { contacts, addContact } = props;

  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicateName && name && phone && email) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert("Duplicated Name, or empty input change it pls");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  // useEffect hook that checks if the contact name is a duplicate
  useEffect(() => {
    const nameIsDuplicate = () => {
      const nameFound = contacts.find((contact) => contact.name === name);
      if (nameFound !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicateName(true);
    } else {
      setDuplicateName(false);
    }
  }, [name, contacts, duplicateName]);

  return (
    <div>
      <section>
        <h2>
          Add Contact{" "}
          {duplicateName ? " - This contact name already exists" : ""}{" "}
        </h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
