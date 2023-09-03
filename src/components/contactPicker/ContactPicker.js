import React from "react";

export const ContactPicker = (props) => {

  const {contacts, onChange, value, name} = props;

  return (
    <select name="contacts">
        <option value={""}>No Contact Selected</option>
         {contacts.map((contact) => (
          <option value={value}>
          
          </option>
        ))}
    </select>
  );
};
