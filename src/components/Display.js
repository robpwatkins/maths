import React from 'react';

export default function Display({ nums }) {
  return (
    <div className="display">
      <p>{nums[nums.length - 1]}</p>
    </div>
  )
}