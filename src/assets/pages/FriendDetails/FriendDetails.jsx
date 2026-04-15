import React from "react";
import MyFriends from "../../../Hooks/MyFriends";
import { useLoaderData, useParams } from "react-router";
import { LuBellRing } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import { FaArchive } from "react-icons/fa";

/***
 * 
 * bio:"Met at a startup event. We often discuss business ideas and collaborations."
days_since_contact:16
email:"rashidul.islam@yahoo.com"
goal:14
id:7
name:"Rashidul Islam"
next_due_date:"2026-03-30"
picture:"https://randomuser.me/api/portraits/men/67.jpg"
status:"overdue"
tags:(2) ['business', 'network']
 */

const FriendDetails = () => {
  //   const { friendsData } = MyFriends();
  const friendsData = useLoaderData();
  const { id } = useParams();

  const expectedFriendData = friendsData.find(
    (friend) => friend.id === Number(id),
  );

  const {
    name,
    bio,
    days_since_contact,
    email,
    goal,
    next_due_date,
    picture,
    status,
    tags,
  } = expectedFriendData;

  console.log(expectedFriendData);
  return (
    <div className=" bg-[#F8FAFC]  py-10">
      <div className="w-[90%] sm:container flex  gap-5 items-start mx-auto">
        {/* left side */}
        <div className="flex flex-col items-start gap-5">
          {/* profile card */}
          <div className="bg-white shadow-sm rounded-lg p-5 flex flex-col items-center gap-2">
            <div className="w-25 overflow-hidden rounded-full border border-gray-400">
              <img src={picture} alt={name} />
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-bold">{name}</h1>
              <h3
                className={`text-white rounded-full py-1 px-2 text-[12px] font-medium
                ${status == "Overdue" && `bg-red-500`}
                ${status == "Almost due" && `bg-[#EFAD44]`}
                ${status == "On-track" && `bg-[#244D3F]`}
                `}
              >
                {status}
              </h3>
              <div className="flex items-center gap-3">
                {tags.map((tag, ind) => (
                  <div
                    className="bg-green-100 py-1 px-2 rounded-full text-[12px] font-semibold"
                    key={ind}
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p className="text-[11px] w-[70%] text-gray-400 text-center italic">{`"${bio}"`}</p>
              <p className="text-[12px] text-gray-500">Preferred : {email}</p>
            </div>
          </div>
          {/* snooze, archive, deleted btns */}
          <div className="mt-2 w-full space-y-2.5">
                <div className="bg-white flex items-center justify-center text-gray-500 font-semibold gap-2 py-3 px-4 rounded-lg border-gray-300 shadow-sm w-full  border cursor-pointer">
                    <LuBellRing />
                    <p>Snooze 2 Weeks</p>
                </div>
                <div className="bg-white flex items-center justify-center text-gray-500 font-semibold gap-2 py-3 px-4 rounded-lg border-gray-300 shadow-sm w-full  border cursor-pointer">
                    <FaArchive />
                    <p>Archive</p>
                </div>
                <div className="bg-white flex items-center justify-center text-red-500 font-semibold gap-2 py-3 px-4 rounded-lg border-gray-300 shadow-sm w-full  border cursor-pointer">
                    <MdDeleteForever />
                    <p>Delete</p>
                </div>
          </div>
        </div>
        {/* right side  */}
        <div className="flex-1">
            {/* grid */}
            <div className="grid grid-cols-3 gap-5">
                <div className="bg-white flex flex-col items-center gap-2 py-3 rounded-lg border-gray-300 border ">
                    <h1 className="text-3xl text-[#] font-semibold">{days_since_contact}</h1>
                    <p className="text-gray-500">Days Since Contact</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
