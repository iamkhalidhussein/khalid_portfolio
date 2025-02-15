import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style.js';
import { staggerContainer } from '../utils/motion.js';

const SectionWrapper = (Component, idName) => {
    function HOC() {
        return (
            <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
                id={idName} // Added idName to use as the section id if needed
            >
                <span className='hash-span' id={idName}></span>
                <Component />
            </motion.div>
        );
    }

    return HOC; // Return the HOC function
};

export default SectionWrapper; // Ensure correct export
