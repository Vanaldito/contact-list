import React from "react";

import "../styles/contact.css";

export function Contact({ name, phone, removeContact }) {
  return (
    <div className="contact">
      <p>{name}</p>
      <p>{phone}</p>
      <button onClick={removeContact}>
        <span className="material-icons">
          delete
        </span>
      </button>
    </div>
  );
}
