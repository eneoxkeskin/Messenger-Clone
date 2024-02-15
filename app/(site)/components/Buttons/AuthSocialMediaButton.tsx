import React from 'react'
import { IconType } from 'react-icons'


interface AuthSocialMediaButtonProps{
    icon:IconType;
    onClick?:()=>void;
}


const AuthSocialMediaButton: React.FC<AuthSocialMediaButtonProps>=({
    icon:Icon, onClick
})=> {
  return (
    <button type='button' onClick={onClick} 
    className="w-full flex justify-center items-center rounded-full bg-green-600
    px-4 py-3 text-white shadow-sm hover:bg-green-700 transition duration-300 ease-in-out"
>
        
        
        <Icon/>
    </button>
  )
}

export default AuthSocialMediaButton