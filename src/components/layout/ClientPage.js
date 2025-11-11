import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PlaceholderAnime from '../common/Placeholder';
import Footer from './Footer';
import closeIcon from '../../assets/client-page/close-btn.svg';

const ClientPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const clientPageRef = useRef();

  const data = location.state?.data;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleClick = () => {
    navigate('/portfolio');
    document.body.classList.remove('popup-page');
  };

  const onLoadedData = () => setIsImageLoaded(true);

  // Add/remove body class when on this page
  useEffect(() => {
    if (location.pathname === '/client-page') {
      document.body.classList.add('popup-page', 'inner-header');
    } else {
      document.body.classList.remove('popup-page', 'inner-header');
    }
  }, [location.pathname]);

  // Scroll effect
  useEffect(() => {
    if (location.pathname === '/client-page' && clientPageRef.current) {
      clientPageRef.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
  }, [location]);

  // Prevent render if no data (safety for direct visits)
  if (!data) {
    return (
      <div className="inner-page-wrapper client-wrapper">
        <h2>No client data available.</h2>
        <button onClick={() => navigate('/portfolio')}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="inner-page-wrapper client-wrapper" ref={clientPageRef}>
      <link rel="canonical" href="https://kcinvestors.com/client-page" />

      <div className="content-wrapper">
        <div className="content-inner-box">
          <button onClick={handleClick} className="close-img" aria-label="Close Client Page">
            <img src={closeIcon} alt="Close Icon" />
          </button>

          <div className="company-values">
            <div className="values-title">
              <span />
              <h1>{data.companyName}</h1>
            </div>
          </div>

          <div className="card-content-wrapper">
            <div
              className="placeholder-wrapper cover"
              style={{ display: isImageLoaded ? 'none' : 'block' }}
            >
              <PlaceholderAnime />
            </div>

            <img
              src={data.coverImage}
              className="cover-photo"
              alt={data.alt}
              onLoad={onLoadedData}
              style={{ display: isImageLoaded ? 'block' : 'none' }}
              loading="lazy"
            />

            <div className="card-content-col">
              <div className="image-cap">
                <div className="logo-img-box">
                  <img
                    src={data.LargeLogoImage}
                    alt={data.alt}
                    className="profile-image"
                    loading="lazy"
                  />
                  <a
                    href={data.url}
                    className="btn-btn-visit mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </div>

                <div className="mob-set-inner">
                  {data.description && (
                    <div className="desc_section">
                      <span>&quot;</span>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.description}</p>
                      <span>&quot;</span>
                    </div>
                  )}

                  <div className="name_labels">
                    <h4>{data.quotedby}</h4>
                    <h4>{data.quotedDesignation}</h4>
                  </div>
                </div>
              </div>

              <div className="card-discription">
                <div className="main-head">
                  <div className="heading">
                    <div className="card-main-title">{data.companyName}</div>
                    <div className="card-sub-heading">{data.subheading}</div>
                  </div>
                  <a
                    href={data.url}
                    className="btn-btn-visit desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </div>

                <p>{data.Longdescription}</p>
                {data.Longdescription2 && <p>{data.Longdescription2}</p>}

                <div className="list-items">
                  <ul>
                    {data.features.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </div>

                <div className="list-item-flex">
                  <div className="list-items-bottom">
                    <ul>
                      {data.leadership && (
                        <>
                          <li>Leadership</li>
                          <h5>{data.leadership}</h5>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="list-items-bottom">
                    <ul>
                      <li>Website</li>
                      <h5>
                        <a href={data.url} target="_blank" rel="noopener noreferrer">
                          {data.website}
                        </a>
                      </h5>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientPage;
