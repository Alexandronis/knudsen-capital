import React from 'react';
import arrowUpIcon from '../../../../assets/our-team/team-arrow-up.svg';

const MobileTeamCard = ({
  name,
  title,
  description,
  imgSrc,
  emailIcon,
  linkedinIcon,
  linkedin,
  alt,
  email,
}) => {
  return (
    <>
      <div className="card_containar">
        <div className="first-line">
          <img className="image_containar" src={imgSrc} alt={alt} />
          <div className="leftside_text">
            <img className="arrow" src={arrowUpIcon} alt="Card Crrow Up icon"></img>
            <div className="card_list_items">
              <p className="name">{name}</p>
              <p className="title">{title}</p>
              <div className="icon-set">
                <a href={email}>
                  <img src={emailIcon} alt="email icon"></img>
                </a>
                {linkedin ? (
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="linkedin icon"></img>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="desc">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default MobileTeamCard;
