import userUsingImgLG from "../../../images/usersUsing@3x.png";
import imageComponent from "../../../images/ovalUsersUsing.png";

import ImageComponent from "../ImageComponent";

import { motion } from "framer-motion";

import "./index.css";

export default function UsersUsing() {
  return (
    <div className="user_using">
      <div className="user_using__body">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
          className="user_using__info"
        >
          <h1>50k+ users are using landing page.</h1>
          <p>
            Create custom landing pages with Omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </p>
          <motion.button whileTap={{ scale: 1.1 }}>Get Started</motion.button>
        </motion.div>
        <div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="user_using_imageComponent"
        >
          <ImageComponent url={imageComponent} />
        </div>

        <div className="user_using__imageSection">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 4 }}
            alt="users using section"
            src={userUsingImgLG}
          />
        </div>
      </div>
    </div>
  );
}
