import React from 'react'

export const AddButton = ({display,code}) => {
  return (
    <div className={`absolute bottom-0 ${code}`}>
        <button className={`flex justify-center items-center bg-black text-xs text-gray-500 px-3 py-1.5  rounded-sm   hover:shadow-xs hover:shadow-gray-700 hover:bg-[#1A1A1A] hover:text-gray-200 transition duration-300 ease-in-out`}>
            {display}
        </button>
    </div>
  )
}
