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

function ArticleDetail() {
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
    createdAt: string;
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
    <div>
      <div className="flex justify-center">
        <div className="container ml-[310px] my-11 font-bold text-2xl">
          <span>{(data?.articles[0].title)}</span>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <Avatar
          size="xxl"
          variant="circular"
          src={data?.articles[0].author.image}
          alt="P R O F I L E P I C T U R E"
        />
      </div>
      <div className="flex justify-center">
        <span className="text-3xl font-bold text-black mb-4">{data?.articles[0].author.username}</span>
      </div>
      <div className="flex justify-center">
        <div>
          <Card className="w-[1000px] h-[2000px]">
            <div className="m-[80px]">
                {data?.articles[0].body}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
