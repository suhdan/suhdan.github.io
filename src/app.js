import { h, Component } from 'preact'
import { LINKED_IN, GITHUB, CONTACT, RESUME } from './assets/svg'
import Contact from './contact'
import './style.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {
      showResume: false,
      showContact: false
    }
  }
  
  render() {
    return(
      <main>
        <a target="_blank" class="linkedin" href="https://www.linkedin.com/in/daniel-suh-22653a89/">
          <LINKED_IN/>
          <p>linkedin</p>
        </a>
        <a target="_blank" class="github" href="https://github.com/dansuhhh">
          <GITHUB/>
          <p>github</p>
        </a>
        <a class="contact">
          <CONTACT/>
          <p>contact</p>
        </a>
        <a class="resume">
          <RESUME/>
          <p>resume</p>
        </a>
        <Contact/>
        <p class="copyright">&copy;dansuh</p>
      </main>
    )
  }
}

module.exports = App