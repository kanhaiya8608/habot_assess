import React from 'react';

const Video: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 p-2 md:p-4">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/i8tgRHXx4oQ?rel=0"
        title="YouTube video player"
        className="rounded"
        allow="accelerometer; clipboard-write; encrypted-media;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
