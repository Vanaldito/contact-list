import React, { useState } from "react";

import { AddContact } from "./components/add-contact";
import { ContactList } from "./components/contact-list";

import "./styles/app.css";

export function App() {
  const [contacts, setContacts] = useState(getContacts());

  function getContacts() {
    return Object.values(localStorage).map(JSON.parse);
  }

  function addContact(contact) {
    const { name } = contact;
    localStorage.setItem(name, JSON.stringify(contact));
    setContacts(getContacts());
  }

  function removeContact(key) {
    return () => {
      localStorage.removeItem(key);
      setContacts(getContacts());
    };
  }

  return (
    <>
      <header>
        <h1>Contact List</h1>
      </header>
      <main>
        <AddContact addContact={addContact} />
        <ContactList contacts={contacts} removeContact={removeContact} />
      </main>
    </>
  );
}
