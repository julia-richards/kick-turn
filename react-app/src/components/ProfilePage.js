import React from "react";
import Layout from "./Layout";
import Seo from "./Seo";

const ProfilePage = () => {
	return (
		<Layout>
			<Seo title="Home" />
			<h1 style={{ position: "absolute", top: 10, right: 100 }}>Profile</h1>
			<p style={{ color: "purple" }}>
				Todo: make 'ProfilePage' have more stuff
			</p>
		</Layout>
	);
};

export default ProfilePage;
