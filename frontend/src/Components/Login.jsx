
function LoginComponent() {
  return (
    <div className="flex flex-col bg-gray-800 p-4 rounded-lg w-1/2">
      <h1 className="font-semibold text-2xl my-4 text-center text-white">Login</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full"
        />
        <div className="w-full text-right underline cursor-pointer text-white">forget password</div>
        <button className="bg-gray-400 w-full py-2">Login</button>
      </div>
      <div className="divider align-self-center w-full text-center text-white font-semibold my-2">OR</div>
      <div className="flex flex-col gap-2">
        <button className="bg-gray-400 w-full py-2">Google</button>
        <button className="bg-gray-400 w-full py-2">Github</button>
      </div>
    </div>
  );
}

export default LoginComponent;
