import React from "react";
import download from "../assets/download.png";
import quote from "../assets/quote.jpg";
import logoipsum from "../assets/logoipsum.jpg";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function RegisterPage() {
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
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <div>Email</div>
                  <Input size="lg" label="Your email" />
                  <div>Password</div>
                  <Input type="password" size="lg" label="Your password" />
                </div>
                <Button className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500" fullWidth>
                  Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                  Have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                  >
                    Sign in here
                  </a>
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
