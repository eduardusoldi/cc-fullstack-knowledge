import download from '../assets/download.png'
import quote from '../assets/quote.jpg'
import logoipsum from '../assets/logoipsum.jpg'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { json, Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "../helpers/toast";
import axios from 'axios';

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate()
  let baseURL = 'https://test.fourtrezz.info/fs'

  const postLogin = async (user: Object) => {
    try {
        let {data } = await axios({
          method: 'POST',
          url: `${baseURL}/users/login`,
          data: {user},
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
      localStorage.setItem('token', data.user.token)
      localStorage.setItem('username', data.user.username)
      localStorage.setItem('bio', data.user.bio)
      localStorage.setItem('email', data.user.email)
      localStorage.setItem('image', data.user.image)
      navigate('/home')
      await Toast.fire({
        icon: 'success',
        title: "Success!",
        text: `Welcome back!`
      })
    } catch (error: any) {
      let errorMsg = error.response.data.errors.body
      await Toast.fire({
        icon: 'error',
        title: 'Oops!',
        html: `<div>${errorMsg}</div>`
      })
    }
  };

  return (
    <div className="flex justify-center">
      <div className=" flex justify-between container ml-[200px]">
        <div className="my-[200px]">
          <Card color="transparent" shadow={false}>
            <img
              className="w-[150px] mb-9"
              src={logoipsum}
            />
            <Typography variant="h4" color="blue-gray">
              LOGIN
            </Typography>
            <form
            onSubmit={handleSubmit(postLogin)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <div>Email</div>
                <Input size="lg" label="Your email"
                {...register('email')}
                />
                <div>Password</div>
                <Input
                {...register('password')}
                type="password" size="lg" label="Your password" />
              </div>
              <Button className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500" type='submit' fullWidth>
                Login
              </Button>
              <Typography color="gray" className="mt-4 text-end font-normal">
                No have account?{" "}
                <Link
                  to={'/register'}
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  Sign up here
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
        <div className="bg-[#f8fbff] max-w-2xl container">
          <div className="mx-[130px]">
            <Card color="transparent" shadow={false}>
              <img
                className="w-[80px] mb-9 mt-[200px]"
                src={quote}
              />
              <Typography color="blue-gray">
                <div className="text-xl mb-7">
                  Discover new experience with sharing anything your knowledge
                  and achieve your goals with strong mind with us!
                </div>
              </Typography>
              <Typography variant="h4" color="blue-gray">
                <div className="text-3xl">
                Join many other users to share knowledge
                </div>
              </Typography>
              <div>
                <img
                className='mt-7'
                src={download}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
