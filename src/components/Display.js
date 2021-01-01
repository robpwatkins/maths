import React from 'react';

export default function Display({ currentNum, nums, runningTotal }) {
  return (
    <div className="display">
      {/* <p>{currentNum.length ? currentNum[0] : nums[nums.length - 1]}</p> */}
      <p>{currentNum.length ? currentNum : runningTotal}</p>
    </div>
  )
}