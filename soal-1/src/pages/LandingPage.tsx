import landingpage from "../assets/landingpage.jpg";
import global_feed from "../assets/global_feed.jpg";
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
import Navbar2 from '../components/Navbar2'
import ComplexNavbar from "../components/Navbar";
function LandingPage() {
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
    };
    favoritesCount: number;
    createdAt: string
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
    <Navbar2/>
      <div className="flex justify-center">
        <img src={landingpage} />
      </div>
      <div className="flex justify-center">
        <img src={global_feed} className="w-[250px] my-11" />
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center mx-[200px]">
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
                <Typography color="blue-gray">{article.createdAt.split('T')[0]}</Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-1 p-0">
              <Typography className="font-semibold text-black mb-3">
                {article.title}
              </Typography>
              <Typography>{article.body.slice(0, 200) + "..."}</Typography>
              <Link to={`/article/${article.slug}`}>
                <Typography className="text-blue-500 font-semibold mt-3 border-b-2 pb-3">
                  Read more...
                </Typography>
              </Link>
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
    </>
  );
}

export default LandingPage;
