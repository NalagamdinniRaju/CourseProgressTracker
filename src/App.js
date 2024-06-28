import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursePage from './pages/CoursePage';
import { CourseProvider } from './contexts/CourseContext';
import './App.css';

const App = () => {
  return (
    <CourseProvider>
      <Router>
        <Routes>
          <Route path="*" element={<CoursePage />} />
        </Routes>
      </Router>
    </CourseProvider>
  );
};

export default App;
