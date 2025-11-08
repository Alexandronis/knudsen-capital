/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileCard from '../../../molecules/About/OurTeamSection/ProfileCard';

function TeamProfile() {
  const memberDetails = require('../../../../data/memberDetails.json');
  const [isShown, setIsShown] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const location = useLocation();
  const Ourteam = useRef();

  const handleExpandClick = (index) => {
    setSelectedIndex((prev) => (prev === index ? '' : index));
  };

  const handleToggle = (index, memberId) => {
    setIsShown((prev) => (prev === index + 1 ? 0 : index + 1));
    handleExpandClick(memberId);
  };

  const handleKeyDown = (e, index, memberId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle(index, memberId);
    }
  };

  useEffect(() => {
    if (location.hash.includes('our-team')) {
      const index = Number.parseInt(location.hash.replace('#our-team', ''), 10);
      if (!Number.isNaN(index)) {
        // Use async update to avoid cascade warning
        setTimeout(() => {
          setSelectedIndex(index + 1);
          setIsShown(index + 1);
        }, 0);
      }
    }
  }, [location]);

  return (
    <div
      className={
        selectedIndex === ''
          ? 'team-profile-wrapper'
          : selectedIndex === false
            ? 'team-profile-wrapper'
            : 'team-profile-wrapper active'
      }
    >
      {memberDetails.map((member, index) => (
        <section id={`#our-team${member.id}`} key={index}>
          <div
            className={
              isShown === index + 1
                ? `team-profile-container active index${member.id}`
                : isShown === 0
                  ? 'team-profile-container'
                  : 'team-profile-container none-active'
            }
            id={`#our-team${index}`}
            ref={(el) => {
              Ourteam.current = el;
            }}
          >
            <div
              className="dataProfile_wrapper"
              onClick={() => handleToggle(index, member.id)}
              onKeyDown={(e) => handleKeyDown(e, index, member.id)}
              role="button"
              tabIndex={0}
              aria-expanded={isShown === index + 1}
            >
              <img className="profile-image" src={member.profileSrc} alt={member.alt} />
              <img className="cover-image" src={member.coverImage} alt={member.alt} />

              <div className="profileCard">
                <div className="first-line">
                  <div className="title-set">
                    <p className="name">{member.name}</p>
                    <p className="title">{member.title}</p>
                  </div>
                  <div className="icon-set">
                    {member.email ? (
                      <a href={member.email}>
                        <img src="/Our-Team/Icon-set/email.svg" alt="Email Icon" />
                      </a>
                    ) : (
                      <a role="button" tabIndex={0}>
                        <img src="/Our-Team/Icon-set/email.svg" alt="Email Icon" />
                      </a>
                    )}
                    {member.linkedin ? (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src="/Our-Team/Icon-set/linkedin.svg" alt="Linkedin Icon" />
                      </a>
                    ) : (
                      <a role="button" tabIndex={0}>
                        <img src="/Our-Team/Icon-set/linkedin.svg" alt="Linkedin Icon" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="short-desc">
                  <p>{member.profiledesc}</p>
                </div>
              </div>

              <div className="second-line">
                <ProfileCard
                  name={member.name}
                  title={member.title}
                  longDescription={member.longDescription}
                  profileSrc={member.profileSrc}
                  linkedin={member.linkedin}
                  email={member.email}
                />
              </div>

              <div
                className="seeMore"
                onClick={() => handleToggle(index, member.id)}
                onKeyDown={(e) => handleKeyDown(e, index, member.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isShown === index + 1}
              >
                <a>{isShown === index + 1 ? 'See less' : 'See more'}</a>
                <img src="/Our-Team/Icon-set/Down_arrow.svg" alt="Down Arrow Icon" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default TeamProfile;
