import React from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

const FriendItem = ({ friend, onDeleteFriendClick }) => {
  if (friend.deletedMessage) {
    return (
      <li className="my-friends__list__item" style={{ opacity: 0.7 }}>
        <div className="picture-frame">
          <img
            className="profile-pic"
            alt="Profile Pic"
            src="https://s3.amazonaws.com/website-assets-staging-2a039c6324/profile_pics/354/original/beacon.jpg?1557823635"
          />
        </div>
        <div className="text">
          <p style={{ color: "red" }}>
            <FontAwesomeIcon icon={faEraser} />
            {` ${friend.deletedMessage}`}
          </p>
        </div>
      </li>
    );
  }

  return (
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
          <a href={`mailto:${friend.email}`} style={{ textDecoration: "none" }}>
            {friend.email}
          </a>
        </p>
        {!!onDeleteFriendClick && (
          <Button
            id="remove-button"
            kind={!!friend.isDeleting ? "disabled" : "danger"}
            onClick={() => onDeleteFriendClick(friend.id)}
          >
            {!!friend.isDeleting ? "Removing..." : "Remove Friend"}
          </Button>
        )}
      </div>
    </li>
  );
};

export default FriendItem;
