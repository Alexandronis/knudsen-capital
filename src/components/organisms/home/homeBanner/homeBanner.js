import React from "react";
import ReactPlayer from 'react-player'
import Mountain from "../../../../assets/Home-Banner/mountain.mp4";
import MountainThumb from "../../../../assets/Home-Banner/mountain_thumbnail.png";

function HomeBanner() {
  const [isVideoLoaded , setIsVideoLoaded] = React.useState(false);
  const src = Mountain;

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (

    <div className="home-banner">
      <img src={MountainThumb} className="video-thumb tiny" alt="KCLLC video thumb" style={{ display: isVideoLoaded ? "none" : "block" }}/>
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
            style={{ display: isVideoLoaded ? "block" : "none" }}
          />
    </div>
  );
}

export default HomeBanner;
