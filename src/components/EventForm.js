import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/eventFormstyle.css'; // Import the CSS file for styling

const EventForm = () => {
  const [event, setEvent] = useState({ name: '', description: '', date: '', location: '' });
  const navigate = useNavigate();
  const { id } = useParams();  

 
  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        try {
          const response = await axios.get(`/api/events/${id}`);
          setEvent(response.data); 
        } catch (error) {
          console.error("There was an error fetching the event!", error);
        }
      };
      fetchEvent();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
      
        await axios.put(`http://localhost:8080/api/events/${id}`, event);
        alert('Updated successfully');
      } else {
        
        await axios.post('http://localhost:8080/api/events', event);
        alert("Event created successfully");
        
      setEvent({ name: '', description: '', date: '', location: '' });
    }

   
    navigate('/');
  } catch (error) {
      console.error("There was an error submitting the event!", error);
    }
  };

  return (
    <div className="event-form-container">
      <h1>{id ? 'Edit Event' : 'Create New Event'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={event.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={event.description}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={event.location}
          onChange={handleChange}
          required
        />
        <button className='but' type="submit">{id ? 'Update Event' : 'Create Event'}</button>
      </form>
    </div>
  );
};

export default EventForm;
