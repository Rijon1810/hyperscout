import React, { useEffect } from "react";
import "./SingleOption.css";
import downArrow from "../../../../common-images/down_arrow.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
const marks = [
  {
    value: 0,
    label: "1k",
  },
  {
    value: 18,
    label: "25k",
  },
  {
    value: 34,
    label: "50k",
  },
  {
    value: 48,
    label: "100k",
  },
  {
    value: 65,
    label: "250k",
  },
  {
    value: 82,
    label: "500k",
  },
  {
    value: 100,
    label: "1000k",
  },
];

function valuetext(value: number) {
  return `${value}k`;
}

export default function SingleOption({ title, view }) {
  useEffect(() => {
    let element = document.getElementsByClassName(
      "MuiSlider-valueLabelOpen MuiSlider-valueLabel css-nnid7-MuiSlider-valueLabel"
    );
    let element2 = document.getElementsByClassName(
      "MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-marked css-1aznpnh-MuiSlider-root"
    );
    if (element) {
      element[0].style.background = "#564FB1";
    }
    if (element2) {
      element2[0].style.color = "#564FB1";
    }
  }, []);
  return (
    <div className="single-filter-options">
      <div className="options-title">{title}</div>
      {!view ? (
        <div className="options-dropdown">
          <div className="dropdown-text">Select Options</div>
          <img className="down-arrow" src={downArrow} alt="downArrow" />
        </div>
      ) : (
        <>
          {view === "slider" ? (
            <Slider
              aria-label="Always visible"
              defaultValue={80}
              getAriaValueText={valuetext}
              step={10}
              marks={marks}
              valueLabelDisplay="on"
            />
          ) : (
            <>
              <div className="gender-selection">
                <div className="gender-type">
                  <input type="radio" checked="checked" name="radio" />
                  <div className="gender-type-text">Male</div>
                </div>
                <div className="gender-type">
                  <input type="radio" checked="checked" name="radio" />
                  <div className="gender-type-text">Female</div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
