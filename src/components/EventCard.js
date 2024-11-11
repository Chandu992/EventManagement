import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EventCard = ({ event, onDelete }) => {
  const handleDelete = async () => {
    try {
     
      await axios.delete(`http://localhost:8080/api/events/${event.id}`);
      
      onDelete(event.id);
    } catch (error) {
      console.error("There was an error deleting the event!", error);
    }
  };

  return (
    <div className="event-card">
      <h3>{event.name}</h3><br/>
      <p>{event.description}</p>
      <div className="event-details">
        <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
        <p><strong>Location:</strong> {event.location}</p>
      </div>
      <Link to={`/events/${event.id}`}>Edit Event</Link>
      <button onClick={handleDelete} className="delete-button">Delete</button> 
    </div>
  );
};

export default EventCard;
