import React from "react";
const handleDownload = () => {
  window.open("https://github.com/Wajahat-Ahmed-NED/X-Secure_Raccine.git")
}
const handleDownloadURL = () => {
  window.open("https://github.com/RehanMumtaz123/X-Secure-ChromeExtension")
}
const Button = ({ styles }) => (
  <span style={{ display: "inline" }}>
    <button type="button" onClick={handleDownload} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Get Raccine
    </button>
    {" "}&nbsp;&nbsp;&nbsp;
    <button type="button" onClick={handleDownloadURL} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Get URL Detector
    </button></span>
);

export default Button;