import React, { Component } from 'react';

//Imagens
import camera from '../../assets/Camera.png';
// Icones

// Components
import FavoritoList from '../../componets/favoritoList';
//mudança de páginas

class favoritos extends Component {
  render() {
    return (

      <div className='App-header' >

        <p>Favoritos</p>
        <div className='favoritos'>
          <FavoritoList></FavoritoList>
        </div>
      </div>
    );
  }
}

export default favoritos;