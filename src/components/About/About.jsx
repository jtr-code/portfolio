import "./About.css";
import { motion } from "framer-motion";
import {
    staggerContainer,
    textVariant,
    textVariant2
} from "../../utils/motion";

const About = () => {
    const phrases = [
        "I'm from Kerala, India. When I started college, I signed up ",
        "for a Bachelor of Computer Science to understand and learn ",
        "more about the IT world. Convinced that programming was my ",
        "passion, I decided to steer my life in that direction and ",
        "began self-learning as a full-stack developer from home. I'm ",
        "now seeking a team where I can put all my knowledge into ",
        "practice, gain experience, and grow professionally in this career."
    ];
    return (
        <div className='about'>
            <motion.div
                className='about_content'
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
            >
                <motion.h1 variants={textVariant(0.4)}>ABOUT ME</motion.h1>
                <p>
                    {phrases.map((phrase, index) => (
                        <motion.span
                            key={index}
                            variants={textVariant2(0.1, index)}
                        >
                            {phrase}
                        </motion.span>
                    ))}
                </p>
                <motion.button variants={textVariant(1)} type='button'>
                    DOWNLOAD RESUME
                </motion.button>
            </motion.div>
        </div>
    );
};

export default About;
