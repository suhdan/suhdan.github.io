import { h, Component } from 'preact'
import Nav from './components/Nav'
import Modal from './components/Modal'
import Contact from './components/Contact'
import Resume from './components/Resume'

import '~/assets/base.scss'
import './style.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentScreen: 'nav',
      modalOpen: false
    }

    this.changeScreen = this.changeScreen.bind(this)
  }

  changeScreen(screenName) {
    this.setState({ 
      currentScreen: screenName,
      modalOpen: screenName !== 'nav'
    })
  }
  
  render() {
    return(
      <main>  
        <Nav onClick={ this.changeScreen }/>

        <Modal visible={ this.state.modalOpen }>
          { this.state.currentScreen === 'contact' &&
            <Contact onExit={ () => this.changeScreen('nav') } />
          }
          { this.state.currentScreen === 'resume' &&
            <Resume onExit={ () => this.changeScreen('nav') } />
          }
        </Modal>

        <p class="copyright">&copy;dansuh</p>
      </main>
    )
  }
}

module.exports = App