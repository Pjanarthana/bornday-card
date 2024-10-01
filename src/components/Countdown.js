import React, { useState, useEffect } from 'react';
import './Countdown.css';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const nextBirthday = new Date(new Date().getFullYear() + 1, 0, 1); // Next year, January 1st
    const difference = nextBirthday - new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return (
    <section className="countdown">
      <h2>Countdown to Your Next Birthday</h2>
      <div className="countdown-timer">
        <div className="countdown-item">
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div className="countdown-item">
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div className="countdown-item">
          <span>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>
        <div className="countdown-item">
          <span>{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;