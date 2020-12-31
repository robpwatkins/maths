import React from 'react';

export default function Display({ currentNum, nums }) {
  return (
    <div className="display">
      <p>{currentNum.length ? currentNum[0] : nums[nums.length - 1]}</p>
    </div>
  )
}