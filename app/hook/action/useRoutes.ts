import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { HiChat, HiUser, HiLogout } from "react-icons/hi";
import useConversation from "./useConversation";
import { BsChat } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { CgLogOut } from "react-icons/cg";
const useRoutes = ()=>{

    const pathname = usePathname();

    const { conversationid} = useConversation();
    

    const routes = useMemo(()=>[
        {
            label:'Chat',
            href:'/conversations',
            icon: BsChat ,
            active:pathname === '/conversations' || !!conversationid


        },

        {
            label:'Users',
            href:'/users',
            icon: FaRegCircleUser  ,
            active:pathname === '/users'
        },

        {
            label:'Logout',
            onClick:()=>signOut(),
            href:'#',
            icon: CgLogOut  ,
        }




    ], [pathname, conversationid])

    return routes;


}

export default useRoutes