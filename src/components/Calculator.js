import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

export default function Calculator() {
  const [nums, setNums] = useState([]);
  const [currentNum, setCurrentNum] = useState([]);
  const [operator, setOperator] = useState('');

  const handleNumClick = character => {
    setCurrentNum([Number(currentNum + character)]);
  }

  const handleOperatorClick = character => {
    setNums([...nums, currentNum[0]]);
    setOperator(character);
    setCurrentNum([]);
  }

  console.log(nums, currentNum, operator);
  return (
    <div className="calculator">
      <Display currentNum={currentNum} nums={nums} />
      <Button 
        name="function" 
        character="AC"
        handleClick={handleOperatorClick}
      />
      <Button 
        name="function" 
        character="+/-"
        handleClick={handleOperatorClick}
      />
      <Button 
        name="function" 
        character="%"
        handleClick={handleOperatorClick}
      />
      <Button 
        name="operator" 
        character="/"
        handleClick={handleOperatorClick}
      />
      <Button 
        name="number" 
        character={7}
        handleClick={handleNumClick}
      />
      <Button 
        name="number" 
        character={8}
        handleClick={handleNumClick}
      />
      <Button 
        name="number" 
        character={9}
        handleClick={handleNumClick}
      />
      <Button 
        name="operator" 
        character="x"
        handleClick={handleOperatorClick}
      />
      <Button 
        name="number" 
        character={4}
        handleClick={handleNumClick}
      />
      <Button 
        name="number" 
        character={5}
        handleClick={handleNumClick}
      />
      <Button 
        name="number" 
        character={6}
        handleClick={handleNumClick}
      />
      <Button 
        name="operator" 
        character="–"
        handleClick={handleOperatorClick}
      />
      <Button 
        name="number" 
        character={1}
        handleClick={handleNumClick}
      />
      <Button 
        name="number" 
        character={2}
        handleClick={handleNumClick}
      />
      <Button 
        name="number" 
        character={3}
        handleClick={handleNumClick}
      />
      <Button 
        name="operator" 
        character="+"
        handleClick={handleOperatorClick}
      />
      <Button 
        name="number" 
        character={0}
        handleClick={handleNumClick}
      />
      <Button 
        name="decimal" 
        character="."
        handleClick={handleOperatorClick}
      />
      <Button 
        name="operator" 
        character="="
        handleClick={handleOperatorClick}
      />
    </div>
  )
}