import { useState } from "react";
import "./Header.css";
import Hamburger from "hamburger-react";

import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <motion.div
      className="nav"
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <div className="nav_left">
        <div className="title">jishnu</div>
      </div>
      <div className="nav_right">
        <div className="icon">
          <Hamburger
            toggled={openMenu}
            toggle={setOpenMenu}
            size={20}
            duration={0.6}
          />
        </div>
        {openMenu && (
          <motion.div
            className={`list ${openMenu ? "open" : ""}`}
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
          >
            <ul>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#">home</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#">projects</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#">contact</a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
