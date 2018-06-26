import { h, Component } from 'preact'
import { LINKED_IN, GITHUB, CONTACT, RESUME } from '~/assets/svg'
import './styles.scss'

class Nav extends Component {
  render() {
    return (
      <section className={ `nav ${this.props.show ? '': 'hide'}` }>

        <a target="_blank" className="linkedin" href="https://www.linkedin.com/in/daniel-suh-22653a89/">
          <LINKED_IN/>
          <p>linkedin</p>
        </a>
        
        <a target="_blank" className="github" href="https://github.com/dansuhhh">
          <GITHUB/>
          <p>github</p>
        </a>

        <a href="#" onClick={ () => this.props.onClick('contact')}  className="contact">
          <CONTACT/>
          <p>contact</p>
        </a>

        <a href="#" onClick={ () => this.props.onClick('resume')}  className="resume">
          <RESUME/>
          <p>resume</p>
        </a>

      </section>
    )
  }
}

module.exports = Nav