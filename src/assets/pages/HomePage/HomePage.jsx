import React, { Suspense } from "react";
import HeroBanner from "../../../components/HeroBanner/HeroBanner";
import HeroBoxes from "../../../components/HeroBoxes/HeroBoxes";
import MyFriends from "../../../Hooks/MyFriends";
import { GridLoader } from "react-spinners";
import FriendsCards from "../../../components/FriendsCards/FriendsCards";

const HomePage = () => {
  const { spiner } = MyFriends();

  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto py-10">
        <HeroBanner></HeroBanner>
        <HeroBoxes></HeroBoxes>
        <hr className="text-gray-300 my-8" />
        <h1 className="text-2xl font-bold mb-5">Your Friends</h1>

        <>{spiner ? <div className="flex justify-center py-30"><GridLoader color="#9C27B0"/></div> : <FriendsCards></FriendsCards>}</>

        
      </div>
    </div>
  );
};

export default HomePage;
