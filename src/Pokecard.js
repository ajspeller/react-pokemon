import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
//'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function padId(id) {
  console.log(id, id.toString().length);
  if (id.length === 3) {
    return id;
  } else if (id.length === 2) {
    return `0${id}`;
  } 
  return `00${id}`;
}

class Pokecard extends Component {
  render() {
    console.log(this.props);
    const { name, id, type, exp } = this.props;
    let imgSrc = `${POKE_API}${padId(id.toString())}.png`;
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{name}</h1>
        <div className='Pokecard-image'>
          <img src={imgSrc} alt={name} />{' '}
        </div>
        <div className='Pokecard-data'>Type: {type}</div>
        <div className='Pokecard-data'>Type: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
