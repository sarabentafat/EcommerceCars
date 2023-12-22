
import { BiSolidEditAlt } from "react-icons/bi";
import { TfiAnnouncement } from "react-icons/tfi";
import { GiHearts } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-scroll';


export  const IconsText =[
    {
        id:1,
        icon:<BiSolidEditAlt />,
        text:<Link to='/' >Edit profil

      </Link>,
    

    },

    {
        id:1,
        icon:<TfiAnnouncement />,
        text:<Link to='/' > Mes Annonces

        </Link>,
    },

    {
        id:1,
        icon:<GiHearts />,
        text:<Link to='/' > Liked Posts

        </Link>,
       
    },
    {
        id:1,
        icon:<MdLogout />,
        text:<Link to='/' > Logout

        </Link>,

    },

];