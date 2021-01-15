import React, { useCallback, useState } from "react";
import AsyncSelect from "react-select/async";
import { getFriendOptions, addFriend, getMyFriends } from "../services/friends";
import { useFetchResult } from "../hooks";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPerson } from "@fortawesome/free-solid-svg-icons";

import "../styles/MyFriends.css";

const AddFriend = ({ onCloseClick, onAddSuccess }) => {
  const [friend, setFriend] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = async () => {
    const res = await addFriend({ friend_id: friend.value });
    setFriend(null); // clear from select
    onAddSuccess();
    setSuccessMsg(`You are now friends with ${res.friend.username}!`);
    // clear message after wait
    setTimeout(() => {
      setSuccessMsg(null);
    }, 3000);
  };

  return (
    <div className="add-friend-form">
      <header className="add-friend-form__header">
        <h2>Add Friends</h2>
      </header>
      <div className="add-friend-form__fields">
        <AsyncSelect
          className="AsyncSelect"
          noOptionsMessage={({ inputValue }) =>
            !!inputValue
              ? `No friends match "${inputValue}"`
              : "Your search is empty. Try typing a friend’s username."
          }
          loadOptions={getFriendOptions}
          isClearable
          placeholder="Search for a friend..."
          onChange={(selected) => setFriend(selected)}
          value={friend}
        />
        <div className="add-friend-form__actions">
          <Button
            disabled={!friend}
            onClick={handleSubmit}
            style={{ marginRight: "1rem", padding: ".75rem" }}
          >
            {!friend ? "Add Friend" : `Add ${friend.label}`}
          </Button>
          <Button
            type="danger"
            onClick={onCloseClick}
            style={{ padding: ".75rem" }}
          >
            Cancel
          </Button>
        </div>
      </div>
      {!!successMsg && (
        <p style={{ color: "#2ecc71", padding: "0 1rem" }}>
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ marginRight: ".25rem" }}
          />
          {successMsg}
        </p>
      )}
    </div>
  );
};

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

  const { result: friends, isLoading, triggerRefetch } = state;

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
            <li key={friend.id} className="my-friends__list__item">
              <div className="picture-frame">
                <img
                  className="profile-pic"
                  alt="Profile Pic"
                  src="https://s3.amazonaws.com/website-assets-staging-2a039c6324/profile_pics/354/original/beacon.jpg?1557823635"
                />
              </div>
              <div className="text">
                <h2>{friend.username}</h2>

                <p>
                  <strong>Avalanche Education </strong>
                  {friend.avy_edu}
                </p>
                <p>
                  <strong>Email </strong>
                  <a
                    href={`mailto:${friend.email}`}
                    style={{ textDecoration: "none" }}
                  >
                    {friend.email}
                  </a>
                </p>
              </div>
            </li>
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
