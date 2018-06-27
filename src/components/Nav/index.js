import { h, Component } from 'preact'
import { LINKED_IN, GITHUB, CONTACT, RESUME } from '~/assets/svg'
import './styles.scss'

class Nav extends Component {
  render() {
    return (
      <nav className="nav">

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

      </nav>
    )
  }
}

module.exports = Nav