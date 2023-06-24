import React, { useState } from "react";
import "./contactBooks.css";

const ContactBooks = (props) => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <div className="contact-item">
        <img className="contact-img" src={props.avatarUrl} alt="profile" />
        <div className="user-details">
          <p>Name: {props.name}</p>
          <p>Lastname: {props.surname}</p>
          <p>Email: {props.email}</p>
          <button onClick={() => setShowAge(!showAge)}>Show Age</button>
          {showAge && <p>Age: {props.age}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactBooks;
