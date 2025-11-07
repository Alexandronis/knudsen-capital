import React from 'react';
import ReactPlayer from 'react-player';
import mountainVideo from '../../../../assets/home-banner/mountain.mp4';
import mountainIcon from '../../../../assets/home-banner/mountain-thumbnail.png';

function HomeBanner() {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const src = mountainVideo;

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="home-banner">
      <img
        src={mountainIcon}
        className="video-thumb tiny"
        alt="KCLLC video thumb"
        style={{ display: isVideoLoaded ? 'none' : 'block' }}
      />
      <ReactPlayer
        url={src}
        playsinline={true}
        preload="none"
        webkit-playsinline="yes"
        playing={true}
        loop={true}
        muted={true}
        controls={false}
        width="100%"
        height="100%"
        onLoadedData={onLoadedData}
        style={{ display: isVideoLoaded ? 'block' : 'none' }}
      />
    </div>
  );
}

export default HomeBanner;
