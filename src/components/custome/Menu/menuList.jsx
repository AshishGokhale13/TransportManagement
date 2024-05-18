import { FaUserPlus,FaUserGroup, } from "react-icons/fa6";
import { FaUser, FaUserTie } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaFileInvoice } from "react-icons/fa6";
import { FaClipboardUser } from "react-icons/fa6";
export const menuList=[
    {
        name:"Dashboard",
        icon:<MdDashboard/>,
        link:"/admin"
    },
    {
        name:"Invoice",
        icon:<LiaFileInvoiceSolid/>,
        submenu:[
            {
                name:"Create Invoice",
                icon:<FaFileInvoice />,
                link:"/invoice"
            },
            {
                name:"List of Invoice",
                icon:<LiaFileInvoiceSolid/>,
                link:"/invoice/list"
            }
        ]

    }
    
]