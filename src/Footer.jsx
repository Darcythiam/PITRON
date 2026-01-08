import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="small">© {year} Pitron Engineering LLC. All rights reserved.</div>
        <div className="small">
          <a className="footerLink" href="/start-a-project">Contact</a>
        </div>
      </div>
    </footer>
  );
}
