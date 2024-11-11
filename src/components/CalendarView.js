import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import '../styles/Calender.css';

const CalendarView = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

 
  const eventDates = new Set(events.map(event => new Date(event.date).toDateString()));

  const getEventsForSelectedDate = () =>
    events.filter(event => new Date(event.date).toDateString() === selectedDate.toDateString());

  
  const tileClassName = ({ date, view }) => {
    if (view === 'month' && eventDates.has(date.toDateString())) {
      return 'highlight-event';
    }
    return null;
  };

  return (
    <div className="calendar-view-container">
      <div className="content">
        <div className="event-details">
          <h2><u>Events on {selectedDate.toDateString()}</u></h2>
          {getEventsForSelectedDate().length === 0 ? (
            <h5>No events scheduled for this day.</h5>
          ) : (
            getEventsForSelectedDate().map((event, index) => (
              <div key={event.id} className="event-item">
                <h3 className="event-name">
                  {index + 1}. {event.name} 
                </h3>
                <p className="event-description">{event.description}</p>
                <p className="event-location"><strong>Location:</strong> {event.location}</p>
                <p className="event-date"><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
              </div>
            ))
          )}
        </div>
        <div className="calendar-container">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={tileClassName}
          />
        </div>
      </div>
      <br/><br/> <br/><br/>
    </div>
  );
};

export default CalendarView;
