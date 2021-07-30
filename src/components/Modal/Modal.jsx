import React, { useState } from 'react';
import './Modal.css';

function Modal({ user, closeModal }) {
  return (
    <div className="visible">
      <div className="modal-content">
        <section className="header-modal">
          <img alt="user icon" src={user.picture.large}></img>
          <button onClick={closeModal} className="modal-close" arial-label="close">X</button>
        </section>
        <section className="body-modal">
          <p className="modal-title">{user.name.first + " " + user.name.last}</p>
          <div className="user-description">
            <div className="user-data">
              <p className="stads"><strong>Username:</strong> {" " + user.login.username}</p>
              <p className="stads"><strong>Age:</strong>{" " + user.dob.age}</p>
              <p className="stads"><strong>Gender:</strong>{" " + user.gender}</p>
            </div>

            <div className="contact">
              <p className="stads"><strong>City:</strong>{" " + user.location.city}</p>
              <p className="stads"><strong>Country:</strong>{" " + user.location.country}</p>
              <p className="stads"><strong>State:</strong>{" " + user.location.state}</p>
              <p className="stads"><strong>Phone:</strong>{" " + user.phone}</p>
              <p className="stads"><strong>Cellphone:</strong>{" " + user.cell}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Modal;