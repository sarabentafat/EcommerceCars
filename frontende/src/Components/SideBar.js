import React, { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { TfiAnnouncement } from "react-icons/tfi";
import { GiHearts } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
export default function Profil({ toggle }) {
  const [setActiveItem] = useState(null);

  const navigate = useNavigate();
  const Edit = () => {
    navigate('/Profile/EditProfile');
  };
  const Mann = () => {
    navigate('/Profile/MesAnnounces');
  };
  const Liked = () => {
    navigate('/Profile/LikedPosts');
  };

  const IconsText = [
    {
      id: 1,
      icon: <BiSolidEditAlt onClick={Edit} />,
      text: (
        <Link to="/Profile/EditProfile" >
          Edit profile
        </Link>
      ),
    },
    {
      id: 2,
      icon: <TfiAnnouncement onClick={Mann}/>,
      text: <Link to="/Profile/MesAnnounces">Mes Annonces</Link>,
    },
    {
      id: 3,
      icon: <GiHearts onClick={Liked} />,
      text: <Link to="/Profile/LikedPosts">Liked Posts</Link>,
    },
    {
      id: 4,
      icon: <MdLogout />,
      text: <Link to="/">Logout</Link>,
    },
  ];

  return (
    <div className="DIV">
      {IconsText.map((data) => {
        return (
          <div
            key={data.id}
            className={`${
              toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } flex items-center py-4 mt-4  cursor-pointer text-white transition-all duration-300 last:absolute left-4 bottom-4 `}
          >
            <div className="mr-8 ml-2 text-[25px] text-white">{data.icon}</div>
            <div
              className={` ${
                toggle ? "opacity-0 delay-200" : ""
              }text-[20px]  text-white whitespace-pre`}
            >
              {data.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
