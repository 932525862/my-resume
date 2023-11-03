import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Mmuhammadyusuf302@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
		  <a href="https://www.facebook.com/profile.php?id=100083100455005&sk=about"><Facebook color="white" size={"3rem"} /></a>
		  <a href="https://github.com/932525862"> <Gitub color="white" size={"3rem"} /></a>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
