import React from "react";
import DefaultLayout from "../layout/DefaultLayout";

export default function Settings() {
  return (
    <DefaultLayout title="Settings">
      <div className="card">
        <h2>Application Settings</h2>
        <form style={{ display: "grid", gap: "10px" }}>
          <label>
            Company Name
            <input type="text" placeholder="Enter company name" />
          </label>
          <label>
            Currency
            <select>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
            </select>
          </label>
          <button className="primary">Save Settings</button>
        </form>
      </div>
    </DefaultLayout>
  );
}