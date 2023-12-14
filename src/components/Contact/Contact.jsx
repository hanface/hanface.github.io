import { LINKEDIN_PROFILE_URL } from "../../enum"

import "./contact.css";

const Contact = () => (
  <section className="contact-section" id="contact">
    <h2>Contact me</h2>
    <p>
      I am open to new remote opportunities. 
      I am particularly interested in joining a team that emphasises collaborative learning and growth, 
      potentially applying Shape Up principles and embracing a product-led growth strategy. 
      I am passionate about expanding my skill set and contributing to the growth of both the team and the projects we undertake.
    </p>

    <p>
     If you have a role in mind that you believe aligns with my skills and aspirations, 
     or if you simply wish to connect and discuss potential opportunities, please feel free to reach out. 
     I'm eager to explore how I can contribute to your team and its mission.
    </p>
    <a 
      className="button" 
      href={LINKEDIN_PROFILE_URL} 
      target="_blank"
    >
      Get In Touch
    </a>
  </section>
);

export default Contact;
