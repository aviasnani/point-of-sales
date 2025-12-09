import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DefaultLayout({ children, title }) {
  return (
    <>
      <Sidebar/>
      <Header title={title}/>
      <div className="main-content">{children}</div>
    </>
  );
}