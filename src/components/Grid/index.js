import React, { Component } from 'react';
import './styles.css';

import Project from '../Project';

class Header extends Component {
  render() {
    const data = [
      {
        name: 'test',
        imgSrc: 'https://tondi.pl/assets/cms.png'
      },
      {
        name: 'Verge Sport',
        imgSrc: 'https://tondi.pl/assets/cms.png'
      },
      {
        name: 'Verge Sport',
        imgSrc: 'https://tondi.pl/assets/cms.png'
      },
      {
        name: 'Verge Sport',
        imgSrc: 'https://tondi.pl/assets/cms.png'
      },
    ]

    return (
      <div className='grid'>
        {data.map(el => <Project data={el} />)}
      </div>
    );
  }
}

export default Header;