import { h, Component } from 'preact'
import SVG from './assets/svg'
import Contact from './contact'

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
          <SVG.LINKED_IN/>
          <p>linkedin</p>
        </a>
        <a target="_blank" class="github" href="https://github.com/dansuhhh">
          <SVG.GITHUB/>
          <p>github</p>
        </a>
        <a class="contact">
          <SVG.CONTACT/>
          <p>contact</p>
        </a>
        <a class="resume">
          <SVG.RESUME/>
          <p>resume</p>
        </a>
        <Contact/>
        <p class="copyright">&copy;dansuh</p>
      </main>
    )
  }
}

module.exports = App