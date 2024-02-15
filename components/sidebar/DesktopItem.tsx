import Link from 'next/link';
import React from 'react'
import clsx from 'clsx';

interface DesktopItemProps{
    label:string;
    icon:any;
    href:string;
    onClick?:()=>void;
    active?:boolean;
}

const DesktopItem: React.FC<DesktopItemProps>=({
    label, href, icon:Icon, active, onClick
})=> {

    const handleClick = ()=>{
        if(onClick){
            return onClick();
        }
    }
    return (
        <li onClick={handleClick} key={label}>
            <Link href={href} className={clsx(
                "flex gap-x-4 my-4 items-center rounded-md py-8 px-2 text-sm font-semibold text-green-700 hover:text-black hover:bg-green-50",
                active && 'bg-green-100 text-black'
            )}>
                <Icon className="h-6 w-10 shrink-0 " aria-hidden="true" />
                <span className='sr-only'>{label}</span>
            </Link>
        </li>
    );
};

export default DesktopItem