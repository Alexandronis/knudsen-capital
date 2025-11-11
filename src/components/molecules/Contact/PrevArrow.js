/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import prevIcon from '../../../assets/contact-page/prev.svg';

const PrevArrow = ({ className, style, onClick }) => (
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
      src={prevIcon}
      style={{
        ...style,
        width: '10px',
        marginLeft: '10px',
      }}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(e)}
      alt="Previous button"
    />
  </>
);

export default PrevArrow;
