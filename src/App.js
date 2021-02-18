import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import Nav from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <main>
      <Nav />
      <Intro />
      <ScrollAnimation
        className="dark-bg"
        animateIn="animate__fadeInUp"
        animateOnce={true}
      >
        <About />
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <Experience />
      </ScrollAnimation>
      <ScrollAnimation
        className="dark-bg"
        animateIn="animate__fadeInUp"
        animateOnce={true}
      >
        <Contact />
      </ScrollAnimation>
    </main>
  );
}

export default App;
