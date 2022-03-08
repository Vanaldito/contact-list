import React from "react";

import { Contact } from "./contact";

export function ContactList({ contacts, removeContact }) {
  return (
    <ul>
      {contacts.map((contact) => {
        const { name, phone } = contact;
        return (
          <li key={name}>
            <Contact
              name={name}
              phone={phone}
              removeContact={removeContact(name)}
            />
          </li>
        );
      })}
    </ul>
  );
}
