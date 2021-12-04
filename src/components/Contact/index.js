import { h } from "preact";
import { PHONE, EMAIL, ADDRESS } from "~/assets/svg";
import Back from "~/elements/Back";
import "./styles.css";

const Contact = (props) => {
  return (
    <section className="contact-info">
      <Back onClick={props.onExit} />

      <h3>Contact</h3>

      <ul className="methods">
        <li>
          <PHONE />
          <a href="tel:516-660-1770">516 660 1770</a>
        </li>

        <li>
          <EMAIL />
          <a
            target="_blank"
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=dansuh3593@gmail.com&su=Hi&tf=1"
          >
            dansuh3593@gmail.com
          </a>
        </li>

        <li>
          <ADDRESS />
          <span>brooklyn, ny</span>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
