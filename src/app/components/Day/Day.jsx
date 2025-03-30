import React from 'react'
import { AddButton } from './AddButton'

export const Day = () => {
  return (
    <div className={`flex flex-col rounded-md w-1/7 bg-[#1A1A1A] gap-2 py-6 px-4 min-h-90`}>
      <h1 className={`text-center`}>Mon-31st</h1>
        <p>
            ✅ Well i did this task yes
        </p>
        <p> 
            ✅ i have done this as well 
        </p>
        <p> 
            ↗️ I have to do this task 
        </p>
        <div className={`relative h-full`}  >
          <AddButton display={"add here"} code={"left-0"} />

        </div>

        
    </div>
  )
}
