import "./intro.css";

function Intro() {
  return (
    <section className="intro">
      <p>Hi, I'm</p>
      <h1 className="heading">
        Han Thompson.
        <span className="sub-heading">I build things for the web.</span>
      </h1>

      <p className="about">
        I'm a software engineer based in Wellington, NZ specialising in building
        exceptional websites, applications, and everything in between.
      </p>
      <a className="email-link" href="mailto:contacthanahmae@gmail.com">
        Get In Touch
      </a>
    </section>
  );
}

export default Intro;
