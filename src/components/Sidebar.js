import React, { useContext, useState } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import { Link, useLocation } from 'react-router-dom';
import { RiMenuUnfold3Fill, RiMenuFold3Fill,RiMenuLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa6";
import CertificatePopup from './CertificatePopup';

import '../styles.css';

const Sidebar = () => {
  const { progress } = useContext(CourseContext);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const sections = [
    { title: 'Introduction to Programming', path: '/introduction', videoUrl: 'https://www.youtube.com/watch?v=zOjov-2OZ0E' },
    { title: 'Week 1: Let\'s Learn C++', path: '/learn-c-pp', videoUrl: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y' },
    { title: 'C++ STL', path: '/stl', videoUrl: 'https://www.youtube.com/watch?v=RRVYpIET_RU&t=304s' },
    { title: 'Let\'s Learn Java', path: '/java', videoUrl: 'https://www.youtube.com/watch?v=A74TOX803D0' },
    { title: 'Object Oriented Programming Systems (OOPS)', path: '/oops', videoUrl: 'https://www.youtube.com/watch?v=e4fwY9ZsxPw' },
    { title: 'Let\'s Learn HTML', path: '/learn-html', videoUrl: 'https://www.youtube.com/watch?v=kUMe1FH4CHE' },
    { title: 'Basics of CSS', path: '/learn-css', videoUrl: 'https://www.youtube.com/watch?v=OXGznpKZ_sA' },
    { title: 'JavaScript Essentials', path: '/javascript-essentials', videoUrl: 'https://www.youtube.com/watch?v=PkZNo7MFNFg' },
    { title: 'Node.js Basics', path: '/learn-nodejs', videoUrl: 'https://www.youtube.com/watch?v=TlB_eWDSMt4' },
    { title: 'Introduction to ReactJS', path: '/learn-reactjs', videoUrl: 'https://www.youtube.com/watch?v=REACTJS_VIDEO_URL' },
    { title: 'Introduction to SQL', path: '/learn-sql', videoUrl: 'https://www.youtube.com/watch?v=SQL_VIDEO_URL' },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!isCollapsed && (
          <p className="back-to-course">
            <Link id="link" to="/"><FaChevronLeft className="left-arrow" />Back to course</Link>
          </p>
        )}
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isCollapsed ? <RiMenuUnfold3Fill size={30} /> : <RiMenuFold3Fill size={30} />}
        </button>
      </div>

      {!isCollapsed && (
        <div>
          <div>
            <progress id="file" value={progress} max="100" ></progress><br />
            <label htmlFor="file" className="percentage">{parseInt(progress)}% Completed</label>
          </div>
          <hr />
          <h3 className='section-title'><RiMenuLine className='left-arrow'/>Contents</h3>
          <ul className="sections-list">
            {sections.map((section, index) => (
              <li key={index} className={`section-title ${location.pathname === section.path ? 'active' : ''}`}>
                <Link to={section.path}>{section.title}</Link>
              </li>
            ))}
          </ul>
          {
            progress < 95 ? (<button className="certificate-btn" disabled={progress < 95}>Get Certificate</button>) :  <CertificatePopup />
          }
         
        </div>
      )}
    </div>
  );
};

export default Sidebar;
