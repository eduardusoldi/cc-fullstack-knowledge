import {
  Card,
  Button,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import CardArticle from "../components/CardArticle";
import noarticle from "../assets/noarticle.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { fetchArticle } from "../api/fetchArticle";

function HomePage() {
  let baseURL = `https://test.fourtrezz.info/fs`;
  interface TagList {
    tagList: string;
  }
  interface ArticleData {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: TagList[];
    author: {
      username: string;
      bio: string;
      image: string;
      following: boolean;
    },
    favoritesCount: number
  }
  interface Article {
    articles: ArticleData[];
    articlesCount: number;
  }
  const [activeStatus, setActiveStatus] = useState(1);
  const [data, setData] = useState<Article | null>(null);
  let actionTab = (number: number) => {
    setActiveStatus(number);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${baseURL}/articles`);
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-center">
        <div className="container mx-[200px] mt-11">
          {/* Popular Tags */}
          {/* {JSON.stringify(data?.articles[0].tagList)} */}
          <span className="text-3xl font-bold">Popular Tags </span>
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
                    onClick={() => actionTab(1)}
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
                    onClick={() => actionTab(2)}
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
              <Link to={"/new-article"}>
                <Button
                  className="gradient-to-r from-cyan-500 to-blue-500 flex gap-4 rounded-full w-[180px] h-[40px] items-center"
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
              </Link>
            </div>
          </div>
          <div className="grid grid-flow-col grid-rows-2 gap-4 justify-center">
            <div className={activeStatus == 1 ? "" : "hidden"}>
              {/* Your Feed */}
              <img className="mt-11 w-[600px]" src={noarticle} />
            </div>
            {/* Global Feed */}
            <div
              className={
                activeStatus == 2
                  ? "grid grid-cols-2 gap-4 justify-center"
                  : "hidden"
              }
            >
              {data?.articles.map((article) => (
                <Card
                  color="transparent"
                  shadow={false}
                  className="w-full border border-gray py-5 my-1 mx-1 px-5"
                >
                  <CardHeader
                    color="transparent"
                    floated={false}
                    shadow={false}
                    className="mx-0 flex items-center gap-4 pt-0 pb-8"
                  >
                    <Avatar
                      size="lg"
                      variant="circular"
                      src={article.author.image}
                      alt="candice wu"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <Typography variant="h5" color="blue">
                          {article.author.username}
                        </Typography>
                      </div>
                      <Typography color="blue-gray">October 9, 2022</Typography>
                    </div>
                  </CardHeader>
                  <CardBody className="mb-1 p-0">
                    <Typography className="font-semibold text-black mb-3">
                      {article.title}
                    </Typography>
                    <Typography>
                      {article.body.slice(0, 200) + "..."}
                    </Typography>
                    <Typography className="text-blue-500 font-semibold mt-3 border-b-2 pb-3">
                      Read more...
                    </Typography>
                    <div className="flex w-max gap-4 mt-3 justify-between">
                      {article.tagList.map((el) => (
                        <Button
                          className="rounded-full"
                          color="gray"
                          variant="outlined"
                        >
                          tag
                        </Button>
                      ))}

                      <div className="">
                        <Button
                          className="from-cyan-500 to-blue-500 rounded-xl flex items-center text-base justify-center w-[85px] h-[40px]"
                          variant="outlined"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                          </svg>
                          {article.favoritesCount}
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
