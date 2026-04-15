import React from "react";
import { NavLink } from "react-router";


const FriendCard = ({ friend }) => {
  // console.log(friend);
  return (
    <NavLink to={`/profile/${friend.id}`} className="bg-white shadow-sm rounded-xl flex flex-col gap-3 items-center py-5">
      <div className="w-30 overflow-hidden rounded-full border border-gray-300">
        <img src={friend.picture} alt={friend.name} />
      </div>
      <div className="text-center flex flex-col gap-2 items-center">
        <h1 className="text-xl font-bold">{friend.name}</h1>
        <p className="text-[14px] text-gray-500">{friend.days_since_contact}d ago</p>
        <div className="flex items-center gap-3">
            {
                friend.tags.map((tag, ind)=> <div className="bg-green-100 py-1 px-2 rounded-full text-[12px] font-semibold" key={ind}>{tag}</div>)
            }
        </div>
        <h3
            className={`text-white rounded-full py-1 px-2 text-[12px] font-medium
                ${friend.status == 'Overdue' && `bg-red-500`}
                ${friend.status == 'Almost due' && `bg-[#EFAD44]`}
                ${friend.status == 'On-track' && `bg-[#244D3F]`}
                `}
        >{friend.status}</h3>
      </div>
    </NavLink>
  );
};

export default FriendCard;
