import React from 'react';

export default function Display({ currentNum, runningTotal }) {
  return (
    <div className="display">
      <p>{currentNum.length ? currentNum : runningTotal}</p>
    </div>
  )
}