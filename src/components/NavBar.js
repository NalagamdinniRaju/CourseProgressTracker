import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseContext } from '../contexts/CourseContext';
import { Link } from 'react-router-dom';
import '../styles.css';

const NavBar = () => {
  const { progress, currentVideo } = useContext(CourseContext);
  console.log(progress)
  const sections = [
    { title: 'Introduction to Programming', path: '/introduction' },
    { title: 'Week 1: Let\'s Learn C++', path: '/learn-c-pp' },
    { title: 'C++ STL', path: '/stl' },
    { title: 'Let\'s Learn Java', path: '/java' },
    { title: 'Object Oriented Programming Systems (OOPS)', path: '/oops' },
    { title: 'Let\'s Learn HTML', path: '/learn-html' },
    { title: 'Basics of CSS', path: '/learn-css' },
    { title: 'JavaScript Essentials', path: '/javascript-essentials' },
    { title: 'Node.js Basics', path: '/learn-nodejs' },
    { title: 'Introduction to ReactJS', path: '/learn-reactjs' },
    { title: 'Introduction to SQL', path: '/learn-sql' },
  ];
  

  const navigate = useNavigate();
  const currentIndex = sections.findIndex(section => section.path === currentVideo);

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(sections[currentIndex - 1].path);
    }
  };

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      navigate(sections[currentIndex + 1].path);
    }
  };

  return (
    <div className="navbar">
        <p className='back-to-course'>
            <Link id="link" to="/">HOME</Link>
        </p>
      <div className="navigation-buttons">
        <span className='discussion'>Discussion(13)</span>
        <button onClick={handlePrev} disabled={currentIndex <= 0}>Previous</button>
        <button onClick={handleNext} disabled={currentIndex >= sections.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default NavBar;
