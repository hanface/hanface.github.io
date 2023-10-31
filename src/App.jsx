import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import Nav from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <main>
      <Nav />
      <Intro />
      <AnimationOnScroll
        className="dark-bg"
        animateIn="animate__fadeInUp"
        animateOnce={true}
      >
        <About />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <Experience />
      </AnimationOnScroll>
      <AnimationOnScroll
        className="dark-bg"
        animateIn="animate__fadeInUp"
        animateOnce={true}
      >
        <Contact />
      </AnimationOnScroll>
    </main>
  );
}

export default App;
