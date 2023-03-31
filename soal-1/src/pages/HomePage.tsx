import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import Card from "../components/Card";
function HomePage() {
  const [activeStatus, setActiveStatus] = useState(1);
  return (
    <>
      <div className="flex justify-center">
        <div className="container mx-[200px] mt-11">
          {/* Popular Tags */}
          <span className="text-3xl font-bold">Popular Tags</span>
          <div className="flex w-max gap-4 mt-10">
            <Button className="rounded-full" color="gray" variant="outlined">
              implementations
            </Button>
            <Button className="rounded-full" color="gray" variant="outlined">
              welcome
            </Button>
            <Button className="rounded-full" color="gray" variant="outlined">
              introduction
            </Button>
            <Button className="rounded-full" color="gray" variant="outlined">
              codebaseShow
            </Button>
            <Button className="rounded-full" color="gray" variant="outlined">
              ipsum
            </Button>
            <Button className="rounded-full" color="gray" variant="outlined">
              qui
            </Button>
            <Button className="rounded-full" color="gray" variant="outlined">
              et
            </Button>
            <Button className="rounded-full" color="gray" variant="outlined">
              quia
            </Button>
            <Button className="rounded-full" color="gray" variant="outlined">
              cupiditate
            </Button>
            <Button className="rounded-full" color="gray" variant="outlined">
              deserunt
            </Button>
          </div>
          {/* Your Feed and Global Feed */}
          <div className="mt-8">
            <div className="sm:hidden relative w-11/12 mx-auto">
              <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-selector"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#A0AEC0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="8 9 12 5 16 9" />
                  <polyline points="16 15 12 19 8 15" />
                </svg>
              </div>
              <select
                aria-label="Selected tab"
                className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
              >
                <option selected className="text-sm text-gray-600">
                  Home{" "}
                </option>
              </select>
            </div>
            <div className="justify-between flex-wrap hidden sm:block bg-white border-b-2 w-[1050px]">
              <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
                <ul className="flex">
                  <li
                    onClick={() => setActiveStatus(1)}
                    className={
                      activeStatus == 1
                        ? "text-sm text-blue-500 flex flex-col justify-between border-blue-500 pt-3 rounded-t mr-10 font-normal"
                        : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                    }
                  >
                    <span className="mb-3 cursor-pointer">
                      {activeStatus == 1 ? "Your Feed" : "Your Feed"}
                    </span>
                    {activeStatus == 1 && (
                      <div className="w-full h-1 bg-blue-700 rounded-t-md" />
                    )}
                  </li>
                  <li
                    onClick={() => setActiveStatus(2)}
                    className={
                      activeStatus == 2
                        ? "text-sm text-blue-500 flex flex-col justify-between border-blue-500 pt-3 rounded-t mr-10 font-normal"
                        : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                    }
                  >
                    <span className="mb-3 cursor-pointer">
                      {activeStatus == 2 ? "Global Feed" : "Global Feed"}
                    </span>
                    {activeStatus == 2 && (
                      <div className="w-full h-1 bg-blue-500 rounded-t-md" />
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-end mr-3 mb-5">
              <Button
                className="flex gap-4 rounded-full w-[180px] h-[40px] items-center"
                color="blue"
                variant="outlined"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                Write Article
              </Button>
            </div>
          </div>
          <div className="grid grid-flow-col grid-rows-2 gap-4 justify-center">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
