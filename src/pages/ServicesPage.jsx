import React from "react";

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead">
          <h1 className="h1">Services</h1>
          <p className="lead">
            We can tackle anything from hardware (circuits, smart mesh) and embedded to software,
            DevOps, databases, and AI/ML — with a practical, ship-focused approach.
          </p>
        </div>

        <div className="grid2">
          <div className="card cardPad">
            <div className="cardTitle">Electronics & Circuits</div>
            <ul className="list">
              <li>Prototyping, bring-up, and validation planning</li>
              <li>System integration and interface verification</li>
              <li>Iteration support and test readiness</li>
            </ul>
          </div>

          <div className="card cardPad">
            <div className="cardTitle">Embedded & Firmware</div>
            <ul className="list">
              <li>Firmware architecture and peripheral integration</li>
              <li>Performance, reliability, and testing</li>
              <li>Device-to-cloud connectivity</li>
            </ul>
          </div>

          <div className="card cardPad">
            <div className="cardTitle">Software & Backend</div>
            <ul className="list">
              <li>APIs, services, automation</li>
              <li>Data modeling, databases, and integrations</li>
              <li>Engineering practices aligned with handoff</li>
            </ul>
          </div>

          <div className="card cardPad">
            <div className="cardTitle">Cloud, DevOps & AI/ML</div>
            <ul className="list">
              <li>CI/CD, deployments, and observability baselines</li>
              <li>Scalable infrastructure & databases</li>
              <li>Deployable ML systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
