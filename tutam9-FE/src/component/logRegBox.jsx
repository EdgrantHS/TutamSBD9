export default function LogRegBox(props) {
  return (
    <div className="w-dvw h-fit py-8 flex gap-x-12 align-center justify-center flex-wrap">
      <div className="
          flex flex-col items-center justify-start
          w-[30rem] min-h-[30rem] h-fit gap-4 p-4
          text-white
          bg-gradient-to-t from-gray-900 to-gray-950 rounded-2xl
          shadow-xl
          border-2 
        ">
        <div>
          <p className="font-bold text-3xl pt-4 text-center">ED Movie</p>
        </div>
        <form className="w-full h-full text-center py-8 px-8 gap-4 flex flex-col" onSubmit={props.handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded-lg bg-gray-900 text-white"
            value={props.username}
            onChange={e => props.setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded-lg bg-gray-900 text-white"
            value={props.password}
            onChange={e => props.setPassword(e.target.value)}
          />
          <button className="bg-indigo-950 text-white rounded-lg p-2 w-full mt-8">
            { props.login ? "Login" : "Register" }  
          </button>
        </form>
        { props.login ? 

          <div>
            <div className="text-center mt-auto mb-8">
              <p>Don't have an account?</p>
              <a href="/register" className="text-blue-300">Register</a>
            </div>
          </div>

          :

          <div>
            <div className="text-center mt-auto mb-8">
              <p>Already have an account?</p>
              <a href="/login" className="text-blue-300">Login</a>
            </div>
          </div>
        }
      </div>
    </div>
  )
}