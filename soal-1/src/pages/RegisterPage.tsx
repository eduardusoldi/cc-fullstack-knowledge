
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
import axios from 'axios'

function RegisterPage() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate()
  let baseURL = 'https://test.fourtrezz.info/fs'
  const postRegister = async (user: Object) => {
    try {
      let { data } = await axios({
        method: 'POST',
        url: `${baseURL}/users`,
        data: {user},
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      localStorage.setItem('token', data.user.token)
      localStorage.setItem('username', data.user.username)
      localStorage.setItem('bio', data.user.bio)
      localStorage.setItem('image', data.user.image)
      localStorage.setItem('email', data.user.email)
      navigate('/home')
      await Toast.fire({
        icon: 'success',
        title: "Success!",
        text: `Welcome to the club!`
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
    <>
      <div className="flex mt-[200px] justify-center">
        <img className=" w-[200px] mb-9" src={logoipsum} />
      </div>
      <div className="flex justify-center">
        <div className=" flex justify-center container">
          <div className="mb-[200px] border p-7 py-14 rounded-lg">
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray" className="text-center">
               REGISTER
              </Typography>
              <form
              onSubmit={handleSubmit(postRegister)}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <div>Username</div>
                  <Input size="lg" label="Your username" {...register("Username")}/>
                  <div>Email</div>
                  <Input size="lg" label="Your email" {...register("Email")}/>
                  <div>Password</div>
                  <Input type="password" size="lg" label="Your password" {...register("Password")}/>
                </div>
                <Button type="submit" className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500" fullWidth>
                  Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                  Have an account?{" "}
                  <Link
                    to={'/login'}
                    className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                  >
                    Sign in here
                  </Link>
                </Typography>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
