import React, { useState } from "react";
import { register } from "../actions/Account.actions";
import LogRegBox from "../component/logRegBox";

function Account() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(username, password);
    console.log(response);

    if (!response.success) {
      // alert(response);
      console.log(response);
    }

    if (response.success) {
      window.location.href = "/login";
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-950 to-gray-900 absolute z-10 top-0 left-0">
      <h1 className="
        w-dvw
        text-4xl text-white text-center font-bold py-8
        bg-gradient-to-t from-gray-900 to-indigo-950
        drop-shadow-xl rounded-b-full"
      >Register Your Account</h1>

      <LogRegBox 
        handleSubmit={handleSubmit}  
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        login={false}
      />
    </div>
  );
}

export default Account;
