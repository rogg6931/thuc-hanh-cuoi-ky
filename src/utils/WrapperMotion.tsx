import React from "react";
import { motion } from "framer-motion";

const WrapperMotion = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Fragment>
            <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: .1 }}
            >
                {children}
            </motion.div>
        </React.Fragment>
    );
};

export default WrapperMotion;
