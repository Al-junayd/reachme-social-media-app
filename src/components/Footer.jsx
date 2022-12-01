import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="border-top text-center small text-muted py-3">
        <p>
          <Link to="/" className="mx-1">
            Home
          </Link>{" "}
          |{" "}
          <Link to="/about-us" t0 className="mx-1">
            About Us
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="mx-1">
            Terms
          </Link>
        </p>
        <p className="m-0">
          Copyright &copy; {new Date().getFullYear()} &nbsp;
          <a href="/" className="text-muted">
            ReachME
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
