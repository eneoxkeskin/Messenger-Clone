'use client'
import React from 'react'
import { FieldErrors, FieldValue, FieldValues, UseFormRegister } from 'react-hook-form';
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { HiOutlinePaperClip } from "react-icons/hi";
import { HiOutlineMicrophone } from "react-icons/hi";
interface MessagesInputProps{

    placeHolder?:string;
    id:string;
    type?:string;
    required?:boolean;
    register: UseFormRegister<FieldValues>,
    errors : FieldErrors

}
const MessagesInput:React.FC<MessagesInputProps>= ({
    errors, id ,register, placeHolder, required, type
})=> {
  return (
    <div className="flex items-center bg-white rounded-3xl p-2 w-full">
      <HiOutlineEmojiHappy className="mx-2 text-2xl text-gray-500" />
      <HiOutlinePaperClip className="mx-2 text-2xl text-gray-500" />
      <input
        id={id}
        type={type}
        placeholder={placeHolder || "Send a message"}
        autoComplete="off"
        {...register(id, { required: required ? 'Message is required' : false })}
        className="flex-1 py-3 px-4 bg-transparent text-gray-700 placeholder-gray-500 outline-none"
      />
      <HiOutlineMicrophone className="mx-2 text-2xl text-gray-500" />
    
    </div>
  )
}

export default MessagesInput