import React from "react";

import { Contact } from "./contact";

import "../styles/contact-list.css";

export function ContactList({ contacts, removeContact }) {
  if (!contacts.length) return <p className="without-contacts">No tienes contactos</p>;

  return (
    <ul className="contact-list">
      <li>
        <div className="contact">
          <p>Nombre</p>
          <p>Teléfono</p>
          <p>Eliminar</p>
        </div>
      </li>
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
