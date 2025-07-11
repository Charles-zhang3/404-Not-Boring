import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../Images/Charles.jpg';
import CarGame from './CarGame';

function CharlesPage() {
  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ padding: '1rem 2rem' }}>
        <Link
          to="/"
          style={{
            textDecoration: 'underline',
            color: 'blue',
            fontWeight: '500',
            padding: '0.25rem 0.5rem',
            display: 'inline-block',
            transition: 'color 0.2s ease',
          }}
        >
          Return to Home
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <img 
          src={Picture}
          alt="Charles" 
          style={{ width: '200px', borderRadius: '50%', marginBottom: '1rem' }}
        />
        <h1>Welcome to Charles' Page</h1>
        <p style={{ fontSize: '18px', marginTop: '1rem' }}>
          😎 I'm Charles, and here’s what I love doing:
        </p>
        <ul style={{ listStyleType: 'none', fontSize: '16px', padding: 0, lineHeight: '2' }}>
          <li>🛌 Sleeping (a lot)</li>
          <li>🍜 Eating good food</li>
          <li>🎮 Playing video games</li>
          <li>🏀 Hooping whenever I can</li>
        </ul>

        <CarGame />
      </div>
    </div>
  );
}

export default CharlesPage;

