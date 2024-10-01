// File: src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BirthdayMessage from './components/BirthdayMessage';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import WishForm from './components/WishForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    // Simulating loading wishes from an API
    setTimeout(() => {
      setWishes([
        { id: 1, name: 'Naaa Dhan', message: 'Happy belated birthday! Have a great year ahead!' },
        { id: 2, name: 'Ipavum Naa Dhaaa', message: "Sorry I'm late, but I hope your day was amazing!" },
      ]);
    }, 1000);
  }, []);

  const addWish = (newWish) => {
    setWishes((prevWishes) => [...prevWishes, { id: prevWishes.length + 1, ...newWish }]);
  };

  return (
    <div className="App">
      <Header />
      <BirthdayMessage />
      <Countdown />
      <Gallery />
      <WishForm onAddWish={addWish} />
      <div className="wishes-container">
        <h2>Birthday Wishes</h2>
        {wishes.map((wish) => (
          <div key={wish.id} className="wish">
            <h3>{wish.name}</h3>
            <p>{wish.message}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;