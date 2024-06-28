// import React, { useContext, useState } from 'react';
// import { CourseContext } from '../contexts/CourseContext';
// import '../styles.css';

// const VideoContent = ({ videoUrl }) => {
//     const { addCompletedVideo, updateCurrentVideo } = useContext(CourseContext);
//     const [value, setValue] = useState(0);
  
//     const handleComplete = () => {
//       if (value < 10) {
//         setValue((prev) => prev + 1);
//       } else {
//         addCompletedVideo(videoUrl);
//       }
    
//     };
  
//     const handleNext = () => {
//       updateCurrentVideo(videoUrl);
//     };
  
//     return (
//       <div className="video-content">
//         <video src={videoUrl} controls></video>
//         <button onClick={handleComplete} >
//           {value >= 1 ? 'Completed' : `Not Completed`}
//         </button>
//         <button onClick={handleNext}>Next Video</button>
//       </div>
//     );
//   };
  
//   export default VideoContent;
//222222222222222
// import React, { useContext, useState, useEffect } from 'react';
// import { CourseContext } from '../contexts/CourseContext';
// import '../styles.css';

// const VideoContent = ({ videoUrl }) => {
//   const { addCompletedVideo, currentVideo, completedVideos } = useContext(CourseContext);
//   const [isCompleted, setIsCompleted] = useState(false);

//   useEffect(() => {
//     setIsCompleted(completedVideos.includes(currentVideo));
//   }, [currentVideo, completedVideos]);

//   const handleComplete = () => {
//     if (!isCompleted) {
//       addCompletedVideo(currentVideo);
//     }
//   };

//   return (
//     <div className="video-content">
//       <video src={videoUrl} controls></video>
//       <button onClick={handleComplete}>
//         {isCompleted ? 'Completed' : 'Mark as Completed'}
//       </button>
//     </div>
//   );
// };

// export default VideoContent;

/////3 
import React, { useContext, useState, useEffect } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import '../styles.css';

const VideoContent = ({ videoUrl }) => {
  const { addCompletedVideo, currentVideo, completedVideos } = useContext(CourseContext);
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsCompleted(completedVideos.includes(currentVideo));
  }, [currentVideo, completedVideos]);

  const handleComplete = () => {
    if (!isCompleted) {
      addCompletedVideo(currentVideo);
    }
  };

  const handleVideoError = () => {
    setError('Failed to load video. Please check the URL or your internet connection.');
  };

  return (
    <div className="video-content">
      <video src={videoUrl} controls onError={handleVideoError}></video>
      {error && <p className="error">{error}</p>}
      <button onClick={handleComplete}>
        {isCompleted ? 'Completed' : 'Mark as Completed'}
      </button>
    </div>
  );
};

export default VideoContent;
