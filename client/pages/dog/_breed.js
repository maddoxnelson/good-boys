import React, { Component, Fragment } from 'react'
import { APIConfig } from './../../apis';
import { s3Bucket } from './../../apis';
import { API } from "aws-amplify";
import { pathFormatter } from "./../../helpers/functions";
import Nav from './../../components/Nav';
import Default from './../../layouts/default';
import BreedList from './../../components/BreedList';
import BreedTitle from '../../components/BreedTitle';
import FlyingCarpet from '../../components/FlyingCarpet';

class HelloWorld extends Component {
    static async getInitialProps({ query }) {
        const { breed } = query;
        
        const dogs = await API.get(`breedEndpoint`, `dogs/${breed}`);
        const breeds = await API.get(`breedEndpoint`, `breeds`);
        
        return {
            dogs,
            breeds,
            breed
        }
    }

    state = {
        dogs: this.props.dogs,
        breeds: this.props.breeds,
        breed: this.props.breed
    }

    render() {
        return (
            <Default>
              <BreedList breeds={this.state.breeds} />
              <div style={{maxWidth: "calc(100% - 250px)"}}>
                <BreedTitle breedName={this.state.breed} />
                <div style={{textAlign: 'center'}}>
                    <amp-carousel width="600" type="slides"
                            height="500">
                            {this.state.dogs.map(dog => {
                                const { path, breed, dimensions } = dog;
                                const { height, width } = dimensions;
                                const imgPath = `${s3Bucket.url}/${pathFormatter(path, breed)}`;

                                return <Fragment>
                                    <amp-img
                                                height={height}
                                                width={width}
                                                alt={breed}
                                                src={imgPath} 
                                            />
                                </Fragment>
                            })}
                    </amp-carousel>
                </div>
              
                <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                    
                    {this.state.dogs.map((dog, index) => {
                        const { path, breed, dimensions } = dog;
                        const { height, width } = dimensions;
                        const imgPath = `${s3Bucket.url}/${pathFormatter(path, breed)}`;
                        return (
                            <Fragment>
                                {
                                    index > 0 && index % 5 === 0 ? 
                                        <FlyingCarpet 
                                            height={height}
                                            width={width}
                                            breed={breed}
                                            imgPath={imgPath} /> : null
                                }
                                <a href={`/dog/breed/${path}`} aria-label={breed}>
                                <div amp-fx="fade-in" data-duration="1500ms" data-easing="cubic-bezier(0.40, 0.00, 0.40, 1.00)">
                                    <amp-img
                                            height={height}
                                            width={width}
                                            alt={breed}
                                            src={imgPath} 
                                        />
                                </div>
                                    
                                </a>
                            </Fragment>
                        )
                    })}
                </div>
                </div>
            </Default>
        );
    }
}

export default HelloWorld;