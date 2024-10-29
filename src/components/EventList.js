import React, { useState, useEffect, useMemo } from 'react';
import eventsData from '../data/eventsData.json';
import Pagination from './Pagination'; 
import { Link } from "react-router-dom";

const EventList = () => {
  const [events, setEvents] = useState([]);  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 5; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setEvents(eventsData); 
      } catch (err) {
        setError('Failed to fetch events.');
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  const filteredEvents = useMemo(() => {
    return events.filter(event =>
      event.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [events, filter]);

 
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

 
  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const eventImages = {
    1: require('../assets/tech-conference.jpg'),
    2: require('../assets/art-workshop.jpg'),
    3: require('../assets/holi-celebration.jpg'),
    4: require('../assets/music.jpg')
   
  };
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='event-list-container'>
      <h1>Event List</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {currentEvents.map(event => (
          <li key={event.id}>
            <div className="main-event-List-container">
            <div>
           <img 
              src={eventImages[event.id] || eventImages[1]} 
              alt={event.title || 'Event Image'} 
              style={{width: '20vw', height: '60vh', objectFit: 'cover' }}   
            />
            </div>
            <div id='content'>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>Category: {event.category}</p>
            <p>Date: {event.date}</p>
            <p>Available Seats: {event.availableSeats}</p>
            <p>Price: ${event.price}</p>
            <Link to={`/event/${event.id}`}>
              <button className="btn btn-primary" aria-label={`View details for ${event.title}`}>View Details</button>
            </Link>
           </div>
           </div>
          </li>
        ))}
      </ul>
     
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={paginate} 
      />
    </div>
  );
};

export default EventList;
