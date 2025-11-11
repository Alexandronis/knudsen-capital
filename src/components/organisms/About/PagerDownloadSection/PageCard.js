import React from 'react';
import downloadIcon from '../../../../assets/about-page/computing-cloud.svg';

const PageCard = ({ link, name, alttext }) => {
  return (
    <div className="common_card">
      <div className="common_card_containar">
        <div className="image_containar">
          <a href={link} target="_blank" rel="noopener noreferrer" download>
            <img className="download_icon" src={downloadIcon} alt={alttext} loading="lazy" />
          </a>
        </div>
        <div className="leftside_text about_leftside_text">
          <div className="card_list_items download-item">
            <a href={link} target="_blank" rel="noopener noreferrer" download>
              <p>{name}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCard;
