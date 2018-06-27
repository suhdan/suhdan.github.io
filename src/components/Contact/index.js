import { h } from 'preact'
import { PHONE, EMAIL, ADDRESS } from '~/assets/svg'
import Back from '~/elements/Back'
import './styles.scss'

const Contact = props => {
  return(
    <section className="contact-info">

      <Back onClick={props.onExit} />
      
      <h3>Contact</h3>

      <ul className="methods">
        <li>
          <PHONE/>
          <span>516 660 1770</span>
        </li>

        <li>
          <EMAIL/>
          <span>dansuh3593@gmail.com</span>
        </li>

        <li>
          <ADDRESS/>
          <span>brooklyn, ny</span>
        </li>
      </ul>

    </section>
  )
}

module.exports = Contact