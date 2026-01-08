import React from "react";
import Hero from "../Hero.jsx";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">Integrated prototypes. One accountable partner.</h2>
            <p className="lead">
              Representative engineering work completed by team members across research and open-source—
              focused on integrated prototypes, validation, and handoff-ready deliverables.
            </p>
          </div>

          <div className="grid3">
            <div className="card cardPad">
              <div className="cardTitle">SmartMesh card</div>
              <div className="small">
                Battery management and low-power data/image transfer over multi-hop IPv6 mesh, optimized for reliability and remote monitoring.
              </div>
            </div>

            <div className="card cardPad">
              <div className="cardTitle">PI motor</div>
              <div className="small">
                Digital PI motor control implemented on PIC24 with validated stability and &lt;10% overshoot.
              </div>
            </div>

            <div className="card cardPad">
              <div className="cardTitle">Embedded License Plate Recognition Prototype</div>
              <div className="small">
                Lightweight on-device detection/recognition paired with networked data distribution for
                embedded deployments.
              </div>
            </div>

            <div className="card cardPad">
              <div className="cardTitle">Avatar BCI</div>
              <div className="small">
                Merged open-source contributions spanning Qt/QML UI modernization and backend/API integration for robotics control workflows.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
