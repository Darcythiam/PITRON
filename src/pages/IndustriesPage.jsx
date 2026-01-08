import React from "react";

export default function IndustriesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead">
          <h1 className="h1">Industries</h1>
          <p className="lead">
            We support teams building connected products and modern software across multiple domains.
          </p>
        </div>

        <div className="grid3">
          <div className="card cardPad"><div className="cardTitle">IoT & Smart Devices</div><div className="small">Electronics, embedded connectivity, and device-to-cloud systems.</div></div>
          <div className="card cardPad"><div className="cardTitle">Automation</div><div className="small">Control, monitoring, and operational software with reliability in mind.</div></div>
          <div className="card cardPad"><div className="cardTitle">Data & ML</div><div className="small">Practical deployment, measurement, and maintainable integration.</div></div>
        </div>
      </div>
    </section>
  );
}
