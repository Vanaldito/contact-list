import React from "react";

export function Contact({ name, phone, removeContact }) {
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <button onClick={removeContact}>remove</button>
    </div>
  );
}
