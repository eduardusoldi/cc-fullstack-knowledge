import React from "react";
import landingpage from "../assets/landingpage.jpg";
import global_feed from "../assets/global_feed.jpg";
import CardArticle from '../components/CardArticle'

import { Typography } from "@material-tailwind/react";

function LandingPage() {
  return (
    <>
      <div className="flex justify-center">
        <img src={landingpage} />
      </div>
      <div className="flex justify-center">
        <img src={global_feed} className="w-[250px] my-11" />
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center mx-[200px]" >
              <CardArticle />
              <CardArticle />
              <CardArticle />
              <CardArticle />
              <CardArticle />
              <CardArticle />
              <CardArticle />
              <CardArticle />
          </div>
    </>
  );
}

export default LandingPage;
