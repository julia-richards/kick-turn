import React, { useCallback, useState } from "react";
import { getMyFriends, deleteFriend } from "../../services/friends";
import { useFetchResult } from "../../hooks";
import Button from "../Button";
import AddFriend from "./AddFriend";
import FriendItem from "./FriendItem";

import "../../styles/MyFriends.css";

const MyFriends = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const fetchFriends = useCallback(() => getMyFriends(), []);
  const state = useFetchResult({ fetchResult: fetchFriends });

  if (state.isLoading && !state.hasFetched) {
    return (
      <div className="my-friends">
        <header className="my-friends__header">
          <h1>My Friends</h1>
          <Button
            type="disabled"
            style={{ padding: ".25rem .5rem" }}
            onClick={() => {}}
          >
            Add Friends +
          </Button>
        </header>
        <h4>Loading...</h4>
      </div>
    );
  }

  if (state.isRejected) {
    return (
      <div className="my-friends">
        <header className="my-friends__header">
          <h1>My Friends</h1>
        </header>
        <h1>Oh no!</h1>
        <p>The following error occurred: {state.error.message}</p>
        <p>Please refresh and try again.</p>
      </div>
    );
  }

  const {
    result: friends,
    isLoading,
    triggerRefetch,
    onError,
    updateResult,
  } = state;

  const onDeleteFriendClick = async (friendId) => {
    updateResult(
      friends.map((f) => (f.id === friendId ? { ...f, isDeleting: true } : f))
    );
    try {
      const { message } = await deleteFriend(friendId);
      updateResult(
        friends.map((f) =>
          f.id === friendId ? { ...f, deletedMessage: message } : f
        )
      );
      setTimeout(() => {
        triggerRefetch();
      }, 1000);
    } catch (e) {
      onError(e);
    }
  };

  return (
    <div className="my-friends">
      <header className="my-friends__header">
        <h1>My Friends</h1>
        {!isAddOpen && (
          <Button
            type="primary"
            style={{ padding: ".25rem .5rem" }}
            onClick={() => setIsAddOpen(true)}
          >
            Add Friends +
          </Button>
        )}
      </header>
      {isAddOpen && (
        <AddFriend
          onCloseClick={() => setIsAddOpen(false)}
          onAddSuccess={triggerRefetch}
        />
      )}
      {!!friends.length ? (
        <ul
          className="my-friends__list"
          style={isLoading ? { opacity: 0.8 } : {}}
        >
          {friends.map((friend) => (
            <FriendItem
              friend={friend}
              onDeleteFriendClick={onDeleteFriendClick}
            />
          ))}
        </ul>
      ) : (
        <p>
          No friends on file, yet{" "}
          <span role="img" title="skier">
            ⛷
          </span>
        </p>
      )}
    </div>
  );
};

export default MyFriends;
