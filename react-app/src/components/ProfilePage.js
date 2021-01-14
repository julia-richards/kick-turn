import React, { useState } from "react";
import Layout from "./Layout";
import Seo from "./Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import Tabs from "./Tabs";

const tabs = [
	{title: 'Tour Plans', content: 'Tour test'},
	{title: 'Routes', content: 'route test'},
	{title: 'Friends', content: 'friend test'}
];

const ProfilePage = () => {


	return (
		<Layout>
			<Seo title="Home" />
			<h1 style={{ position: "absolute", top: 10, right: 100 }}>
				<FontAwesomeIcon icon={faUserCircle} />
			</h1>

			<Tabs tabs={tabs} />
		</Layout>
	);
};

export default ProfilePage;
