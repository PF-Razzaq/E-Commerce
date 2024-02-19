import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="newsletter">Get Exclusive Offers On Your Email</div>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </>
  );
};

export default NewsLetter;
