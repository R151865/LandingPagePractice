import { AiFillLayout } from "react-icons/ai";

import { motion } from "framer-motion";

import "./index.css";

const itemList = [
  "50+ Unique Design Blcoks",
  "Fully Responsive",
  "Humanly Support",
  "Multiple Layouts",
  "Mobile First Design",
  "Bootstrap 4 Framework",
  "Lifetime Updates",
  "Rich Documentation",
];

export default function Everything() {
  const getItem = (data) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 4 }}
        key={data}
        className="everything__item"
      >
        <div>
          <AiFillLayout size={25} />
        </div>
        <p>{data}</p>
      </motion.div>
    );
  };

  return (
    <div className="everything">
      <div className="everything__body">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
        >
          It's everything you'll ever need
        </motion.h1>
        <div className="eveything__list">
          {itemList.map((each) => getItem(each))}
        </div>
      </div>
    </div>
  );
}
