import React, { useState } from 'react';
import TeamCard from '../../../molecules/home/ourTeam-card/teamCard';
import MobileTeamCard from '../../../molecules/home/ourTeam-card/mobileTeamCard';

function OurTeam() {
  const memberDetails = require('../../../../data/memberDetails.json');
  const [cardhover, setCardHover] = useState(0);
  return (
    <div className="Our-team">
      <div className="section-title">
        <h2>Our Team</h2>
      </div>
      <div className="second-card-wrapper">
        {memberDetails.map((member, index) => {
          return (
            <div
              className={
                cardhover === index + 1
                  ? 'sec-team-card active'
                  : cardhover === 0
                    ? 'sec-team-card'
                    : 'sec-team-card none-active'
              }
              id={index}
              key={index}
              onClick={() => {
                cardhover === index + 1 ? setCardHover(0) : setCardHover(index + 1);
              }}
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
          return (
            <div
              className={
                cardhover === index + 1
                  ? 'team-card active'
                  : cardhover === 0
                    ? 'team-card'
                    : 'team-card none-active'
              }
              id={index}
              key={index}
              onClick={() => {
                cardhover === index + 1 ? setCardHover(0) : setCardHover(index + 1);
              }}
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
}

export default OurTeam;
