import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  const email = "contact@pitron.co";
  const subject = encodeURIComponent("Consulting inquiry — Pitron Engineering LLC");
  const body = encodeURIComponent(
    "Hi Pitron Engineering LLC,\n\nI’d like to discuss a project.\n\n- Project summary:\n- Timeline:\n- Budget range (optional):\n- Best contact info:\n\nThanks!"
  );

  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="small">© {year} Pitron Engineering LLC. All rights reserved.</div>
        <div className="small">
          <a className="footerLink" href={`mailto:${email}?subject=${subject}&body=${body}`}>Contact</a>
        </div>
      </div>
    </footer>
  );
}
