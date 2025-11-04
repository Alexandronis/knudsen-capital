import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  // Route,
  // Link,
  // Switch,
  useLocation,
  // useParams,
} from "react-router-dom";
import MetaTags from "react-meta-tags";
import Slider from "react-slick";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import AddressIcon from "../../assets/Contact-page/pin.svg";
import EmailIcon from "../../assets/Contact-page/email.svg";
import PhoneIcon from "../../assets/Contact-page/phone-call.svg";
import prev from "../../assets/Contact-page/Prev.svg";
import Next from "../../assets/Contact-page/Next.svg";

import PlaceholderAnime from "../common/placeholder";
import Footer from "../layout/footer";

const NextArrow = ({ className, style, onClick }) => {
  return (
    <>
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#55bbac",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
      <img
        className={className}
        src={Next}
        style={{
          ...style,
          width: "10px",
          marginRight: "10px",
        }}
        onClick={onClick}
        alt='Next button'
      />
    </>
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <>
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#55bbac",
          borderRadius: "50%",
          content: "none",
        }}
        onClick={onClick}
      />
      <img
        className={className}
        src={prev}
        style={{
          ...style,
          width: "10px",
          marginLeft: "10px",
        }}
        onClick={onClick}
        alt='Pre button'
      />
    </>
  );
};

function Contact(props) {
  const sliderData = require("../../data/contactSlider.json");
  const Location = useLocation();
  const Contact = useRef();

  if (props.location.pathname === "/contact") {
    document.body.classList.add("inner-header");
  }

  useEffect(() => {
    if (Location.pathname === "/contact" && Contact.current) {
      Contact.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
  }, [Location]);

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const onLoadedData = () => {
    setIsImageLoaded(true);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: "progressive",
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div
        className='contact-wrapper'
        ref={(el) => {
          Contact.current = el;
        }}>
        <MetaTags>
          <title>Contact KC/LLC investors for your investment needs</title>
          <meta
            name='description'
            content='Contact number,address & email address of KC/LLC investors'
          />
        </MetaTags>
        <link rel='canonical' href='https://kcinvestors.com/contact'></link>
        <Slider {...settings}>
          {sliderData.map((slider, index) => {
            return (
              <div>
                <div
                  className='placeholder-wrapper'
                  style={{ display: isImageLoaded ? "none" : "block" }}>
                  <PlaceholderAnime />
                </div>
                <img
                  className='sliderImages'
                  src={slider.image}
                  alt={slider.alt}
                  key={slider.id}
                  //placeholderSrc={placeholder}
                  onLoad={onLoadedData}
                  style={{ display: isImageLoaded ? "block" : "none" }}
                />
              </div>
            );
          })}
          {/* <div>
            <LazyLoadImage
              effect="blur"
              className="sliderImages"
              src="/contact-page/slider_images/184 Villa 047 MLS@3x.png"
              alt="KCLLC Slider Image"
              // placeholderSrc={placeholder}
            />
          </div> */}
        </Slider>
        <div className='content-wrapper'>
          <div className='content-inner-box'>
            <div className='company-values'>
              <div className='values-title'>
                <span></span>
                <h1 className='main-title'>KC/LLC Contact Details</h1>
                <h2 className='main-title mobile'>Contact</h2>
              </div>
              <div className='value-wrapper'>
                {/* <div className="sub-heaading">
                  <span></span>
                  <h2>Contact Details</h2>
                </div> */}
                {/* <h3>San Fransisco</h3> */}
                <div className='common_card'>
                  <div className='common_card_containar'>
                    <div className='image_containar'>
                      <img
                        className='image_icon'
                        src={AddressIcon}
                        alt='Address Icon'
                      />
                    </div>
                    <div className='leftside_text contact_leftside_text'>
                      <div className='card_list_items contact-us-item'>
                        <ul>
                          <li>
                          PO Box 7,<br></br> Los Gatos, 
                            <br></br> CA, 95031
                            <br></br>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='common_card_containar'>
                    <div className='image_containar'>
                      <img
                        className='image_icon'
                        src={PhoneIcon}
                        alt='Phone Icon'
                      />
                    </div>
                    <div className='leftside_text contact_leftside_text'>
                      <div className='card_list_items contact-us-item'>
                        <ul>
                          <li>408.483.5566</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='common_card_containar'>
                    <div className='image_containar'>
                      <img
                        className='image_icon'
                        src={EmailIcon}
                        alt='Email Icon'
                      />
                    </div>
                    <div className='leftside_text contact_leftside_text'>
                      <div className='card_list_items contact-us-item'>
                        <ul>
                          <li>webb@kcinvestors.com</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
