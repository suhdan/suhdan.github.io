import { h } from "preact";
import { LINKED_IN, GITHUB, CONTACT, RESUME } from "~/assets/svg";
import "./styles.css";

const resumeFile = require("~/assets/resume.pdf");

const Nav = ({ onClick }) => (
  <nav className="nav">
    <a
      target="_blank"
      className="linkedin"
      href="https://www.linkedin.com/in/daniel-suh-22653a89/"
    >
      <LINKED_IN />
      <p>linkedin</p>
    </a>

    <a target="_blank" className="github" href="https://github.com/suhdan">
      <GITHUB />
      <p>github</p>
    </a>

    <a href="#" onClick={() => onClick("contact")} className="contact">
      <CONTACT />
      <p>contact</p>
    </a>

    <a target="_blank" className="resume" href={resumeFile}>
      <RESUME />
      <p>resume</p>
    </a>
  </nav>
);

export default Nav;
