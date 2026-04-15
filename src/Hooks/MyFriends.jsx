import React, { useEffect, useState } from "react";

const MyFriends = () => {
  const [spiner, setSpiner] = useState(true);
  const [friendsData, setFriendsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setFriendsData(data);
      setSpiner(false);
    };
    fetchData();
  });
  return {friendsData, spiner};
};

export default MyFriends;
