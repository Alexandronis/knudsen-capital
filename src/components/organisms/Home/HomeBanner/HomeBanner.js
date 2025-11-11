import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import mountainVideo from '../../../../assets/home-banner/mountain.mp4';
import mountainIcon from '../../../../assets/home-banner/mountain-thumbnail.png';

const HomeBanner = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="home-banner">
      {!isVideoLoaded && (
        <img
          src={mountainIcon}
          className="video-thumb tiny"
          alt="KCLLC video thumb"
          loading="lazy"
        />
      )}
      <ReactPlayer
        url={mountainVideo}
        playing
        loop
        muted
        controls={false}
        width="100%"
        height="100%"
        playsinline
        onReady={handleVideoLoad}
        style={{ display: isVideoLoaded ? 'block' : 'none' }}
      />
    </div>
  );
};

export default HomeBanner;
