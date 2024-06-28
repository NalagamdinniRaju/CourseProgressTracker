
import React, { createContext, useState } from 'react';

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [currentVideo, setCurrentVideo] = useState('/introduction');
  const [completedVideos, setCompletedVideos] = useState([]);

  const updateProgress = (value) => {
    setProgress((prev) => Math.min(prev + value, 100));
  };

  const updateCurrentVideo = (video) => {
    setCurrentVideo(video);
  };

  const addCompletedVideo = (video) => {
    if (!completedVideos.includes(video)) {
      setCompletedVideos([...completedVideos, video]);
      updateProgress(100 / 11); 
    }
  };

  return (
    <CourseContext.Provider
      value={{ progress, currentVideo, completedVideos, updateCurrentVideo, addCompletedVideo }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export { CourseContext, CourseProvider };
