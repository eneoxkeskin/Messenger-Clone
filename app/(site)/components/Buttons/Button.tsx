import React from 'react'
import clsx from 'clsx';

interface ButtonProps{
    type? :"button" | "submit" | "reset" | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: ()=>void;
    secondary?:boolean;
    danger?:boolean;
    disabled?:boolean;

}
const Button: React.FC<ButtonProps>=({children,
     danger ,disabled ,fullWidth, onClick, secondary, type})=> {
  return (
    <button
     onClick={onClick} 
     type={type}
     disabled={disabled}
     className={clsx(`flex
      justify-center
      px-4 py-4 text-sm 
      font-semibold rounded-lg`,
      disabled && 'opacity-45 cursor-default',
      fullWidth && 'w-full',
      secondary ?  'text-gray-800':'text-white',
      danger && 'bg-green-600 hover:bg-green-700',
      !secondary && !danger &&  'bg-green-600 hover:bg-green-700'
      
      )}
     >
        {children}
    </button>
  )
}

export default Button