import { useState, useEffect } from 'react';

export function useCustomerEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate customer events
    const interval = setInterval(() => {
      const eventTypes = ['enter', 'leave', 'spend'];
      const newEvent = {
        type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
        timestamp: new Date().toISOString(),
      };
      setEvents(prevEvents => [...prevEvents, newEvent]);
    }, 5000); // Generate a new event every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return events;
}