import { AiFillLayout } from "react-icons/ai";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";

import { motion } from "framer-motion";

import "./index.css";

const listItems = [
  {
    title: "Multiple Layouts",
    description:
      "With lots of unique blocks, you can easily build a page without coding.",
    icons: <AiFillLayout size={30} />,
  },
  {
    title: "Fully Responsive",
    description:
      "With lots of unique blocks, you can easily build a page without coding.",
    icons: <BsLayoutSidebarInsetReverse size={30} />,
  },
  {
    title: " Great Support",
    description:
      "With lots of unique blocks, you can easily build a page without coding.",
    icons: <HiOutlineSupport size={30} />,
  },
];

export default function BringPerfect() {
  const getListItem = (data) => {
    const { title, description, icons } = data;
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 4 }}
        className="bring_perfect_list-item"
      >
        <div className="left_info">{icons}</div>
        <div className="right_info">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bring-perfect">
      <bringBody className="bring_perfect__body">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
          className="bring_perfect__info"
        >
          <h1>Build a perfect landing page fast.</h1>
          <p>
            Create custom landing pages with Omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </p>
          <motion.button whileTap={{ scale: 1.1 }}>Learn more</motion.button>
        </motion.div>

        <div className="bring_perfect__list">
          {listItems.map((each) => getListItem(each))}
        </div>
      </bringBody>
    </div>
  );
}
