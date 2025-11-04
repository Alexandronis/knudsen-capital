import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import CloseIcon from "../../assets/client-page/close-btn.svg";
import Footer from "./footer";

import PlaceholderAnime from "../common/placeholder";

function ClientPage(props) {
  const Location = useLocation();
  const ClientPage = useRef();

  const data = props.location.state.data;
  const history = useHistory();

  function handleClick() {
    history.push("/portfolio");
    document.body.classList.remove("popup-page");
  }
  if (props.location.pathname === "/client-page") {
    document.body.classList.add("popup-page", "inner-header");
  }

  useEffect(() => {
    if (Location.pathname === "/client-page" && ClientPage.current) {
      ClientPage.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
  }, [Location]);

  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const onLoadedData = () => {
    setIsImageLoaded(true);
  };

  return (
    <div
      className='inner-page-wrapper client-wrapper'
      ref={(el) => {
        ClientPage.current = el;
      }}>
      <link rel='canonical' href='https://kcinvestors.com/client-page'></link>
      <div className='content-wrapper'>
        <div className='content-inner-box'>
          <img
            className='close-img'
            onClick={handleClick}
            src={CloseIcon}
            alt='close Icon'
          />
          <div className='company-values'>
            <div className='values-title'>
              <span></span>
              <h1>{data.companyName}</h1>
            </div>
          </div>

          <div className='card-content-wrapper'>
            <div
              className='placeholder-wrapper cover'
              style={{ display: isImageLoaded ? "none" : "block" }}>
              <PlaceholderAnime />
            </div>
            <img
              // effect="blur"
              src={data.coverImage}
              className='cover-photo'
              alt={data.alt}
              onLoad={onLoadedData}
              style={{ display: isImageLoaded ? "block" : "none" }}
            />
            <div className='card-content-col'>
              <div className='image-cap'>
                <div className='logo-img-box'>
                  <img
                    src={data.LargeLogoImage}
                    alt={data.alt}
                    className='profile-image'
                  />
                  <a
                    href={data.url}
                    className='btn-btn-visit mobile'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Visit Website
                  </a>
                </div>

                <div className='mob-set-inner'>
                {
                      data.description ? (
                        <div className='desc_section'>
                   
                        <span>"</span>
                        <p>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {data.description}
                        </p>
                        <span>"</span>
                      </div>
                      ) : null
                    }
                 
                  <div className='name_labels'>
                    <h4>{data.quotedby}</h4>
                    <h4>{data.quotedDesignation}</h4>
                    {/* <h4>{data.companyName}</h4> */}
                  </div>
                </div>
              </div>

              <div className='card-discription'>
                <div className='main-head'>
                  <div className='heading'>
                    <div className='card-main-title'>{data.companyName}</div>
                    <div className='card-sub-heading'>{data.subheading} </div>
                  </div>
                  <a
                    href={data.url}
                    className='btn-btn-visit desktop'
                    target='_blank'>
                    Visit Website
                  </a>
                </div>

                <p>{data.Longdescription}</p>
                {data.Longdescription2 !== null?
                <p>{data.Longdescription2}</p>:''
                }

                <div className='list-items'>
                  <ul>
                    {data.features.map((option) => (
                      <li>{option}</li>
                    ))}
                  </ul>
                </div>
                <div className='list-item-flex'>
                  <div className='list-items-bottom'>
                    <ul>
                      {data.leadership !== "" ? <>
                      <li>Leadership</li>

                      <h5>{data.leadership} </h5>
                      </> : ''}
                      
                    </ul>
                  </div>
                  <div className='list-items-bottom'>
                    <ul>
                      <li>Website</li>

                      <h5>
                        <a
                          href={data.url}
                          target='_blank'
                          rel='noopener noreferrer'>
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
}

export default ClientPage;
