import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { pokemon } = this.props;
    const cards = pokemon.map((card) => (
      <Pokecard
        id={card.id}
        name={card.name}
        type={card.type}
        exp={card.base_experience}
      />
    ));
    let title;
    if (this.props.isWinner) {
      title = <h1 className='Pokedex-winner'>Winning Hand</h1>;
    } else {
      title = <h1 className='Pokedex-loser'>Losing Hand</h1>;
    }
    return (
      <div className='Pokedex'>
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className='Pokedex-cards'>{cards}</div>
      </div>
    );
  }
}

export default Pokedex;
