import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

interface Props {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<Props> = ({ index, title, icon }) => {
  return (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      transitionSpeed={450}
      glareEnable
      glareMaxOpacity={0.4}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="10px"
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a highly motivated web developer with a strong passion for web
        technologies, I am eager to contribute my expertise to a dynamic and
        innovative organization. With hands-on experience in{" "}
        <b className="text-white-100">React JS</b> and a focus on UX/UI design,
        I constantly strive to improve and stay current with industry
        advancements. I am particularly interested in cloud services, especially
        AWS, and artificial intelligence and look forward to joining a
        forward-thinking team committed to excellence. With dedication and
        creativity, I am confident I can make a meaningful impact as a valuable
        asset to your organization.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
