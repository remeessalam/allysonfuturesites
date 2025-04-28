import React from "react";
import RoundedHeader from "./RoundedHeader";
import { useNavigate } from "react-router-dom";

const UnlockEfficiency = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <section>
      <div className="wrapper w-full flex flex-col gap-10 items-center paddingtop paddingbottom">
        <RoundedHeader title="Unlock Efficiency" />
        <h1 className="main-title w-fit">Ready to Transform your Business?</h1>
        <p className="desc text-center">
          Partner with us to bring your ideas to life with cutting-edge
          technology solutions. Whether you're looking to develop an AI-driven
          system Or a new-gen tech. we’re here to help you succeed.
        </p>
        <button
          onClick={() => navigateTo("/contact-us")}
          className="primary-btn w-fit"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
