import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { getFriendOptions, addFriend } from "../services/friends";

const AddFriend = () => {
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
		<>
			<AsyncSelect
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
			<button disabled={!friend} onClick={handleSubmit}>
				{!friend ? "Add Friend" : `Add ${friend.label}`}
			</button>
			{!!successMsg && <p>{successMsg}</p>}
		</>
	);
};

export default AddFriend;
