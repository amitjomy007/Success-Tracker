import React from 'react'
import Input from './Input/Input'
import { Day } from './Day/Day'

export const Gallery = () => {
  return (
    <div className='flex flex-col items-center gap-y-12 p-12 pt-12'>
        <Input/>
        <div className='flex flex-row gap-4'>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
        </div>
    </div>
  )
}
