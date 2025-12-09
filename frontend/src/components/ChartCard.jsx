import React from "react";

export default function ChartCard({ title, children }) {
  return (
    <div className="card" style={{flex:1, minWidth:"300px"}}>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
}