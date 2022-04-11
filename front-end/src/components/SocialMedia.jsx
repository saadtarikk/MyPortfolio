import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
// import { FaFacebookF, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <BsGithub />
    </div>
    <div>
      <BsTwitter />
    </div>
  </div>
);

export default SocialMedia;
