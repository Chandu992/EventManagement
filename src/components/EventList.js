import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import '../styles/eventListStyle.css';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error("There was an error fetching the events!", error);
      }
    };
    fetchEvents();
  }, []);

    
    const handleDelete = (eventId) => {
      setEvents((prevEvents) => prevEvents.filter(event => event.id !== eventId));
    };

   
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>All Events</h1>

       
       <div className="search-container">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="search-bar"
        />
      </div>

      
       <div className="event-list">
        {filteredEvents.length === 0 ? (
          <p>No events available.</p>
        ) : (
          filteredEvents.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onDelete={handleDelete} 
            />
          ))
        )}
      </div>
      <br/> <br/> <br/> <br/> <br/> 
    </div>
  );
};

export default EventList;
