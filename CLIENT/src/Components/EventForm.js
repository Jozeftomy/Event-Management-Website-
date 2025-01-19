import React, { useState } from 'react';
import './EventForm.css';

function EventForm() {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    location: '',
    eventType: '',
    eventImage: null,
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      eventImage: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle event submission (e.g., sending data to API or backend)
    console.log(eventData);
  };

  return (
    <div className="event-form-container">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <label>
          Event Name:
          <input
            type="text"
            name="eventName"
            value={eventData.eventName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Event Date:
          <input
            type="date"
            name="eventDate"
            value={eventData.eventDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Event Time:
          <input
            type="time"
            name="eventTime"
            value={eventData.eventTime}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Event Type:
          <select
            name="eventType"
            value={eventData.eventType}
            onChange={handleChange}
            required
          >
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Conference">Conference</option>
            <option value="Birthday">Birthday</option>
            <option value="Concert">Concert</option>
          </select>
        </label>

        <label>
          Event Image:
          <input
            type="file"
            name="eventImage"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="create-event-button">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;
