import React, { Component, Fragment } from 'react'
import { APIConfig } from './../../apis';
import { s3Bucket } from './../../apis';
import { API } from "aws-amplify";
import { pathFormatter } from "./../../helpers/functions";
import Default from './../../layouts/default';
import BreedList from './../../components/BreedList';

class OneBoy extends Component {
    static async getInitialProps({ query }) {
        
        const goodBoy = await API.get(`breedEndpoint`, `dog/breed/${query.path}`);
        const breeds = await API.get(`breedEndpoint`, `breeds`);
        
        return {
            goodBoy,
            breeds
        }
    }

    state = {
        goodBoy: this.props.goodBoy,
        breeds: this.props.breeds
    }

    render() {
        const { path, breed, dimensions } = this.state.goodBoy;
        const { height, width } = dimensions;
        const imgPath = `${s3Bucket.url}/${pathFormatter(path, breed)}`;

        return (
            <Default>
              <BreedList breeds={this.state.breeds} />
                <div amp-fx="fade-in" data-duration="1500ms" data-easing="cubic-bezier(0.40, 0.00, 0.40, 1.00)">
                    <amp-img
                            height={height}
                            width={width}
                            alt={breed}
                            src={imgPath} 
                        />
                </div>
            </Default>
        );
    }
}

export default OneBoy;