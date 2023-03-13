import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

export const Tech: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I can do</p>
        <h2 className={styles.sectionHeadText}>Skillset.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {technologies.map((tech, index) => (
          <span key={tech.name}>
            {tech.name}
            {index !== technologies.length - 1 && <span> &middot; </span>}
          </span>
        ))}
      </motion.p>
      <div className="mt-12 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas imgUrl={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
