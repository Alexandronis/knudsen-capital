/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import nextIcon from '../../../assets/contact-page/next.svg';

const NextArrow = ({ className, style, onClick }) => (
  <>
    <div
      role="button"
      tabIndex={0}
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#55bbac',
        borderRadius: '50%',
      }}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(e)}
    />
    <img
      role="button"
      tabIndex={0}
      className={className}
      src={nextIcon}
      style={{
        ...style,
        width: '10px',
        marginRight: '10px',
      }}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(e)}
      alt="Next button"
    />
  </>
);

export default NextArrow;
