import React, { useEffect } from "react";
import { useAuthenticated } from "../../hooks";
import { logout } from "../../services/auth";

const Logout = () => {
  const [authenticated, setAuthenticated] = useAuthenticated();

  useEffect(() => {
		(async () => {
			if (!authenticated) return;

			await logout();
			setAuthenticated(false);
		})();
	}, [authenticated, setAuthenticated]);

  return <h4>Logging Out...</h4>;
};

export default Logout;
