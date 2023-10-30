import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <h1>No User Found Plase Sign in</h1>;
  return <h1>Welcome onboard {user.username}</h1>;
}

export default Profile;
