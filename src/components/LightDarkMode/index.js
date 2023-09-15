// Write your code here

import {Component} from 'react'
import './index.css'

class Mode extends Component {
  state = {light: false}

  changemode = () => {
    this.setState(prevstate => ({light: !prevstate.light}))
  }

  render() {
    const {light} = this.state

    if (light === true) {
      return (
        <div className="main">
          <div className="sublight">
            <h1 className="head">Click To Change Mode</h1>
            <button
              type="button"
              className="butnlight"
              onClick={this.changemode}
            >
              Dark Mode
            </button>
          </div>
        </div>
      )
    }
    return (
      <div className="main">
        <div className="subdark">
          <h1 className="head">Click To Change Mode</h1>
          <button type="button" className="btndark" onClick={this.changemode}>
            Light Mode
          </button>
        </div>
      </div>
    )
  }
}

export default Mode
