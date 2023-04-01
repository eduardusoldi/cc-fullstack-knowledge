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

function SettingPage() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  let baseURL = "https://test.fourtrezz.info/fs";
  const postArticle = async (user: Object) => {
    try {
      let response = await axios({
        method: "get",
        url: `${baseURL}/user`,
        data: user,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      await Toast.fire({
        icon: "success",
        title: "Success!",
        text: `Welcome to the club, ${response}`,
      });
    } catch (error: any) {
      let errorMsg = error.response.data;
      await Toast.fire({
        icon: "error",
        title: "Oops!",
        html: `<div>${errorMsg}</div>`,
      });
    }
  };

  return (
    <>
      <div className="flex justify-center mt-[200px]">
        <div className=" flex justify-center container">
          <div className="mb-[200px] py-14 rounded-lg">
            <Card color="transparent" shadow={false}>
              <Typography
                variant="h4"
                color="blue-gray"
                className="text-center"
              >
                Setting your profile
              </Typography>
              <form onSubmit={handleSubmit(postArticle)}>
                <div className="w-[500px] mt-11">
                  <Input label="Your profile picture.." className="rounded-full h-[70px]" {...register("image")}/>
                </div>
                <div className="w-[500px] mt-[60px]">
                  <Input
                    label="Your name.."
                    className="rounded-full h-[70px]"
                    {...register("name")}
                  />
                </div>
                <div className="w-[500px] mt-[60px]">
                  <Input
                    label="Your bio.."
                    className="rounded-xl h-[200px]"
                    {...register("bio")}
                  />
                </div>
                <div className="w-[500px] mt-[180px]">
                  <Input label="Your email.." className="rounded-full h-[70px]"
                  {...register("email")}/>
                </div>
                <div className="w-[500px] mt-[60px]">
                  <Input label="Your password" className="rounded-full h-[70px]" type={'password'} {...register("password")} />
                </div>
                <Button
                type="submit"
              className="mt-[70px] bg-gradient-to-r from-cyan-500 to-blue-500 w-[200px] ml-[300px]"
              fullWidth
            >
              Update Settings
            </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingPage;
