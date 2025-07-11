import React, { useState, useEffect } from 'react';

const CarGame = () => {
  const [carX, setCarX] = useState(20);
  const [gameOver, setGameOver] = useState(false);
  const [youWin, setYouWin] = useState(false);

  const gameWidth = 500;
  const carSize = 40;
  const trapZone = 300;

  const rewardLink = 'https://youtu.be/dQw4w9WgXcQ?si=_bxkn74GI7NKPl3J'; // ← your secret reward

  const handleRestart = () => {
    setCarX(20);
    setGameOver(false);
    setYouWin(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver || youWin) return;

      if (e.key === 'ArrowRight') {
        setCarX((prev) => {
          const nextX = prev + 10;
          if (nextX >= trapZone) {
            setGameOver(true);
          }
          return nextX;
        });
      }

      if (e.key === 'ArrowLeft') {
        setCarX((prev) => {
          const nextX = prev - 10;
          if (nextX <= 10) {
            setYouWin(true);
          }
          return Math.max(0, nextX);
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameOver, youWin]);

  return (
    <div
      style={{
        width: `${gameWidth}px`,
        height: '120px',
        margin: '2rem auto',
        border: '2px solid #333',
        backgroundColor: '#f0f0f0',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
      }}
    >
      {/* 🚗 Car */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: `${carX}px`,
          width: `${carSize}px`,
          height: `${carSize / 2}px`,
          backgroundColor: 'red',
          borderRadius: '5px',
        }}
      ></div>

      {/* 🏁 Misleading Flag */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: `${trapZone - 25}px`,
          fontSize: '24px',
        }}
      >
        🏁
      </div>

      {/* 💥 Game Over Message */}
      {gameOver && (
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '20%',
            backgroundColor: 'white',
            padding: '1rem',
            border: '2px solid red',
            fontWeight: 'bold',
            fontSize: '24px',
            color: 'red',
            borderRadius: '10px',
          }}
        >
          💥 You got wrecked!
        </div>
      )}

      {/* 🏆 Win Message & 🌳 Reward Button */}
      {youWin && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '25%',
              left: '10%',
              backgroundColor: 'white',
              padding: '1rem',
              border: '2px solid green',
              fontWeight: 'bold',
              fontSize: '24px',
              color: 'green',
              borderRadius: '10px',
            }}
          >
            🏆 You reversed your fate. You win!
          </div>

          <button
            onClick={() => window.open(rewardLink, '_blank')}
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '0.5rem 1rem',
              backgroundColor: 'gold',
              border: '2px solid green',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            🌳 How to Plant a Money Tree
          </button>
        </>
      )}

      {/* 🔁 Restart Button */}
      {(gameOver || youWin) && (
        <button
          onClick={handleRestart}
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          🔁 Restart
        </button>
      )}

      {/* 🎬 Hint */}
      {!gameOver && !youWin && (
        <p
          style={{
            position: 'absolute',
            bottom: '5px',
            width: '100%',
            textAlign: 'center',
            fontSize: '14px',
            fontStyle: 'italic',
          }}
        >
          ➡️ Use Arrow Keys to drive — but remember what <strong>Ready Player One</strong> taught us... 👀
        </p>
      )}
    </div>
  );
};

export default CarGame;





