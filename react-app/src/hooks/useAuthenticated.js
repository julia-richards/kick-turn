import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
  useContext,
} from "react";
import { authenticate } from "../services/auth";
let AuthContext;
const { Provider } = (AuthContext = createContext());

const AuthProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await authenticate();
        if (!user.errors) {
          setAuthenticated(true);
        }
      } catch (_e) {
        console.log("not logged in per", _e);
      }
    };
    try {
      checkAuth();
    } catch (e) {
      console.log("ETF");
    }
    setLoaded(true);
  }, []);

  let providedValue = useMemo(() => [authenticated, setAuthenticated], [
    authenticated,
    setAuthenticated,
  ]);

  if (!loaded) {
    return <h4 style={{ margin: "4rem" }}>Loading...</h4>;
  }

  return <Provider value={providedValue}>{props.children}</Provider>;
};

const useAuthenticated = () => {
  const value = useContext(AuthContext);
  return value;
};

export { AuthProvider, useAuthenticated };
