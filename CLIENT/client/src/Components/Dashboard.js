import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Event Management Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>Events</h2>
          <p>Manage and track all events.</p>
          <Link to="/event-form" className="dashboard-link"> 
            Go to Events
          </Link>
        </div>
        <div className="dashboard-card">
          <h2>Invitations</h2>
          <p>Send and manage event invitations.</p>
          <Link to="/invitation" className="dashboard-link"> 
            Go to Invitations
          </Link>
        </div>
        <div className="dashboard-card">
          <h2>Budget</h2>
          <p>Keep track of event spending.</p>
          <Link to="/budget-form" className="dashboard-link"> 
            Go to Budget
          </Link>
        </div>
        <div className="dashboard-card">
          <h2>Vendors</h2>
          <p>Manage event vendors and suppliers.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
