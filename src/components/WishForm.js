import React, { useState } from 'react';
import './WishForm.css';

function WishForm({ onAddWish }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      onAddWish({ name, message });
      setName('');
      setMessage('');
    }
  };

  return (
    <section className="wish-form">
      <h2>Leave a Birthday Wish</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send Wish</button>
      </form>
    </section>
  );
}

export default WishForm;