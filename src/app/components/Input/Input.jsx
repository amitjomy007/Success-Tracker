'use client';
import React from 'react'
import { CategorySelector } from './CategorySelector'

const Input = () => {
  return (
    <div className={`flex flex-col justify-center  min-h-15 w-2/5 bg-[#1A1A1A] rounded-md  `}>
        <div className='m-4'>
            <input type="text" placeholder="Enter your task here..." className={`bg-[#1A1A1A] text-gray-400 px-4 py-2 w-full rounded-md  border-blue-500 ring-1 ring-blue-500`} />
            <div className='flex flex-row gap-4 '>
              <CategorySelector display={"take action ↗️"}  />
              <CategorySelector display={"done✅"}/>
              <CategorySelector display={"milestone🔥"}/>
            </div>  



        </div>
    </div>
  )
}

export default Input