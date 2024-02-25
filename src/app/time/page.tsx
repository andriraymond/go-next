import { useState, useEffect } from 'react';

const TimePage = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch('https://maps.googleapis.com/maps/api/timezone/json?location=latitude,longitude&timestamp=timestamp&key=YOUR_API_KEY');
        if (!response.ok) {
          throw new Error('Failed to fetch time');
        }
        const data = await response.json();
        const timeZoneId = data.timeZoneId;
        const currentTime = new Date().toLocaleString('en-US', { timeZone: timeZoneId });
        setCurrentTime(currentTime);
      } catch (error) {
        console.error('Error fetching time:', error);
      }
    };

    fetchTime();

    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{currentTime}</p>
    </div>
  );
};

export default TimePage;
