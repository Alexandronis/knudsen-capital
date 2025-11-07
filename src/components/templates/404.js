import React from 'react';
import image404 from '../../assets/404-page/404-image.png';

function NotFoundPage() {
  return (
    <div>
      <div className="pagenotfound-wrapper">
        <img className="fourOfour" src={image404} alt="KC/LLC 404" />
        <h2>We couldn't find what you were looking for</h2>
        <img src="/KCLLC_Logo.svg" alt="KC/LLC Logo" />
        <a href="/">Home</a>
      </div>
    </div>
  );
}

export default NotFoundPage;
