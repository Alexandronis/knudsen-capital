import addressIcon from '../assets/contact-page/pin.svg';
import phoneIcon from '../assets/contact-page/phone-call.svg';
import emailIcon from '../assets/contact-page/email.svg';
import React from 'react';

export const contactInfo = [
  {
    icon: addressIcon,
    content: (
      <>
        PO Box 7,
        <br />
        Los Gatos,
        <br />
        CA, 95031
      </>
    ),
  },
  {
    icon: phoneIcon,
    content: '408.483.5566',
  },
  {
    icon: emailIcon,
    content: 'webb@kcinvestors.com',
  },
];
