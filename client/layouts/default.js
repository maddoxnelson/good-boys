import React, { Component, Fragment } from 'react'
import Masthead from '../components/Masthead';


export default class Default extends Component {
  render() {
    return (
      <Fragment>
            <Masthead />
            <div style={{ display: 'flex', flexDirection: 'flex-row'}}>
                {this.props.children}
            </div>
      </Fragment>
    )
  }
}
