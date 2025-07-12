import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../Images/Even Better AI Image.png';

function NicolasPage() {
  return (
    <div style={{ backgroundColor: '#ee6c6cff', minHeight: '100vh', padding: '2rem' }}>
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

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <img 
            src={Picture}
            alt="Image of Nicolas" 
            style={{ width: '420px', borderRadius: '7%', marginBottom: '1rem' }}
          />

          <h1>Hello! I'm Nic</h1>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.5' }}>
            I am entering my second year in LA Pierce College pursuing mechanical engineering. 
            I love math and helping others succeed in math, but unfortunately, I am not a fan of english. 
            In my free time, I mostly enjoy staying in my house and doing activities where I can improve at my own pace, such as solving Rubik's cubes.
            I also enjoy playing video games, mostly single-player games with a good story, like Xenoblade Chronicles 2, but my favorite game of all time is Super Smash Bros Ultimate since I can beat all my friends.
            I am also a big fan of anime, with my favorite being Hunter x Hunter.
            Even though I seem like a shut-in, I actually love outdoor activities and most consider me to be very athletic. 
            I've played soccer and basketball for most of my life, and I still play basketball with my friends every week.
            I also have been going around California and running in long-distance races, such as 5ks and half marathons, and I plan to run a full marathon in the future.
          
          </p>
                <a
          className="App-link"
          href="https://www.youtube.com/watch?v=501jQOimQVc"
          target="_blank"
          rel="noopener noreferrer"
        >
          If you enjoy instrumental music, listen to this amazing composition!!
        </a> 
          </div>
        </div>
      </div>
  );
}

export default NicolasPage;