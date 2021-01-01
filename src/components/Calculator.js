import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

export default function Calculator() {
  const [nums, setNums] = useState([]);
  const [currentNum, setCurrentNum] = useState([0]);
  const [runningTotal, setRunningTotal] = useState(0);
  const [operator, setOperator] = useState('');

  const handleNumClick = character => {
    setCurrentNum([Number(currentNum + character)]);
  }

  const handleOperatorClick = character => {
    // let operator = character;
    // let result;
    if (operator === '=') return setOperator(character);
    else if (!runningTotal) setRunningTotal(currentNum[0]);
    else {
      let operatorNums = [runningTotal, currentNum[0]];
      setRunningTotal(operation(operatorNums));
    }
    setNums([...nums, currentNum[0]]);
    setCurrentNum([]);
    setOperator(character);
  }

  const handleEqualsClick = character => {
    setOperator(character);
    if (operator === '=') return;
    else {
      setNums([...nums, currentNum[0]]);
      let operatorNums = [runningTotal, currentNum[0]];
      setRunningTotal(operation(operatorNums));
    }
    setCurrentNum([]);
  }

  const handleClearClick = () => {
    setNums([]);
    setCurrentNum([0]);
    setOperator('');
  }

  const operation = operatorNums => {
    let result;
    if (operator == '/') return result = operatorNums.reduce((a, b) => a / b);
    else if (operator == 'x') return result = operatorNums.reduce((a, b) => a * b);
    else if (operator == '–') return result = operatorNums.reduce((a, b) => a - b);
    else return result = operatorNums.reduce((a, b) => a + b);
  }

  console.log(nums, currentNum, runningTotal);
  return (
    <div className="calculator">
      <Display currentNum={currentNum} nums={nums} runningTotal={runningTotal} />
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