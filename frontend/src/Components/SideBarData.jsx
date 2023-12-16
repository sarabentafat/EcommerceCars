import React from "react";
import { IconsText } from "./IconsText";
export default function Profil({toggle}) {
    return (
    
   <div className="DIV">
     {IconsText.map(data =>{
        return(
            <div className={`${
                toggle ? 'last:w-[3.6rem]' :  'last:w-[17rem]'
              } flex items-center py-4 mt-4  cursor-pointer text-white transition-all duration-300 last:absolute left-4 bottom-4`}>
                <div className="mr-8 ml-2 text-[25px] text-white">{data.icon}</div>
                <div className={` ${toggle ? 'opacity-0 delay-200' : ''}text-[20px]  text-white whitespace-pre`}>{data.text}</div>
              </div>
              
        )
     }

        )}
   </div>
        )
  }