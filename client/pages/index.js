import React, { Component, Fragment } from 'react'
import { APIConfig } from './../apis';
import { s3Bucket } from './../apis';
import { API } from "aws-amplify";
import { pathFormatter } from "../helpers/functions";
import BreedList from './../components/BreedList';
import Default from './../layouts/default';

const boxStyles = {
    minWidth: '200px',
    minHeight: '450px',
    display: 'inline-block'
}

class HelloWorld extends Component {
    static async getInitialProps({ }) {
        
        const dogs = await API.get(`breedEndpoint`, `dogs`);
        const breeds = await API.get(`breedEndpoint`, `breeds`);
        
        return {
            dogs,
            breeds
        }
    }

    state = {
        dogs: this.props.dogs,
        breeds: this.props.breeds
    }

    render() {
        return (
            <Fragment>
                <Default>
                    <BreedList breeds={this.state.breeds} />
                    <div>
                        {this.state.dogs.map(dog => {
                            const { path, breed, dimensions } = dog;
                            const { height, width } = dimensions;
                            const imgPath = `${s3Bucket.url}/${pathFormatter(path, breed)}`;
                            return <div style={boxStyles} key={path}>
                                <a href={`/dog/${breed}`} aria-label={breed} >
                                <div amp-fx="fade-in" data-duration="1500ms" data-easing="cubic-bezier(0.40, 0.00, 0.40, 1.00)">
                                    <amp-img
                                            height={height}
                                            width={width}
                                            alt={breed}
                                            src={imgPath} 
                                        />
                                </div>
                                </a>
                            </div>
                        })}
                    </div>
                </Default>
            </Fragment>
        );
    }
}

export default HelloWorld;