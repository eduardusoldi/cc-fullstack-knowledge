import newArticle from "../assets/newArticle.jpg";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { json, Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "../helpers/toast";
import logoipsum from "../assets/logoipsum.jpg";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
function WriteArticle() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  let baseURL = "https://test.fourtrezz.info/fs";
  const postArticle = async (article: any) => {
    var dataArticle = JSON.stringify({
      "article": {
        "title": article.title,
        "description": article.description,
        "body": article.body,
        "tagList": [
          "kancilo",
          "kura-kurao"
        ]
      }
    })
    console.log({article})
    console.log(dataArticle)
    try {
      let { data } = await axios({
        method: "post",
        url: `${baseURL}/articles`,
        data: dataArticle,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Token ${localStorage.token}`
        },
      });
      await Toast.fire({
        icon: "success",
        title: "Success!",
        text: `Great your article is pubslished`,
      });
      navigate('/home')
    } catch (error: any) {
      let errorMsg = error.response.data.errors.body;
      console.log(errorMsg)
      await Toast.fire({
        icon: "error",
        title: "Oops!",
        html: `<div>${errorMsg}</div>`,
      });
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <div className=" flex justify-center container gap-[100px]">
          <div className="my-11">
            <span className="text-3xl font-bold">Write your new article</span>
            <form onSubmit={handleSubmit(postArticle)}>
              <div className="w-[500px] mt-11">
                <Input label="Article Title" className="rounded-full"
                {...register("title")}
                />
              </div>
              <div className="w-[500px] mt-4">
                <Input
                {...register("description")}
                  label="What's this article about?"
                  className="rounded-full"
                />
              </div>
              <div className="w-[500px] mt-4">
                <Input
                {...register("body")}
                  label="Write your article (in markdown)"
                  className="rounded-xl h-[200px]"
                />
              </div>
              <div className="w-[500px] mt-[180px]">
                <Input
                {...register("tagList")}
                label="Enter tags" className="rounded-full" />
              </div>
            <Button
              className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 w-[200px] ml-[300px]"
              fullWidth
              type="submit"
            >
              Publish Article
            </Button>
            </form>
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
