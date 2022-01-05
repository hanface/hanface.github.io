import "./intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <p className="lead animate__animated animate__fadeInUp">Hi, my name is</p>
      <h1 className="heading animate__animated animate__fadeInUp">
        Han Thompson.
        <span className="sub-heading">I build things for the web.</span>
      </h1>

      <p className="intro-about animate__animated animate__fadeInUp animate__delay-0.2s">
        I'm a software engineer based in Wellington, NZ specialising in building
        exceptional websites, applications, and everything in between.
      </p>
      <a
        className="button intro-about animate__animated animate__fadeInUp animate__delay-0.3s"
        href="mailto:contacthanahmae@gmail.com"
      >
        Get In Touch
      </a>
    </section>
  );
}

export default Intro;
