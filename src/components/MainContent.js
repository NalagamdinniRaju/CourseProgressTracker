import React from 'react';
import '../styles.css';

const MainContent = ({ content }) => {
  return (
    <div className="main-content">
      <div className="content">
        {content}
      </div>
    </div>
  );
};

export default MainContent;
