'use client'

// components/About/FarmLogo.tsx
import React from 'react';

const FarmLogo: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <img 
        src="/images/logo/farmlogo.png" 
        alt="Farm Logo" 
        style={{ width: '150px', height: 'auto', borderRadius: '10px' }} 
      />
      <h2 style={{ marginTop: '10px', fontSize: '1.5rem', color: '#4CAF50' }}>Our Farm Logo</h2>
      <p style={{ fontSize: '1rem', color: '#555' }}>
        The logo represents our commitment to sustainability and quality. It symbolizes our bond with nature and the community.
      </p>
    </div>
  );
};

export default FarmLogo;
