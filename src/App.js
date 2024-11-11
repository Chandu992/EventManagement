import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import Login from './components/Login';
import Register from './components/Register';
import CalendarView from './components/CalendarView';
import Home from './components/Home';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route path="/events" element={<EventList />} /> {/* Event List route */}
            <Route path="/events/new" element={<EventForm />} />
            <Route path="/events/:id" element={<EventForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/calendar" element={<CalendarView />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
