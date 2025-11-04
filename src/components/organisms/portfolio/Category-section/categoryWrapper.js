import React, { useState } from "react";

import FirstCategory from "../../../molecules/portfolio/Portfolio-section/firstCategory";
import RealizedInvestment from "../../../molecules/portfolio/Portfolio-section/RealizedInvestment";


// import SecondCategory from "../../../molecules/portfolio/Portfolio-section/secondCategory";

function CategoryWrapper() {
  const [value, setValue] = useState(localStorage.getItem("portfolioOption"));
  const divstatus = (e) => {
    setValue(e.target.value);
    localStorage.setItem("portfolioOption", e.target.value);
  };

  return (
    <>
      {/* <div className="select-menu">
        <label htmlFor="View">
          View by :
          <select name="Views" id="Views" onChange={divstatus}>
            <option
              selected={value == "FirstCategory" ? true : false}
              value="FirstCategory"
            >
              Category 1
            </option>
            <option
              selected={value == "SecondCategory" ? true : false}
              value="SecondCategory"
            >
              Category 2
            </option>
          </select>
        </label>
      </div> */}
        <FirstCategory />
        
      <RealizedInvestment/>

    </>
  );
}

export default CategoryWrapper;
