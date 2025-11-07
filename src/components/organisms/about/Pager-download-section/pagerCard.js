import React from 'react';
import downloadIcon from '../../../../assets/About-page/computing-cloud.svg';
function PagerCard(props) {
  return (
    <>
      <div className="common_card">
        <div className="common_card_containar">
          <div className="image_containar">
            <a target="_blank" rel="noopener noreferrer" href={props.link} download>
              <img className="download_icon" src={downloadIcon} alt={props.alttext} />
            </a>
          </div>
          <div className="leftside_text about_leftside_text">
            <div className="card_list_items download-item">
              <a target="_blank" rel="noopener noreferrer" href={props.link} download>
                <p>{props.name}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PagerCard;
