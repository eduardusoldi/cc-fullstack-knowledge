import React from "react";
import newArticle from "../assets/newArticle.jpg";
import { Input, Button } from "@material-tailwind/react";

function WriteArticle() {
  return (
    <>
      <div className="flex justify-center">
        <div className=" flex justify-center container gap-[100px]">
          <div className="my-11">
            <span className="text-3xl font-bold">Write your new article</span>
            <form>
              <div className="w-[500px] mt-11">
                <Input label="Article Title" className="rounded-full" />
              </div>
              <div className="w-[500px] mt-4">
                <Input
                  label="What's this article about?"
                  className="rounded-full"
                />
              </div>
              <div className="w-[500px] mt-4">
                <Input
                  label="Write your article (in markdown)"
                  className="rounded-xl h-[200px]"
                />
              </div>
              <div className="w-[500px] mt-[180px]">
                <Input label="Enter tags" className="rounded-full" />
              </div>
            </form>
            <Button
              className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 w-[200px] ml-[300px]"
              fullWidth
            >
              Publish Article
            </Button>
          </div>
          <div className="ml-11 my-[170px]">
            <img className="w-[380px]" src={newArticle} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WriteArticle;
