import React, { useContext } from "react";
import { Button } from "flowbite-react";

import { GlobalContext } from "../context/GlobalContext";

export default function Register() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { inputRegis } = state;
  const { handleInputRegis, handleRegis } = handleFunction;

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
              Sign Up
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleRegis}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  required
                  value={inputRegis.username}
                  onChange={handleInputRegis}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={inputRegis.password}
                  onChange={handleInputRegis}
                />
              </div>
              <div>
                <label
                  htmlFor="idCard"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ID Card
                </label>
                <input
                  type="text"
                  name="idCard"
                  id="idCard"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ID Card"
                  required
                  value={inputRegis.idCard}
                  onChange={handleInputRegis}
                />
              </div>
              <Button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign Up
              </Button>
            </form>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
