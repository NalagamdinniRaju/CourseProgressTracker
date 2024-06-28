import React from 'react';

import '../styles.css';

const NavigationButtons = ({ navigate }) => {
  return (
    <div className="navigation-buttons">
      <button onClick={() => navigate('previous')} className="nav-btn">Previous</button>
      <button onClick={() => navigate('next')} className="nav-btn">Next</button>
    </div>
  );
};

export default NavigationButtons;
