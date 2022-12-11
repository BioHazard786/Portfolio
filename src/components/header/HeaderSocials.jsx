import React from "react";
import { BsTelegram, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mohd-zaid-900277229" target="_blank">
        {" "}
        <BsLinkedin />{" "}
      </a>
      <a href="https://github.com/BioHazard786" target="_blank">
        {" "}
        <BsGithub />{" "}
      </a>
      <a href="https://t.me/lulu786" target="_blank">
        {" "}
        <BsTelegram />{" "}
      </a>
    </div>
  );
}

export default HeaderSocials;
