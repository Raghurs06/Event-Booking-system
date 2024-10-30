import React from "react";
import TechConference from '../assets/tech-conference.jpg';
import Music from '../assets/music.jpg';
import HoliCelebration from '../assets/holi-celebration.jpg';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <nav className="container1 navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h2>Book My Event</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="container-link collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eventlist">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-img-container">
        {/* <img src={backgroundImage} /> */}
      </div>
      <div className="message-container">
        <h1>Event Booking</h1>
        <h1 id="h1">Website</h1>
      </div>
      <div className="event-container">
        <div className="event-img-container1">
          <img src={TechConference} alt="" /> 
          <Link className="nav-link" to="/eventlist">
          <button className="btn btn-primary">Book Ticket</button> 
          </Link>        
        </div>
        <div className="event-img-container2">
          <img src={Music} alt="" />
          <Link className="nav-link" to="/eventlist">
          <button className="btn btn-primary">Book Ticket</button> 
          </Link> 
        </div>
        <div className="event-img-container3">
          <img src={HoliCelebration} alt="" />
          <Link className="nav-link" to="/eventlist">
          <button className="btn btn-primary">Book Ticket</button> 
          </Link> 
        </div>
      </div>
      <footer>
        <p>Book Your first Ticket and get 10% discount</p>
      </footer>
    </>
  );
}

export default HomePage;
