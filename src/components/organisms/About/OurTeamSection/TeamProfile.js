/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileCard from '../../../molecules/About/OurTeamSection/ProfileCard';

function TeamProfile() {
  const memberDetails = require('../../../../data/memberDetails.json');
  const [isShown, setIsShown] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const handleExpandClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex('');
    } else {
      setSelectedIndex(index);
    }
  };
  const Location = useLocation();
  const Ourteam = useRef();

  useEffect(() => {
    if (Location.hash.includes('our-team')) {
      var index = Number.parseInt(Location.hash.replace('#our-team', ''));
      setSelectedIndex(index + 1);
      setIsShown(index + 1);
    }
  }, [Location]);

  return (
    <>
      <div
        className={
          selectedIndex === ''
            ? 'team-profile-wrapper '
            : selectedIndex === false
              ? 'team-profile-wrapper'
              : 'team-profile-wrapper active'
        }
      >
        {memberDetails.map((member, index) => {
          return (
            <>
              <section id={`#our-team` + member.id}>
                <div
                  className={
                    isShown === index + 1
                      ? 'team-profile-container active index' + member.id
                      : isShown === 0
                        ? 'team-profile-container'
                        : 'team-profile-container none-active'
                  }
                  id={`#our-team` + index}
                  key={index}
                  ref={(el) => {
                    Ourteam.current = el;
                  }}
                >
                  <div
                    className="dataProfile_wrapper"
                    onClick={() => {
                      isShown === index + 1 ? setIsShown(0) : setIsShown(index + 1);
                      handleExpandClick(member.id);
                    }}
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
                          <a href={member.email}>
                            <img src="/Our-Team/Icon-set/email.svg" alt="Email Icon" />
                          </a>
                          {member.linkedin ? (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                              <img src="/Our-Team/Icon-set/linkedin.svg" alt="Linkedin Icon" />
                            </a>
                          ) : null}
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
                      onClick={() => {
                        isShown === index + 1 ? setIsShown(0) : setIsShown(index + 1);
                        handleExpandClick(member.id);
                      }}
                    >
                      {isShown === index + 1 ? <a>See less</a> : <a>See more</a>}

                      <img src="/Our-Team/Icon-set/Down_arrow.svg" alt="Down Arrow Icon" />
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        })}
      </div>
    </>
  );
}

export default TeamProfile;
