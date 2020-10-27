import React, { Component } from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    render() {
        // console.log(this.props.initialCount)
        if(this.props.initialCount > 0) {
            return `${this.props.initialCount} seconds left before I go boom!`
        } else {
            return "BOOM!"
        }
    }
}

export default Bomb;