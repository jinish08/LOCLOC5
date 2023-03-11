import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = async (e) => {};
  return (
    <div className="w-full min-h-screen flex items-center justify-around pt-0">
      <div className="hidden md:flex w-[50vw] h-[100vh]">
        <img
          src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg"
          alt="hi"
        />
      </div>
      <div className="flex items-center justify-center h-[100vh] bg-white w-[100vw] md:w-[50vw]">
        <div className="max-w-md w-full space-y-8  border-1  border-gray-300 p-4 lg-[700px] shadow-xl shadow-gray-400 opacity-90">
          <div>
            <h2 className="mt-6 text-center text-xl md:text-3xl font-extrabold text-gray-700">
              Coupon Generator
            </h2>
            <h2 className="text-center text-md font-extrabold text-gray-700">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6 gap-2">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px gap-y-4">
              <div className="mb-4">
                <label className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete=""
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={passwordShown ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  <div className="absolute right-2 top-2">
                    <button onClick={togglePassword}>
                      {passwordShown ? (
                        <AiFillEyeInvisible size={20} color={"black"} />
                      ) : (
                        <AiFillEye size={20} color={"black"} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center">
              <button
                className="btn btn-active btn-primary"
                onClick={handleSubmit}
              >
                Login
              </button>
              <h2 className="text-center text-md font-extrabold text-gray-700">
                OR
              </h2>

              <button
                className="btn btn-active btn-secondary"
                onClick={handleSubmit}
              >
                Google
              </button>
            </div>

            <div className="flex items-center justify-center"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
