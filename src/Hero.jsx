import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="hero heroSolo" id="top">
      <div className="container heroGrid">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, ease: "easeOut" }}
          variants={fadeUp}
          className="heroCopy"
        >
          <span className="eyebrow">Engineering consulting • ELECTRONICS → EMBEDDED → CLOUD → ML</span>
          <h1 className="h1">Design and validate integrated prototypes across electronics, embedded, and cloud.</h1>
          <p className="lead">
            Pitron Engineering delivers integrated prototype engineering across electronics, embedded firmware, and cloud
            services, with a focus on reliability and system integration.
          </p>

          <div className="btnRow">
            <Link className="btn btnPrimary" to="/start-a-project">Request a consult</Link>
            <Link className="btn" to="/services">Explore services</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
