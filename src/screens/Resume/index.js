import { h, Component } from 'preact'
import './styles.scss'

class Resume extends Component {
  render() {
    return (
      <section className={ `resume ${this.props.show ? '': 'hide'}` }>
        hi
      </section>
    )
  }
}

module.exports = Resume