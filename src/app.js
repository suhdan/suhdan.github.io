import { h, Component } from 'preact'
import Nav from './screens/Nav'
import Contact from './screens/Contact'
import Resume from './screens/Resume'
import '~/assets/base.scss'
import './style.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentScreen: 'nav'
    }

    this.changeScreen = this.changeScreen.bind(this)
  }

  changeScreen(screenName) {
    this.setState({ currentScreen: screenName })
  }

  showScreen(screen) {
    return this.state.currentScreen === screen
  }
  
  render() {
    return(
      <main>  
        <Nav show={ this.showScreen('nav') } onClick={ this.changeScreen }/>
        <Contact show={ this.showScreen('contact') } onExit={() => this.changeScreen('nav')} />
        <Resume show={ this.showScreen('resume') } onExit={() => this.changeScreen('nav')} />

        <p class="copyright">&copy;dansuh</p>
      </main>
    )
  }
}

module.exports = App