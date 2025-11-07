import React from "react";

const ProfileCard = ({
  name,
  title,
  longDescription,
  profileSrc,
  linkedin,
  email,
}) => {
  return (
    <>
      <div className="profile-largeCard">
        <img className="lg-profile-image" src={profileSrc} alt={name} />
        <div className="title-section">
          <div className="first-line">
            <div className="title-set">
              <p className="name">{name}</p>
              <p className="title">{title}</p>
            </div>
            <div className="icon-set">
              <a href={email}>
                <img src="/Our-Team/Icon-set/email.svg" alt="Email Icon" />
              </a>
              {linkedin ? <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <img src="/Our-Team/Icon-set/linkedin.svg" alt="Linkedin Icon"  />
              </a> :null}
            </div>
          </div>
        </div>
      </div>
      <div className="long-desc">
        <p>{longDescription}</p>
      </div>
    </>
  );
};

export default ProfileCard;
