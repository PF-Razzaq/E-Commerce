import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <>
      <div className="descriptionbox">
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
          <p>
            This is a online E-Commerce marketplace where style meets
            convenience. Our e-commerce platform offers a curated selection of
            clothing, blending fashion-forward trends with affordability.
            Explore a seamless shopping experience, from trendy apparel to
            timeless classics. Elevate your wardrobe effortlessly with our
            user-friendly interface.
          </p>
          <p>
            Find your perfect fit with our range of shirts, available in a
            variety of sizes. From sleek slim fits to comfortable regular cuts,
            we ensure every customer looks and feels their best
          </p>
        </div>
      </div>
    </>
  );
};

export default DescriptionBox;
