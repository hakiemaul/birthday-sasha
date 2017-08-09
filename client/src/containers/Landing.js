import React from 'react'

import './Landing.css'

export default class Landing extends React.Component {
  state = {
    message: 'Is it birthday yet?',
    countdown: 4
  }

  _getFace () {
    let dateNow = new Date()
    let sashaBday = new Date("2017-08-10")
    if (dateNow.getTime() >= sashaBday.getTime()) {
      this.setState({
        message: 'It sure is! Early present in'
      })
      setInterval(() => {
        this.setState({
          countdown: this.state.countdown - 1
        })
      }, 1000)
      setTimeout(() => {
        this.props.history.push('/showtime')
      }, 4000)
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
          { this.state.countdown > 3 ? <h1 className="cover-heading">{this.state.message}</h1> : <h1 className="cover-heading">{this.state.message + ' ' + this.state.countdown}</h1>}
        </article>
      </div>
    )
  }
}
