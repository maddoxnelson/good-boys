import React, { Component, Fragment } from 'react'

export default class Masthead extends Component {
  render() {
    return (
        <Fragment>
            <h1 style={{ fontFamily: 'Comic Sans MS', textAlign: 'center' }}>
                <a href="/">Good Boys</a>
            </h1>
            <span style={{ display: 'block', fontFamily: 'cursive', textAlign: 'center'}}>They're good dogs</span>
      </Fragment>
    )
  }
}
