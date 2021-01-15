import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { getFriendOptions, addFriend } from "../services/friends";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import "../styles/MyFriends.css";

const AddFriend = ({ onCloseClick }) => {
  const [friend, setFriend] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = async () => {
    const res = await addFriend({ friend_id: friend.value });
    setFriend(null); // clear from select
    setSuccessMsg(`You are now friends with ${res.friend.username}!`);
    // clear message after wait
    setTimeout(() => {
      setSuccessMsg(null);
    }, 3000);
  };

  return (
    <div className="add-friend-form">
      <header className="add-friend-form__header">
        <h2>Add Friend</h2>
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
  const [isAddOpen, setIsAddOpen] = React.useState(false);

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
            Add Friend +
          </Button>
        )}
      </header>
      {isAddOpen && <AddFriend onCloseClick={() => setIsAddOpen(false)} />}
    </div>
  );
};

export default MyFriends;
