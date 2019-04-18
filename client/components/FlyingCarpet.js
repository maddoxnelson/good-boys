import React, { Component } from 'react'

export default class FlyingCarpet extends Component {
  render() {
      const { height, width, breed, imgPath } = this.props;
    return (
        <div style={{width: "500px"}}>
            <amp-fx-flying-carpet height="500px">
                <amp-img src={imgPath}
                width={width}
                layout="fixed"
                height={height}
                alt={imgPath}></amp-img>
            </amp-fx-flying-carpet>
        </div>
    )
  }
}
