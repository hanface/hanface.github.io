import "./nav.css";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => (
  <nav>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#work">Work</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
    <a
      className="button resume-button"
      href="/han-thompson-resume-2023.pdf"
      target="_blank"
    >
      Resume
    </a>
  </nav>
);

export default Nav;
