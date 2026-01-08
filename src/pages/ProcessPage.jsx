import React from "react";

export default function ProcessPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead">
          <h1 className="h1">How we work</h1>
          <p className="lead">
            Clear milestones, fast feedback loops, and deliverables you can ship.
          </p>
        </div>

        <div className="grid3">
          <div className="card cardPad">
            <div className="cardTitle">Define</div>
            <div className="small">Scope, constraints, success metrics, and risk areas.</div>
          </div>
          <div className="card cardPad">
            <div className="cardTitle">Build & Validate</div>
            <div className="small">Integrated prototype implementation with test results and iteration loops.</div>
          </div>
          <div className="card cardPad">
            <div className="cardTitle">Transfer</div>
            <div className="small">Documentation, integration guidance, and optional support during adoption.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
