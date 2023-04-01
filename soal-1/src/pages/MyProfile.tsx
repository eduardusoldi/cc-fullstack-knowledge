import React, { useState } from "react";
import { Card, Avatar, Button } from "@material-tailwind/react";
import CardArticle from "../components/CardArticle";
import { Link } from "react-router-dom";
import noarticle from "../assets/noarticle.jpg";
function MyProfile() {
  const [activeStatus, setActiveStatus] = useState(1);
  let actionTab = (number: number) => {
    setActiveStatus(number);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="container ml-[310px] my-11 font-bold text-2xl">
          <span>My profile</span>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <Card className="w-[1000px] h-[2000px]">
            <div className="m-[80px]">
              <div className="flex justify-center mb-4">
                <Avatar
                  size="xxl"
                  variant="circular"
                  src={localStorage.image}
                  alt="candice wu"
                />
              </div>
              <div className="flex justify-center gap-3">
                <span className="text-3xl font-bold text-black mb-4">
                  {localStorage.username}
                </span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                  </svg>
                </div>
              </div>
              <span className="flex justify-center text-sm text-center mx-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </span>
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
                        onClick={() => actionTab(1)}
                        className={
                          activeStatus == 1
                            ? "text-sm text-blue-500 flex flex-col justify-between border-blue-500 pt-3 rounded-t mr-10 font-normal"
                            : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                        }
                      >
                        <span className="mb-3 cursor-pointer">
                          {activeStatus == 1 ? "My Article" : "My Article"}
                        </span>
                        {activeStatus == 1 && (
                          <div className="w-full h-1 bg-blue-700 rounded-t-md" />
                        )}
                      </li>
                      <li
                        onClick={() => actionTab(2)}
                        className={
                          activeStatus == 2
                            ? "text-sm text-blue-500 flex flex-col justify-between border-blue-500 pt-3 rounded-t mr-10 font-normal"
                            : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                        }
                      >
                        <span className="mb-3 cursor-pointer">
                          {activeStatus == 2
                            ? "Favorited Article"
                            : "Favorited Article"}
                        </span>
                        {activeStatus == 2 && (
                          <div className="w-full h-1 bg-blue-500 rounded-t-md" />
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-flow-col grid-rows-2 gap-4 justify-center">
                <div className={activeStatus == 2 ? "" : "hidden"}>
                  {/* Fav */}
                  <img className="mt-11 w-[600px]" src={noarticle} />
                </div>
                {/* My */}
                <div className={activeStatus == 1 ? "" : "hidden"}>
                  <div className="mt-7">
                    <CardArticle />
                  </div>
                  <div className="mt-7">
                    <CardArticle />
                  </div>
                  <div className="mt-7">
                    <CardArticle />
                  </div>
                  <div className="mt-7">
                    <CardArticle />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
