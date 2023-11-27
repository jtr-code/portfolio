import { GitHub, Email, LinkedIn } from "@mui/icons-material";
import "./HeroSection.css";
import { motion } from "framer-motion";

import { staggerContainer, textVariant } from "../../utils/motion";

const HeroSection = () => {
  return (
    <div className="hero_main">
      <motion.div
        className="hero_content"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1 variants={textVariant(0.2)}>Jishnu t raj</motion.h1>
        <motion.h3 variants={textVariant(0.38)}>Full Stack Developer</motion.h3>
      </motion.div>
      <div>
        <div className="hero_bottom">
          <div className="bottom_left">
            <ul>
              <li>
                <a href="https://github.com/jtr-code" target="_blank">
                  <GitHub />
                </a>
              </li>
              <li>
                <a href="mailto:jishnutraj817@gmail.com" target="_blank">
                  <Email />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jishnutraj"
                  target="_blank"
                >
                  <LinkedIn />
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom_right">
            <p>Based in India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
