import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "./Home2.css";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editEmail, setEditEmail] = useState("");
  const [editName, setEditName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const local = localStorage.getItem("user");
    if (!local) navigate("/login");
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.get("http://localhost:5000/users");
      const data = res.data;
      if (Array.isArray(data)) setUsers(data);
      else if (Array.isArray(data.users)) setUsers(data.users);
      else if (Array.isArray(data.data)) setUsers(data.data);
      else setUsers([]);
    } catch (err) {
      setMessage("Could not load users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setUsers(prev => prev.filter(u => u.id !== id));
    } catch {
      setMessage("Delete failed");
    }
  }

  function startEdit(u) {
    setEditingId(u.id);
    setEditEmail(u.email || "");
    setEditName(u.name || "");
  }

  function cancelEdit() {
    setEditingId(null);
    setEditEmail("");
    setEditName("");
  }

  async function saveEdit() {
    try {
      const payload = {};
      if (editEmail) payload.email = editEmail;
      if (editName) payload.name = editName;
      await axios.put(`http://localhost:5000/users/${editingId}`, payload);
      setUsers(prev => prev.map(u => (u.id === editingId ? { ...u, email: editEmail, name: editName } : u)));
      cancelEdit();
    } catch {
      setMessage("Update failed");
    }
  }

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>Home</h2>
        <div>
          <button className="login-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="summary">
        <p>Total users: {users.length}</p>
      </div>
      <div className="summary">
        <a href="/Signup"><button>Add a User</button></a>
      </div>
      {loading && <p>Loading users...</p>}
      {message && <div className="message error">{message}</div>}

      <div className="user-list">
        {users.map(u => (
          <div key={u.id} className="user-card">
            {editingId === u.id ? (
              <>
                <input className="login-input" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Name" />
                <input className="login-input" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} placeholder="Email" />
                <div>
                  <button className="login-button" onClick={saveEdit}>Save</button>
                  <button className="login-button" onClick={cancelEdit}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p style={{ margin: 0 }}>{u.name || u.email}</p>
                  <small>{u.email}</small>
                </div>
                <div>
                  <button className="login-button" onClick={() => startEdit(u)}>Edit</button>
                  <br />
                  <button className="login-button" onClick={() => handleDelete(u.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
