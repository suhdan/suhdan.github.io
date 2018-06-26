import { h } from 'preact'
import { PHONE, EMAIL, ADDRESS } from '~/assets/svg'
import Back from '~/elements/Back'
import './styles.scss'

const Contact = (props) => {
  return(
    <section className={ `contact ${props.show ? '': 'hide'}` }>

      <Back onClick={props.onExit} />
      
      <h3>Contact</h3>

        <div className="contact-point">
          <PHONE/>
          <span>516 660 1770</span>
        </div>

        <div className="contact-point">
          <EMAIL/>
          <span>dansuh3593@gmail.com</span>
        </div>

        <div className="contact-point">
          <ADDRESS/>
          <span>brooklyn, ny</span>
        </div>

    </section>
  )
}

module.exports = Contact