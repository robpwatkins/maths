import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

export default function Calculator() {
  const [nums, setNums] = useState([]);

  const handleNumClick = character => {
    setNums([...nums, character]);
  }

  return (
    <div className="calculator">
      <Display nums={nums} />
      <Button 
        name="function" 
        character="AC"
        handleClick={character => console.log(character)}
        />
      <Button 
        name="function" 
        character="+/-"
        handleClick={character => console.log(character)}
        />
      <Button 
        name="function" 
        character="%"
        handleClick={character => console.log(character)}
        />
      <Button 
        name="operator" 
        character="/"
        handleClick={character => console.log(character)}
        />
      <Button 
        name="number" 
        character="7"
        handleClick={handleNumClick}
        />
      <Button 
        name="number" 
        character="8"
        handleClick={handleNumClick}
        />
      <Button 
        name="number" 
        character="9"
        handleClick={handleNumClick}
        />
      <Button 
        name="operator" 
        character="x"
        handleClick={character => console.log(character)}
        />
      <Button 
        name="number" 
        character="4"
        handleClick={handleNumClick}
        />
      <Button 
        name="number" 
        character="5"
        handleClick={handleNumClick}
        />
      <Button 
        name="number" 
        character="6"
        handleClick={handleNumClick}
        />
      <Button 
        name="operator" 
        character="–"
        handleClick={character => console.log(character)}
        />
      <Button 
        name="number" 
        character="1"
        handleClick={handleNumClick}
        />
      <Button 
        name="number" 
        character="2"
        handleClick={handleNumClick}
        />
      <Button 
        name="number" 
        character="3"
        handleClick={handleNumClick}
        />
      <Button 
        name="operator" 
        character="+"
        handleClick={character => console.log(character)}
        />
      <Button 
        name="number" 
        character="0"
        handleClick={handleNumClick}
        />
      <Button 
        name="decimal" 
        character="."
        handleClick={character => console.log(character)}
        />
      <Button 
        name="operator" 
        character="="
        handleClick={character => console.log(character)}
        />
    </div>
  )
}