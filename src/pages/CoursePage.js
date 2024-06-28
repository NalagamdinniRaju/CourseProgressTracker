
import React, { useContext, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import { CourseContext } from '../contexts/CourseContext';
import NavBar from '../components/NavBar';
import VideoContent from '../components/VideoContent'
import { Route, Routes, useLocation } from 'react-router-dom';
import '../styles.css';

const CoursePage = () => {
  const { updateCurrentVideo } = useContext(CourseContext);
  const location = useLocation();

  useEffect(() => {
    updateCurrentVideo(location.pathname);
  }, [location.pathname, updateCurrentVideo]);

  return (
    <div className="course-page">
      <Sidebar />
      <div className="content-wrapper">
        <NavBar />
        <Routes>
          <Route path="/introduction" element={<MainContent content={<VideoContent videoUrl="https://www.youtube.com/watch?v=zOjov-2OZ0E" />} />} />
          <Route path="/learn-c-pp" element={<MainContent content={<VideoContent videoUrl="https://www.youtube.com/watch?v=vLnPwxZdW4Y" />} />} />
          <Route path="/stl" element={<MainContent content={<VideoContent videoUrl="https://www.youtube.com/watch?v=RRVYpIET_RU&t=304s" />} />} />
          <Route path="/java" element={<MainContent content={<VideoContent videoUrl="https://www.youtube.com/watch?v=A74TOX803D0" />} />} />
          <Route path="/oops" element={<MainContent content={<VideoContent videoUrl="https://www.youtube.com/watch?v=e4fwY9ZsxPw" />} />} />
          <Route path="/learn-html" element={<MainContent content={<VideoContent videoUrl="https://www.youtube.com/watch?v=kUMe1FH4CHE" />} />} />
          <Route path="/learn-css" element={<MainContent content={<VideoContent videoUrl="https://www.youtube.com/watch?v=OXGznpKZ_sA" />} />} />
          <Route path="/javascript-essentials" element={<MainContent content={<VideoContent videoUrl="https://www.youtube.com/watch?v=PkZNo7MFNFg" />} />} />
          <Route path="/learn-nodejs" element={<MainContent content={<VideoContent videoUrl="https://www.youtube.com/watch?v=TlB_eWDSMt4" />} />} />
          <Route path="/learn-reactjs" element={<MainContent content={<VideoContent videoUrl="https://www.youtube.com/watch?v=REACTJS_VIDEO_URL" />} />} />
          <Route path="/learn-sql" element={<MainContent content={<VideoContent videoUrl="https://www.youtube.com/watch?v=SQL_VIDEO_URL" />} />} />
        </Routes>
      </div>
    </div>
  );
};

export default CoursePage;
