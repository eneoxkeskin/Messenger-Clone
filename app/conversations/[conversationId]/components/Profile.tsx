import useotherUser from '@/app/hook/action/useOtherUser';
import Avatar from '@/components/Avatar';
import AvatarGroup from '@/components/AvatarGroup';
import Modal from '@/components/modals/Modal';
import { Dialog, Transition } from '@headlessui/react';
import { Conversation, User } from '@prisma/client';
import { Modak } from 'next/font/google';
import React, { Fragment, useMemo, useState } from 'react'
import { IoClose, IoTrash } from 'react-icons/io5';
import DeleteModal from './DeleteModal';

interface ProfileProps{
    isOpen:boolean;
    onClose:() =>void;
    data:Conversation & {
        users:User[]
    }
}

const Profile:React.FC<ProfileProps>=({data, isOpen, onClose})=> {

    const otherUser = useotherUser(data);

    const [confirmOpen, setConfirmOpen] = useState(false);

    const title = useMemo(()=>{
        return data.name || otherUser.name;
    },[data.name, otherUser.name]);
    return (
        <>
          <DeleteModal isOpen={confirmOpen} onClose={() => setConfirmOpen(false)} />
    
          <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
              <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-green-600 bg-opacity-75 transition-opacity" />
                </Transition.Child>
    
                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                  &#8203;
                </span>
    
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                          {/* Profile icon or image */}
                          {data.isGroup ? (
                            <AvatarGroup users={data.users} />
                          ) : (
                            <Avatar user={otherUser} />
                          )}
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            {title}
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-black">
                              {/* Additional info or description can go here */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setConfirmOpen(true)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full px-4 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:w-auto sm:text-sm"
                        onClick={onClose}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </>
      );
    };
    
    export default Profile;
    