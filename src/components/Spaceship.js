// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props

    return (
      <div>
        <h1>Name: {name}</h1>
        <p>Speed: {speed}</p>
        <p>Rockets: {hasRockets ? "Yes" : "No"}</p>
        <p>Colors: {colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
