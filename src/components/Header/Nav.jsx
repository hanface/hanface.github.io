import "./nav.css";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  return (
    <nav>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#work">Work</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      <a
        className="button resume-button"
        href="/han-thompson-resume2021.pdf"
        target="_blank"
      >
        Resume
      </a>
    </nav>
  );
}

export default Nav;
