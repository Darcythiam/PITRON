import React from "react";
import "./ServicesPage.jsx";
import { motion } from "framer-motion";


export default function StartProjectPage() {
  const email = "contact@pitron.co";
  const subject = encodeURIComponent("Consulting inquiry — Pitron Engineering LLC");
  const body = encodeURIComponent(
    "Hi Pitron Engineering LLC,\n\nWe’d like to discuss a project. Here are the basics:\n- Project summary:\n- Timeline:\n- Budget range (optional):\n- Best contact info:\n\nThanks!"
  );

  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead">
          <h1 className="h1">Start a project</h1>
          <p className="lead">
            We engage for feasibility, fixed-scope prototype delivery, or short retainer support through handoff.
          </p>
        </div>

        <motion.div
          className="card cardPad startCard"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid2">
            <div>
              <div className="cardTitle">Email us</div>
              <p className="small">
                Share your goals, timeline, constraints, and any existing architecture. If you’d like a call, include availability.
              </p>
              <div className="btnRow">
                <a className="btn btnPrimary" href={`mailto:${email}?subject=${subject}&body=${body}`}>Send email</a>
                <a className="btn" href="/ServicesPage">View services</a>
              </div>
            </div>

            <div className="miniPanel">
              <div className="panelTitle">Typical engagements</div>
              <ul className="panelList">
                <li>Rapid prototypes + feasibility</li>
                <li>Electronics/embedded integration</li>
                <li>Backend + databases + APIs</li>
                <li>Cloud/DevOps reliability baselines</li>
                <li>ML deployment & measurement</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
