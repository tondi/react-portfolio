import React, { Component } from 'react';
import './styles.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.data.name,
      imgSrc: this.props.data.imgSrc      
    };
  }

  render() {
    // console.log(this.state); 
    return (
      <div className='project'>
        <div className='project__text'>
          {this.state.name}
        </div>
        <img class='project__image' src={this.state.imgSrc} alt=''/>
      </div>
    );
  }
}

export default Project;