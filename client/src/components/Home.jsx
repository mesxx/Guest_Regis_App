import React, { useContext, useEffect } from "react";

import { GlobalContext } from "../context/GlobalContext";

export default function Home() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data } = state;
  const { fetchData } = handleFunction;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6x text-gray-900">
              Welcome {data?.data.username}!
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              id nisl mauris. Praesent a luctus odio, vitae dapibus ante.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
