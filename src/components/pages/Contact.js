import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlaceholderAnime from '../common/Placeholder';
import Footer from '../layout/Footer';
import NextArrow from '../molecules/Contact/NextArrow';
import PrevArrow from '../molecules/Contact/PrevArrow';
import { contactInfo } from '../../data/contactInfo';

const Contact = () => {
  const sliderData = require('../../data/contactSlider.json');
  const location = useLocation();
  const contactRef = useRef(null);

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (location.pathname === '/contact') {
      document.body.classList.add('inner-header');
    } else {
      document.body.classList.remove('inner-header');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/contact' && contactRef.current) {
      contactRef.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
  }, [location.pathname]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: 'progressive',
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="contact-wrapper" ref={contactRef}>
        <Helmet>
          <title>Contact KC/LLC investors for your investment needs</title>
          <meta
            name="description"
            content="Contact number, address & email address of KC/LLC investors"
          />
          <link rel="canonical" href="https://kcinvestors.com/contact" />
        </Helmet>

        <Slider {...sliderSettings}>
          {sliderData.map((slide) => (
            <div key={slide.id}>
              {!isImageLoaded && (
                <div className="placeholder-wrapper">
                  <PlaceholderAnime />
                </div>
              )}
              <img
                className="sliderImages"
                src={slide.image}
                alt={slide.alt}
                onLoad={() => setIsImageLoaded(true)}
                style={{ display: isImageLoaded ? 'block' : 'none' }}
                loading="lazy"
              />
            </div>
          ))}
        </Slider>

        <div className="content-wrapper">
          <div className="content-inner-box">
            <div className="company-values">
              <div className="values-title">
                <span></span>
                <h1 className="main-title">KC/LLC Contact Details</h1>
                <h2 className="main-title mobile">Contact</h2>
              </div>

              <div className="value-wrapper">
                <div className="common_card">
                  {contactInfo.map((info, index) => (
                    <div className="common_card_containar" key={index}>
                      <div className="image_containar">
                        <img className="image_icon" src={info.icon} alt="Contact Icon" loading="lazy" />
                      </div>
                      <div className="leftside_text contact_leftside_text">
                        <div className="card_list_items contact-us-item">
                          <ul>
                            <li>{info.content}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
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
