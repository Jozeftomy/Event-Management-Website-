import React, { useState } from 'react';
import './InvitationPage.css';

function InvitationPage() {
  const [invitationDetails, setInvitationDetails] = useState({
    title: '',
    description: '',
    email: '',
    venue: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvitationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSendInvitation = () => {
    alert(`Invitation sent to ${invitationDetails.email}`);
    console.log('Invitation Details:', invitationDetails);
  };

  return (
    <div className="invitation-page-container">
      {/* Left Side: Invitation Form */}
      <div className="invitation-form">
        <h2>Create Invitation</h2>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={invitationDetails.title}
            onChange={handleChange}
            placeholder="Event Title"
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={invitationDetails.description}
            onChange={handleChange}
            placeholder="Event Description"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={invitationDetails.email}
            onChange={handleChange}
            placeholder="Recipient's Email"
            required
          />
        </label>
        <label>
          Venue:
          <input
            type="text"
            name="venue"
            value={invitationDetails.venue}
            onChange={handleChange}
            placeholder="Event Venue"
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={invitationDetails.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={invitationDetails.time}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSendInvitation} className="invite-button">
          Send Invitation
        </button>
      </div>

      {/* Right Side: Invitation Card */}
      <div className="invitation-card">
        <h2 className="card-title">{invitationDetails.title || 'Your Event Title'}</h2>
        <p className="card-description">
          {invitationDetails.description || 'Event description goes here...'}
        </p>
        <div className="card-details">
          <p>
            <strong>Venue:</strong> {invitationDetails.venue || 'Event Venue'}
          </p>
          <p>
            <strong>Date:</strong> {invitationDetails.date || 'Event Date'}
          </p>
          <p>
            <strong>Time:</strong> {invitationDetails.time || 'Event Time'}
          </p>
          <p>
            <strong>Email:</strong> {invitationDetails.email || 'Recipient Email'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InvitationPage;
