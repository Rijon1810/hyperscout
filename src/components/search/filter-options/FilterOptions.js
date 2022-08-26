import React, { useContext } from "react";
import { GlobalContext } from "../../../hooks/GlobalContext";
import "./FilterOptions.css";
import SingleOption from "./single-option/SingleOption";
function FilterOptions({ isMobile }) {
  const { setShowAdvanceFilter } = useContext(GlobalContext);

  const handleShowAdvanceFilter = () => {
    setShowAdvanceFilter(false);
  };
  return (
    <div className={`filter-options ${isMobile && "filter-options-mobile"}`}>
      <div className="filter-options-top">Filter Options</div>
      <SingleOption title="Influencer’s industry" />
      <SingleOption title="Influencer’s Country" />
      <SingleOption title="Audience’s Country" />
      <SingleOption title="Influencer’s Social Media Platform" />
      <SingleOption
        title="Influencer’s Social Media Platform"
        view={"slider"}
      />
      <SingleOption title="Influencer’s Gender " view={"gender"} />
      <div className="submit-area">
        <div className="reset" onClick={handleShowAdvanceFilter}>
          Reset
        </div>
        <div className="apply" onClick={handleShowAdvanceFilter}>
          Apply
        </div>
      </div>
    </div>
  );
}

export default FilterOptions;
