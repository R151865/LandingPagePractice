import mail from "../../../images/email-84.png";
import direction from "../../../images/path@3x.png";

import centerImage from "../../../images/oval@3x.png";

import ImageComponent from "../ImageComponent";

import { motion } from "framer-motion";

import "./index.css";

export default function BringMoreLeads() {
  return (
    <div className="bring_more_leads" id="sectionHome">
      <div className="bring_more_leads__body">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 4 } }}
          className="bring_more_leads__info"
        >
          <h1>Bring more leads for your business fast.</h1>
          <p>
            Create custom landing pages with Omega that convert more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </p>
          <div className="input_section">
            <img alt="mail" src={mail} />
            <input type="text" placeholder="Email address" />
            <button>Get Started</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 4 } }}
          className="image-component-style"
        >
          <ImageComponent url={centerImage} />
        </motion.div>

        <div className="percentage-section">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
            className="percentage_body"
          >
            <div>
              <img alt="direction" src={direction} />
            </div>
            <h1>39%</h1>
            <p>Conversion</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
