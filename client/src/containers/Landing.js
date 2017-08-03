import React from 'react'

import './Landing.css'

export default class Landing extends React.Component {
  state = {
    message: 'Is it birthday yet?'
  }

  _getFace () {
    let dateNow = new Date()
    let sashaBday = new Date("2017-08-10")
    if (dateNow.getTime() >= sashaBday.getTime()) {
      this.setState({
        message: 'It sure is!'
      })
    } else {
      this.setState({
        message: 'Not yet :('
      })
    }
  }

  render () {
    return (
      <div>
        <article onClick={() => this._getFace()}>
          <h1 className="cover-heading">{this.state.message}</h1>
        </article>
      </div>
    )
  }
}
