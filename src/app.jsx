import React, { useState } from "react";
import { AddContact } from "./components/add-contact";
import { ContactList } from "./components/contact-list";

import { getContacts } from "./helpers/get-contacts";

import "./styles/app.css";

export function App() {
  const [contacts, setContacts] = useState(getContacts());

  function addContact(contact) {
    const { name } = contact;
    localStorage.setItem(name, JSON.stringify(contact));
    setContacts((prevContacts) => prevContacts.concat(contact));
  }

  function removeContact(contactName) {
    return () => {
      localStorage.removeItem(contactName);
      setContacts((prevContacts) => {
        let removedContactIndex = 0;
        for (let i = 0; i < prevContacts.length; i++) {
          if (prevContacts[i].name === contactName) {
            removedContactIndex = i;
            break;
          }
        }

        return prevContacts
          .slice(0, removedContactIndex)
          .concat(prevContacts.slice(removedContactIndex + 1));
      });
    };
  }

  return (
    <>
      <header>
        <h1>Lista de contactos</h1>
      </header>
      <main>
        <AddContact addContact={addContact} />
        <ContactList contacts={contacts} removeContact={removeContact} />
      </main>
    </>
  );
}
