import React from 'react';
import orthoPicture from '../Images/CAD project picture.png';
import hobbyPicture from '../Images/OrigamiPhoenix.jpg';
import roboticsPicture from '../Images/RoboticSurgery.jpg';
import { Link } from 'react-router-dom';


function AndreyPage() {
  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', paddingBottom: '2rem' }}>
      {/* Return to Home Button */}
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

        {/* Row 1 – Intro (text left, image right) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
            <h2> Hi, I'm Andrey. </h2>
            <p style = {{ fontSize: '1.5rem', lineHeight: '1.5' }}>
            I'm a mechanical engineering major, and am transferring to UCLA from Los Angeles Valley College. I'm really excited to experience all of the new opportunities at UCLA after transfer, but I am kind of nervous since it is going to be a big adjustment. I chose mechanical engineering since it seemed like the most broadly applicable engineering field. That way I keep my options open after I graduate. On the right I included a picture from my engineering class where we did some orthographic projections in CAD similar to the ones we did in the recent CAD workshop for HAcK.
            </p>
        </div>

        <img
          src={orthoPicture}
          alt="Orthographic projection from Engineering Class"
          style={{ width: '300px', height: 'auto', borderRadius: '10px' }}
        />
    </div>

        {/* Row 2 – Hobbies (image left, text right) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem' }}>
        <img
            src={hobbyPicture}
            alt="Origami Phoenix"
            style={{ width: '300px', height: 'auto', borderRadius: '10px', marginRight: '2rem' }}
        />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.1rem' }}>
            My Hobbies
            </h2>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.8' }}>
            In my free time, I enjoy folding origami. I find it to be a really peaceful pastime where I can just unwind, put my headphones on, and fold for an hour. Something about intensely focusing on something so delicate and precise really calms my mind. I also tutor math, physics, and chemistry which reinforces old concepts and connects me with my peers. On the left is a picture of an origami phoenix design by Satoshi Kamiya that I've always wanted to fold.
            </p>
        </div>
    </div>

    {/* Row 3 – Goals/Future Aspirations (text left, image right) */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem' }}>
    <div style={{ flex: 1, marginRight: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
        Future Goals
        </h2>
        <p style={{ fontSize: '1.5rem', lineHeight: '1.8' }}>
        Looking forward, I plan to join some clubs at UCLA like Bruin Racing or ASME and get involved with some sort of engineering research in a lab. Hopefully this will propel me towards my desired future career in robotics since it has a wide variety of applications in fields like medicine, space exploration, and automation. On the right is a picture of a surgical robot that is now widely used to perform precise surgeries.
        </p>
    </div>
    <img
        src={roboticsPicture}
        alt="Futuristic surgical robot"
        style={{ width: '300px', height: 'auto', borderRadius: '10px' }}
    />
    </div>


    </div>
  );
}

export default AndreyPage;