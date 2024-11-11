import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbarstyle.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">AboutUs</Link></li>
          <li><Link to="/calendar">Calendar View</Link></li>
          <li><Link to="/events/new">Create Event</Link></li>
          <li><Link to="/events">List of Events</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
