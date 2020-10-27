import React, { Component } from 'react';

class ImageSlider extends React.Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    
    render() {
        return `I am on side ${this.state.currentSlideIndex}`
    }
}

export default ImageSlider;