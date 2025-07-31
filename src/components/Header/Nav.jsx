import "./nav.css";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => (
  <nav>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#work">Work</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
    <a
      href="/Hannah-Thompson-resume-2025.pdf"
      target="_blank"
    >
      Resume
    </a>
  </nav>
);

export default Nav;
