import imageUrl from "../../../images/getStartedNow.png";
import ovalImg from "../../../images/ovalGetStartedBiw.png";

import ImageComponent from "../ImageComponent";

import { AiOutlineMail } from "react-icons/ai";

import { motion } from "framer-motion";

import "./index.css";

export default function GetStartedNow() {
  return (
    <div className="get_started_now">
      <div className="get_started_now__body">
        <motion.img
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
          alt="alt"
          src={imageUrl}
        />
        <div className="get_started_imageComponent">
          <ImageComponent url={ovalImg} />
        </div>
        <motion.div
          initial={{ opacity: 0, x: "50%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
          className="get_started_now__info"
        >
          <h1>Get started now</h1>
          <p>
            Create custom landing pages with Omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </p>

          <div className="get_started_now__inputSection">
            <AiOutlineMail
              className="get_started_now__icon"
              size={25}
              color="gray"
            />
            <input type="text" placeholder="Email address" />
          </div>
          <button>Get started</button>
        </motion.div>
      </div>
    </div>
  );
}
