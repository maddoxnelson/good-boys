import React, { Component } from 'react'
import { formatBreedName } from './../helpers/functions';

export default class BreedTitle extends Component {
  render() {
        const { breedName } = this.props;

        return (
            <h1 style={{fontFamily: "Comic Sans MS", textAlign: "left", fontSize: '2em'}}>
                {formatBreedName(breedName)}
            </h1>
        )
  }
}
