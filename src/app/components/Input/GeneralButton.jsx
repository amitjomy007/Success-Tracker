import React from 'react'

export const GeneralButton = ({display}) => {
  return (
    <div className={`w-1/3 `}>
        <button className= {`w-4/5 bg-[#3E5641] rounded-xl my-4 mx-4 h-12 p-3`}>
            {display}
        </button>
    </div>
  )
}
