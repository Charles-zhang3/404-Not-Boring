import React from 'react';
import WesJumpscare from '../Images/WesJumpscare.jpg'; 
import { Link } from 'react-router-dom';

function EasterEggPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flexDirection: 'column',
        padding: '2rem'
      }}
    >

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
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Wes Jumpscare</h1>
      <img
        src={WesJumpscare}
        alt="Wes Funny Costume"
        style={{ maxWidth: '90%', height: 'auto', borderRadius: '12px' }}
      />
    </div>
  );
}

export default EasterEggPage;
