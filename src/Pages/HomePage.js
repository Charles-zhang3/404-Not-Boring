import React from 'react';
import hackLogo from '../Images/HAcK Logo.png';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div
      style={{
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '5rem', marginBottom: '1rem' }}>Welcome to Our Team Page!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
        Learn more about each of us by clicking a name at the top! (easter egg: click the logo)
      </p>
    <Link to="/easteregg">
    <img
        src={hackLogo}
        alt="HAcK Program Logo"
        style={{ width: '300px', maxWidth: '80%', height: 'auto', cursor: 'pointer' }}
    />
    </Link>
    </div>
  );
}

export default HomePage;