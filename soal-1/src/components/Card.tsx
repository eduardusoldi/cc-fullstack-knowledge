import {
  Card,
  Button,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Example() {
  return (
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
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="candice wu"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue">
              Name of User
            </Typography>
          </div>
          <Typography color="blue-gray">October 9, 2022</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-1 p-0">
        <Typography className="font-semibold text-black mb-3">
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
        <Typography>
          I found solution to all my design needs from Creative Tim. I use them
          as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!
        </Typography>
        <Typography className="text-blue-500 font-semibold mt-3 border-b-2 pb-3">
          Read more...
        </Typography>
        <div className="flex w-max gap-4 mt-3">
          <Button className="rounded-full" color="gray" variant="outlined">
            implementations
          </Button>
          <Button className="rounded-full" color="gray" variant="outlined">
            welcome
          </Button>
          <Button className="rounded-full" color="gray" variant="outlined">
            introduction
          </Button>
          <div className="ml-11">
            <Button
              className="rounded-xl flex items-center text-base justify-center w-[90px] h-[40px]"
              color="blue"
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
              42
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
