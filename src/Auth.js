import { createContext, useContext } from "react";

export const AuthContext = createContext();

/*we use Context to pass data through the component tree without having to pass props down manually at every level and a hook to use this Context*/
export function useAuth() {
  return useContext(AuthContext);
}
