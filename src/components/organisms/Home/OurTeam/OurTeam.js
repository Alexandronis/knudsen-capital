import React, { useState } from 'react';
import TeamCard from '../../../molecules/Home/OurTeamCard/TeamCard';
import MobileTeamCard from '../../../molecules/Home/OurTeamCard/MobileTeamCard';
import memberDetails from '../../../../data/memberDetails.json';

const OurTeam = () => {
  const [cardhover, setCardHover] = useState(0);

  const handleCardClick = (index) => {
    setCardHover((prev) => (prev === index + 1 ? 0 : index + 1));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleCardClick(index);
    }
  };

  return (
    <div className="Our-team">
      <div className="section-title">
        <h2>Our Team</h2>
      </div>

      <div className="second-card-wrapper">
        {memberDetails.map((member, index) => {
          const isActive = cardhover === index + 1;
          return (
            <div
              key={index}
              id={index}
              className={`sec-team-card ${isActive ? 'active' : cardhover === 0 ? '' : 'none-active'}`}
              onClick={() => handleCardClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
            >
              <TeamCard
                name={member.name}
                title={member.title}
                description={member.description}
                imgSrc={member.imgSrc}
                imgSrcMobile={member.imgSrcMobile}
                emailIcon={member.emailIcon}
                linkedin={member.linkedin}
                linkedinIcon={member.linkedinIcon}
                idx={index + 1}
                id={member.id}
                alt={member.alt}
                email={member.email}
              />
            </div>
          );
        })}
      </div>

      <div className="second-card-mobile-wrapper">
        {memberDetails.map((member, index) => {
          const isActive = cardhover === index + 1;
          return (
            <div
              key={index}
              id={index}
              className={`team-card ${isActive ? 'active' : cardhover === 0 ? '' : 'none-active'}`}
              onClick={() => handleCardClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
            >
              <MobileTeamCard
                name={member.name}
                title={member.title}
                description={member.description}
                imgSrc={member.imgSrc}
                imgSrcMobile={member.imgSrcMobile}
                emailIcon={member.emailIcon}
                linkedin={member.linkedin}
                linkedinIcon={member.linkedinIcon}
                alt={member.alt}
                email={member.email}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
