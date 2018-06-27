import { h } from 'preact'
import './styles.scss'

const Modal = props => {
  return (
    <div className={ `modal ${props.visible ? '': 'hide'}` }>
      { props.children }
    </div>
  )
}

module.exports = Modal