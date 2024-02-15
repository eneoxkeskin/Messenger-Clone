'use client'

import { FullMessageType } from '@/app/type'
import Avatar from '@/components/Avatar';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { compareAsc, format } from "date-fns";
import Image from 'next/image';
import ImageModal from './ImageModal';

interface MessageBoxProps{
    data: FullMessageType;
    isLast?: boolean;
}

const  MessageBox : React.FC<MessageBoxProps>=({
    data, isLast
})=> {

    const session = useSession();

    const [imageModalOpen, setImageModalOpen ] =useState(false);

    const isOwn = session.data?.user?.email === data?.sender?.email


    const container = clsx('flex gap-2 p-2', isOwn && 'justify-end'); // Decreased padding to p-2
    const avatar = clsx(isOwn && 'order-2');
    const body = clsx('flex flex-col gap-1', isOwn && 'items-end'); // Decreased gap in body
    const message = clsx(
      'text-sm w-fit text-white', // Decreased font size to text-xs
      isOwn ? 'bg-green-500 text-white' : 'bg-blue-600',
      data.image ? 'rounded-md p-0' : 'rounded-full py-1 px-2', // Adjusted padding
      'rounded-lg', // Adjusted rounding
      'max-w-[75%]' // Add max width to limit the size
    );
    
    

     const seenList = (data.seen || [])
     .filter((user)=>user.email !== data?.sender?.email)
     .map((user)=>user.name)
     .join(', ');

  return (

    <div className={container}> 

            <div className={avatar}>
                <Avatar user={data.sender}></Avatar>
            </div>
            <div className={body}>
                <div className='flex items-center gap-2'>
                    <div className='text-lg text-black'>
                       
                    </div>
                 

                </div>


            </div>

            <div className={message}>

                <ImageModal src={data.image} isOpen={imageModalOpen}
                onClose={()=>setImageModalOpen(false)}>

                </ImageModal>


                {data.image ? (
                    <Image
                    alt=""
                    height="280"
                    width="280"
                    onClick={()=> setImageModalOpen(true)}
                    src={data.image}
                    className='object-cover hover:scale-110
                    transition'>

                    </Image>
                ): <div>{data.body}</div>}
  <div className='text-xs'>
    {format(new Date(data.createdAt), 'p')}
  </div>

            </div>
            
{isLast && isOwn && seenList.length >0 &&(

    <div className='text-xs font-light text-gray-400
    '>
        {`Seen by ${seenList}`}
    </div>
)}


   
   
    </div>
  )
}

export default MessageBox