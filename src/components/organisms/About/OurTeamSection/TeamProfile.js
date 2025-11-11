/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileCard from '../../../molecules/About/OurTeamSection/ProfileCard';
import memberDetails from '../../../../data/memberDetails.json';

const TeamProfile = () => {
  const [isShown, setIsShown] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const location = useLocation();
  const ourTeamRef = useRef();

  const toggleMember = (index, id) => {
    setIsShown(isShown === index ? 0 : index);
    setSelectedIndex(selectedIndex === id ? '' : id);
  };

  useEffect(() => {
    if (location.hash.includes('our-team')) {
      const index = Number(location.hash.replace('#our-team', '')) + 1;
      // defer state update to next tick
      const timer = setTimeout(() => {
        setSelectedIndex(index);
        setIsShown(index);
      }, 0);

      return () => clearTimeout(timer);
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
      {memberDetails.map((member, index) => {
        const isActive = isShown === index + 1;
        return (
          <section id={`our-team${member.id}`} key={member.id}>
            <div
              className={`team-profile-container ${
                isActive ? `active index${member.id}` : isShown === 0 ? '' : 'none-active'
              }`}
              ref={ourTeamRef}
            >
              <div
                className="dataProfile_wrapper"
                onClick={() => toggleMember(index + 1, member.id)}
              >
                <img
                  className="profile-image"
                  src={member.profileSrc}
                  alt={`${member.name} profile`}
                  loading="lazy"
                />
                <img
                  className="cover-image"
                  src={member.coverImage}
                  alt={`${member.name} cover`}
                  loading="lazy"
                />

                <div className="profileCard">
                  <div className="first-line">
                    <div className="title-set">
                      <p className="name">{member.name}</p>
                      <p className="title">{member.title}</p>
                    </div>
                    <div className="icon-set">
                      <a href={member.email}>
                        <img src="/Our-Team/Icon-set/email.svg" alt="Email Icon" />
                      </a>
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
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

                <div className="seeMore" onClick={() => toggleMember(index + 1, member.id)}>
                  <button>{isActive ? 'See less' : 'See more'}</button>
                  <img src="/Our-Team/Icon-set/Down_arrow.svg" alt="Down Arrow Icon" />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default TeamProfile;
