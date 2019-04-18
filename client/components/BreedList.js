import React, { Component } from 'react'
import { formatBreedName } from './../helpers/functions';
import Nav from './../components/Nav';

export default class BreedList extends Component {

    state = {
        breeds: this.props.breeds
    }

    render() {
        
        return (
            <div style={{ minWidth: '250px', marginRight: '25px' }}>
                <div style={{
                    top: '20px',
                    minWidth: '250px',
                    wordWrap: 'break-word',
                    position: 'absolute',
                    textTransform: 'capitalize'
                }}>
                    <Nav />
                    {this.state.dog}
                    <ul style={{ display: 'inline-block', listStyleType: 'none', paddingLeft: "5px", textAlign: 'center' }}>
                        {this.state.breeds.map((breed, index) => {
                            const { breed: breedName } = breed;
                            return <li key={index} style={{ borderBottom: '1px dotted black', padding: "10px 0" }}>
                                <a aria-label={breedName} href={`/dog/${breedName}`}>{formatBreedName(breedName)}</a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        )
  }
}
