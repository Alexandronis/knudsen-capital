import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = ({
  id,
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
    <div className="team-card">
      <div className="first-line">
        <div className="img_box">
          <img src={imgSrc} alt={alt} loading="lazy" />
        </div>

        <div className="card-titles">
          <div className="title-set">
            <p className="name">{name}</p>
            <p className="title">{title}</p>
          </div>

          <div className="icon-set">
            <a href={email}>
              <img src={emailIcon} alt="Email Icon" loading="lazy" />
            </a>
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn Icon" loading="lazy" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="second-line">
        <p className="desc">
          {description}{' '}
          <span>
            <Link to={`/about/#our-team${id}`}>See more</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
