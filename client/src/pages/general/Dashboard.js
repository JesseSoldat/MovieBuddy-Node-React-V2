import React from "react";

const Dashboard = () => {
  let content;

  return (
    <div className="container">
      <h1 className="text-center mb-3 mt-3 display-4">Dashboard</h1>
      <div className="d-flex flex-wrap">{content}</div>
    </div>
  );
};

export default Dashboard;
