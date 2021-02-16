import "./nav.css";

import AnchorLink from "react-anchor-link-smooth-scroll";

function Nav() {
  return (
    <nav>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#work">Work</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
    </nav>
  );
}

export default Nav;
