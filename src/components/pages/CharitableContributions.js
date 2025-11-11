import React from 'react';
import { Helmet } from 'react-helmet';

import ScrollHandler from '../templates/ScrollHandler';
import Footer from '../layout/Footer';
import Chart from '../molecules/Charity/Chart';

const charityData = require('../../data/charityData.json');
const otherCharities = require('../../data/otherCharity.json');

const CharitableContributions = () => {
  return (
    <>
      <ScrollHandler />

      <div className="charityble-contribution-wrapper">
        <Helmet>
          <title>KC/LLC Charitable Contributions</title>
          <meta
            name="description"
            content="KC/LLC team giving back to local charities with matched donations and community support."
          />
          <link
            rel="canonical"
            href="https://kcinvestors.com/charitable-contributions"
          />
        </Helmet>

        <section id="charity-kcllc">
          <div className="content-wrapper">
            <div className="content-inner-box">
              <div className="values-title">
                <span></span>
                <h1 className="main-title">Charitable Contributions</h1>
              </div>
              <div className="description-text">
                <p>
                  Our team is committed to giving back to local charities to support a variety of
                  communities. From building houses for low-income families to researching rare
                  pediatric cancers, we each chose causes close to our hearts to fight for. Here are
                  the organizations our team members donated to, with matched donations from KC/LLC,
                  in 2022.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="chart-container">
        <div className="chart-web">
          <Chart />
        </div>
      </div>

      <div className="mobile-content">
        {charityData.map((data, i) => (
          <a key={i} href={data.webLink} target="_blank" rel="noreferrer">
            <div className="charity-card">
              <div className="image-block">
                <img src={data.logo} alt={data.title} loading="lazy" />
              </div>
              <div className="content-block">
                <p>{data.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="other-charity">
        <div className="title">
          <span></span>
          <h3>Historically we’ve also contributed to;</h3>
        </div>
        <div className="box-container">
          {otherCharities.map((data, i) => (
            <div className="data-card" key={`data-card-${i}`}>
              {data.name}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CharitableContributions;
