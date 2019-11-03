import React, { Component } from 'react';
import './LazyImage.css';

class LazyImage extends Component {

  constructor(props) {
    super(props);
    this.imageHD = null;
  }

  componentDidMount() {
    const imgToLoad = new Image();
    imgToLoad.src = this.props.srcLoaded;

    imgToLoad.onload = () => {
      this.imageHD.setAttribute(
        'style',
        `background-image: url('${this.props.srcLoaded}')`
      );
      this.imageHD.classList.add('lazy-image-fade-in');
    }

  };

  render() {
    return (
      <div className="lazy-image-container">
      
        <div 
          className="lazy-image-loaded" 
          ref={imageLoadedElem => this.imageHD = imageLoadedElem}>
        </div>
        <div 
          className="lazy-image-preload" 
          style={{ backgroundColor: `${this.props.srcPreloadColor}` }}>
        </div>
      
      </div>
    )
  }

}

export default LazyImage;