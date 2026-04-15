import React from 'react';
import MyFriends from '../../Hooks/MyFriends';
import FriendCard from '../../Ui/FriendCard/FriendCard';

const FriendsCards = () => {
    const {friendsData} = MyFriends();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                friendsData.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
            }
        </div>
    );
};

export default FriendsCards;