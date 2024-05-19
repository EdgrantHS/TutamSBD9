import React, { useState, useContext } from "react";
import { login } from "../actions/Account.actions";
import LogRegBox from "../component/logRegBox";
import UserContext from "../UserContext";

function Account() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(username, password);
    console.log(response);

    const savedUser = {
      id: response.data.id,
      username: response.data.username,
      password: response.data.password
    }

    setUser(savedUser);

    if (!response.success) {
      alert(response.message);
    }

    if (response.data) {
      window.location.href = "/home";
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-950 to-gray-900 absolute z-10 top-0 left-0">
      <h1 className="
        w-dvw
        text-4xl text-white text-center font-bold py-8
        bg-gradient-to-t from-gray-900 to-indigo-950
        drop-shadow-xl rounded-b-full"
      >Login to Your Account</h1>

      <LogRegBox 
        handleSubmit={handleSubmit}  
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        login={true}
      />
    </div>
  );
}

export default Account;
