'use client';

import React from 'react';

const coins = [
  {
    id: 1,
    type: 'Gold Coin',
    weight: '10g',
    price: '$600',
    imgSrc: 'https://example.com/images/gold-coin.png', // Replace with actual URL
    isGold: true,
  },
  {
    id: 2,
    type: 'Silver Coin',
    weight: '50g',
    price: '$100',
    imgSrc: 'https://example.com/images/silver-coin.png', // Replace with actual URL
    isGold: false,
  },
  {
    id: 3,
    type: 'Gold Coin',
    weight: '20g',
    price: '$1200',
    imgSrc: 'https://example.com/images/gold-coin.png', // Replace with actual URL
    isGold: true,
  },
  {
    id: 4,
    type: 'Silver Coin',
    weight: '100g',
    price: '$200',
    imgSrc: 'https://example.com/images/silver-coin.png', // Replace with actual URL
    isGold: false,
  },
];

const CoinCards: React.FC = () => {
  return (
    <div>
      {/* Heading */}
      <h1 style={{ textAlign: 'center', margin: '20px 0', fontSize: '2rem', color: '#333' }}>
        Coins
      </h1>

      {/* Cards Container */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px',
        }}
      >
        {coins.map((coin) => (
          <div
            key={coin.id}
            style={{
              width: '200px',
              padding: '15px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              backgroundColor: '#fff',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              position: 'relative',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = 'scale(1)')
            }
          >
            {/* Kart Tag for Gold Coins */}
            {coin.isGold && (
              <span
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: '#FFD700',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                Kart
              </span>
            )}

            {/* Coin Image */}
            <img
              src={coin.imgSrc}
              alt={coin.type}
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'contain',
                marginBottom: '15px',
              }}
            />

            {/* Coin Details */}
            <h3 style={{ margin: '0', fontSize: '1.2rem' }}>{coin.type}</h3>
            <p style={{ margin: '5px 0', color: '#555' }}>{coin.weight}</p>
            <p style={{ margin: '5px 0', fontWeight: 'bold', color: '#333' }}>
              {coin.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinCards;
