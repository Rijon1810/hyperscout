import React from "react";
import useDeviceDetect from "../../utils/useDeviceDetect";
import "./CommonBackground.css";

export default function CommonBackground() {
  let isMobile = useDeviceDetect().isMobile;
  return <div className={`common-bg ${isMobile && 'common-bg-mobile'}`} />;
}
