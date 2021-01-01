import React from 'react';

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