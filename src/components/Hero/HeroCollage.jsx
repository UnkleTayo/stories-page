import React from 'react';

import { videos, photos } from '../../data';

function VideoElement({ src }) {
  return (
    <div className="hero-element">
      <video
        className="collage-element"
        playsinline=""
        autoPlay
        webkit-playsinline=""
        loop
        // poster="https://lh3.googleusercontent.com/AJYQSvDZk4lqSWgBeiKFnE6OXdWWp8up4UdugQPqDVqpV4sW4DOtxzOTcuMJYlU771xp4nhG4mCUrOcPM3HiEbxns9QpTz90wLe13w=s0"
        src={src}
      ></video>
    </div>
  );
}
function ImageElement({ src }) {
  return (
    <div className="hero-element">
      <img src={src} className="collage-element" alt="" />
    </div>
  );
}

const HeroCollage = () => {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);
  const [leftVideo, rightVideo] = videos;

  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImages.map((src) => (
          <ImageElement key={src} src={src} />
        ))}
        <VideoElement src={leftVideo} />
      </div>
      <div className="right-column">
        <VideoElement src={rightVideo} />
        {rightImages.map((src) => (
          <ImageElement key={src} src={src} />
        ))}
      </div>
    </div>
  );
};

export default HeroCollage;
