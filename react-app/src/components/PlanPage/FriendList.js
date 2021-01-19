import React from "react";
import FriendItem from "../MyFriends/FriendItem";

const FriendList = ({ friends }) => {
  if (!friends?.length) {
    return (
      <div className="friends-list friends-list--no-content">
        <h2>Friends</h2>
        <p>No friends added to this tour, yet</p>
      </div>
    );
  }

  return (
    <div className="friends-list friends-list--no-content">
      <h2>Friends</h2>
      {friends.map((friend) => (
        <FriendItem
          key={friend.id}
          friend={friend}
          onDeleteFriendClick={null} // not implemented
        />
      ))}
    </div>
  );
};

export default FriendList;
