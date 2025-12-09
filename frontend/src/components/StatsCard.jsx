import React from "react";

export default function StatsCard({ title, value }) {
  return (
    <div className="card" style={{flex:1, minWidth:"180px"}}>
      <h4>{title}</h4>
      <p style={{fontSize:"22px", fontWeight:"bold"}}>{value}</p>
    </div>
  );
}