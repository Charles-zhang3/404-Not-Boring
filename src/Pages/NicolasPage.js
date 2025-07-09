import React from 'react';
import { Link } from 'react-router-dom';

function NicolasPage() {
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

        <h1>Welcome to Nicolas' Page</h1>
        <p>This is where Nicolas can add info later.</p> 

    </div>
  );
}

export default NicolasPage;