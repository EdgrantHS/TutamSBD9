import { useState, useContext } from "react";
import UserContext from "../UserContext";
import { changePassword } from "../actions/Account.actions";

export default function Account() {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await changePassword(username, password, newPassword);
    setUser(response);

    if (!response.success) {
      alert(response.message);
    }

    if (response.success) {
      alert(response.message);
      if (newPassword === "") {
        alert("Account Deleted");
        window.location.href = "/login";
      }
    }


  }

  return (
    <div className='bg-gradient-to-t from-gray-950 to-gray-900 w-dvw min-h-screen'>
      <h1 className="
        w-dvw
        text-4xl text-white text-center font-bold pb-8
        bg-gradient-to-t from-gray-900 to-indigo-950
        drop-shadow-xl rounded-b-full"
      >Account Detail</h1>

      <div className="w-sreen min-h-fit h-3/4 py-8 mx-16 flex gap-x-12 align-center justify-center flex-wrap">
          <div className="w-fit h-3/4 flex flex-col items-center">
            <div className="
              flex flex-col items-center justify-start
              w-[30rem] min-h-[30rem] h-3/4 gap-4 p-4
              text-white
              bg-gradient-to-t from-gray-900 to-gray-950 rounded-2xl
              shadow-xl
              border-2 
            ">
            <div>
              <form className="w-full h-full text-center py-8 px-8 gap-4 flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="username" className="text-xl font-bold">Username</label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="w-full p-2 rounded-lg bg-gray-900 text-white"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor="password" className="pt-8 text-xl font-bold">Password</label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-2 rounded-lg bg-gray-900 text-white"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="newPassword" className="pt-8 text-xl font-bold">New Password</label>
                <input
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  className="w-full p-2 rounded-lg bg-gray-900 text-white"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                />
                <p>
                  Leave New Password empty <br/> to delete account
                </p>
                <div className="text-white text-center pt-2">
                  <input
                    type="checkbox"
                    className="text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  <label className="pl-2">Show Password</label>
                </div>

                <button className="bg-indigo-950 text-white rounded-lg p-2 w-full mt-12">
                  Save Edit
                </button>
                {/* <button className="bg-red-950 text-white rounded-lg p-2 w-full mt-4">
                  Delete Account
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};