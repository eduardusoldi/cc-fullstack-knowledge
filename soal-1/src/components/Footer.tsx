import { Typography } from "@material-tailwind/react";
 
export default function SimpleFooter() {
  return (
    <footer className="mt-11 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center ">
      <Typography color="blue-gray" className="font-normal flex justify-center">
         Copyright 2022 | All Right Reserved
      </Typography>
    </footer>
  );
}