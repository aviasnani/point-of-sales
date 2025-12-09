import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import ChartCard from "../components/ChartCard";

export default function Reports() {
  return (
    <DefaultLayout title="Reports">
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <ChartCard title="Sales Report">
          <div style={{ height: "200px", backgroundColor: "#eee", borderRadius: "6px" }}></div>
        </ChartCard>
        <ChartCard title="Revenue Report">
          <div style={{ height: "200px", backgroundColor: "#eee", borderRadius: "6px" }}></div>
        </ChartCard>
      </div>
    </DefaultLayout>
  );
}