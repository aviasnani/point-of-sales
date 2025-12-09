import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login, replace with backend API
    if(email && password) navigate("/dashboard");
  }

  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", backgroundColor:"#f3f4f6" }}>
      <div className="card" style={{ width:"350px" }}>
        <h2 style={{ textAlign:"center" }}>Login</h2>
        <form style={{ display:"grid", gap:"10px" }} onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="primary" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}