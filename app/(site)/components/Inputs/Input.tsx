import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx';

interface InputProps{
    label:string;
    id:string;
    type?:string;
    required?:boolean;
    register:UseFormRegister<FieldValues>;
    errors:FieldErrors;
    disabled? :boolean;

}

const Input: React.FC<InputProps>= ({label, id, errors , 
    register ,disabled, required, type})=> {
  return (
    <div>
 
        <label htmlFor={id} className='block text-sm font-medium text-white'>
            {label}
            </label>
        <input  id={id} 
                type={type} 
                autoComplete={id} 
                disabled={disabled} 
                {...register(id,{required})}
                className={clsx(
                  "w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder-gray-400",
                  "focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500",
                  errors[id] && "border-red-500 focus:border-red-500 focus:ring-red-500",
                  disabled && "opacity-50 cursor-not-allowed"
              )}>


        </input>
        
      
        
        
        </div>
  )
}

export default Input