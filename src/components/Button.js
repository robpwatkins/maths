import React from 'react';
import Display from './Display';

export default function Button({ name, character, handleClick }) {
  return (
    <div 
      className={`${name} button`}
      onClick={() => handleClick(character)}
    >
      <p>{character}</p>
    </div>
  )
}