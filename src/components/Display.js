import React, { useState, useEffect } from 'react';

export default function Display({ fontSize, currentNum, runningTotal }) {
  return (
    <div className="display">
      <p style={{fontSize: `${fontSize}px`}}>{currentNum.length ? currentNum : runningTotal}</p>
    </div>
  )
}