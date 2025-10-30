// components/InfoPage.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateContact } from "./infoSlice";

export default function InfoPage() {
  const info = useSelector((state) => state.info);
  const dispatch = useDispatch();
  const [newEmail, setNewEmail] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>{info.course}</h2>
      <p>Duration: {info.duration}</p>
      <p>Contact: {info.contact}</p>

      <input
        type="email"
        placeholder="new email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <button
        onClick={() => {
          if (newEmail) {
            dispatch(updateContact(newEmail));
            setNewEmail("");
          }
        }}
      >
        Update Contact
      </button>
    </div>
  );
}
