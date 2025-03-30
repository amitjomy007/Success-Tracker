'use client'
import React from 'react'
import { useState } from 'react'
export const CategorySelector = ({display}) => {
  const [prefix,setPrefix] = useState('');
  let updaterFunction = () => {
    const currentPrefix = display;
      setPrefix(prefix=> {
        return currentPrefix;
      });
      console.log(currentPrefix);
      
  }
  return (
    <div className={`w-1/3 `}>
        <button onClick= {updaterFunction} className= {`w-4/5 bg-[#3E5641] rounded-xl my-4 mx-4 h-12 p-3`}>
            {display}
        </button>
    </div>
  )
}
