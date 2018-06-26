import { h, Component } from 'preact'
import './styles.scss'

const Back = (props) => {
  return (
    <div onClick={ props.onClick } className="back">
      <div>
        <div id="back-grid-item-1"></div>
        <div id="back-grid-item-2"></div>
      </div>
      <div>
        <div id="back-grid-item-3"></div>
        <div id="back-grid-item-4"></div>
      </div>
    </div>
  )
}

module.exports = Back