import React, { useState } from "react";

import { checkPhoneNumber } from "../helpers/check-phone-number";
import { checkName } from "../helpers/check-name";
import { Notification } from "./notification";

import "../styles/add-contact.css";

export function AddContact({ addContact }) {
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [notification, setNotification] = useState("");

  function showNotification(message) {
    setNotification(message);
    setTimeout(() => {
      setNotification("");
    }, 2000);
  }

  function changeHandler(setValue) {
    return (event) => {
      setValue(event.target.value);
    };
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!checkName(contactName)) {
      return showNotification("Enter a valid name (20 or less characters)")
    }
    if (!checkPhoneNumber(contactPhone)) {
      return showNotification("Enter a valid phone number");
    }

    const contactInfo = {
      name: contactName,
      phone: contactPhone,
    };

    addContact(contactInfo);

    setContactName("");
    setContactPhone("");
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Enter contact name"
          value={contactName}
          onChange={changeHandler(setContactName)}
          maxLength={20}
        />
        <input
          placeholder="Enter contact number"
          value={contactPhone}
          onChange={changeHandler(setContactPhone)}
        />
        <button type="submit">Add contact</button>
      </form>
      {notification && <Notification message={notification} />}
    </>
  );
}
