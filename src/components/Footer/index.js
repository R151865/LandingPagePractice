import "./index.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  const getOmega = () => {
    return (
      <div className="omega_section" id="sectionContactUs">
        <p className="omega_logo">Omega</p>

        <p className="omega_description">
          With lots of unique blocks, you can easily build a page without
          coding.
        </p>

        <div className="social_media">
          <div>
            <AiFillTwitterCircle size={22} className="social_icon" />
          </div>
          <div>
            <FaFacebook size={22} />
          </div>
          <div>
            <AiFillLinkedin size={22} />
          </div>
        </div>
      </div>
    );
  };

  const getAbout = () => {
    return (
      <div className="get_about">
        <h1>About</h1>
        <p>Our mission</p>
        <p>Our story</p>
        <p>Team Members</p>
      </div>
    );
  };

  const getLearn = () => {
    return (
      <div className="get_about">
        <h1>Learn</h1>
        <p>Tutorials</p>
        <p>How it works</p>
        <p>F.A.Q</p>
      </div>
    );
  };

  const getStories = () => {
    return (
      <div className="get_about">
        <h1>Stories</h1>
        <p>Blog</p>
        <p>Tech stories</p>
      </div>
    );
  };

  const getContactus = () => {
    return (
      <div className="get_about">
        <h1>Contact us</h1>
        <p>
          <a href="#12">support@uxtheme.net</a>
        </p>
        <p>
          <a href="#12">+133-394-3439-1435</a>
        </p>
      </div>
    );
  };

  return (
    <div className="footer">
      <div className="footer__body">
        {getOmega()}
        {getAbout()}
        {getLearn()}
        {getStories()}
        {getContactus()}
      </div>
    </div>
  );
}
