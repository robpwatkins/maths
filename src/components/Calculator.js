import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

export default function Calculator() {
  const [nums, setNums] = useState([]);
  const [currentNum, setCurrentNum] = useState([0]);
  const [operator, setOperator] = useState('');

  const handleNumClick = character => {
    setCurrentNum([Number(currentNum + character)]);
  }

  const handleOperatorClick = character => {
    let operator = character;
    let result;
    if (!nums.length) result = currentNum[0]
    else {
      let operatorNums = [nums[nums.length - 1], currentNum[0]];
      if (operator == '/') result = operatorNums.reduce((a, b) => a / b);
      else if (operator == 'x') result = operatorNums.reduce((a, b) => a * b);
      else if (operator == '–') result = operatorNums.reduce((a, b) => a - b);
      else result = operatorNums.reduce((a, b) => a + b);
      console.log(result);
    }
    setNums([...nums, currentNum[0]]);
    setCurrentNum([]);
    setOperator(character);
  }

  const handleEqualsClick = () => {
    setNums([...nums, currentNum[0]]);
    let operatorNums = [nums[nums.length - 1], currentNum[0]];
    let result;
    if (operator == '/') result = operatorNums.reduce((a, b) => a / b);
    else if (operator == 'x') result = operatorNums.reduce((a, b) => a * b);
    else if (operator == '–') result = operatorNums.reduce((a, b) => a - b);
    else result = operatorNums.reduce((a, b) => a + b);
    setCurrentNum([result]);
  }

  const handleClearClick = () => {
    setNums([]);
    setCurrentNum([0]);
    setOperator('');
  }

  console.log(nums, currentNum, operator)
  return (
    <div className="calculator">
      <Display currentNum={currentNum} nums={nums} />
      <Button 
        name="function" 
        character="AC"
        handleClick={handleClearClick}
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
        handleClick={handleEqualsClick}
      />
    </div>
  )
}