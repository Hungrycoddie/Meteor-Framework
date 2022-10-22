import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";

// use tracker hook to modify from DB 2

import { useTracker } from "meteor/react-meteor-data";

export const ContactList = () => {
  const contacts = useTracker(() => {
    // call tracker 3
    return ContactsCollection.find({}).fetch(); // Tracker is a meteor libray  1
  });

  return (
    <>
      <h3>Contact List</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </>
  );
};
