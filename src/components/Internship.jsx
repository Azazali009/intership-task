import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Internship = () => {
  return (
    <div className=" max-w-6xl mx-auto py-12 mt-8">
      <h2 className=" text-4xl text-center mb-7 text-gray-700 font-bold">
        Perfect Internship&apos;s For You
      </h2>
      <div className=" mt-12 grid grid-cols-3 gap-y-8 gap-x-4">
        <Card className=" rounded-2xl overflow-hidden shadow-xl hover:scale-105 duration-300">
          <CardHeader className=" relative bg-cardbg bg-blend-overlay grid items-center grid-cols-2 justify-between">
            <div className=" absolute top-0 left-0 w-full h-full  bg-[#2558A1]/90"></div>
            <div>
              <CardTitle className=" border-b border-white pb-3 mb-2 tracking-wider text-white z-10 relative font-bold">
                HTML/CSS <br />
                <span>JAVASCRIPT</span>
              </CardTitle>
              <CardDescription className=" relative z-10 text-white">
                Eztich Institue
              </CardDescription>
            </div>
            <div className=" relative z-10 justify-self-end">
              <img src="/web-design.png" className=" w-20" alt="" />
            </div>
          </CardHeader>
          <CardContent className=" mt-5 space-y-4">
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
          </CardContent>
          <CardFooter className=" flex justify-center">
            <button className=" bg-sky-600 font-semibold px-6 py-2 rounded-sm text-white">
              Load More
            </button>
          </CardFooter>
        </Card>
        <Card className=" rounded-2xl overflow-hidden shadow-xl hover:scale-105 duration-300">
          <CardHeader className=" relative bg-cardbg bg-blend-overlay grid items-center grid-cols-2 justify-between">
            <div className=" absolute top-0 left-0 w-full h-full  bg-[#2558A1]/90"></div>
            <div>
              <CardTitle className=" border-b border-white pb-3 mb-2 tracking-wider text-white z-10 relative font-bold">
                GRAPHIC <br />
                <span>DESIGNING</span>
              </CardTitle>
              <CardDescription className=" relative z-10 text-white">
                Eztich Institue
              </CardDescription>
            </div>
            <div className=" relative z-10 justify-self-end">
              <img src="/graphic.png" className=" w-20" alt="" />
            </div>
          </CardHeader>
          <CardContent className=" mt-5 space-y-4">
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
          </CardContent>
          <CardFooter className=" flex justify-center">
            <button className=" bg-sky-600 font-semibold px-6 py-2 rounded-sm text-white">
              Load More
            </button>
          </CardFooter>
        </Card>
        <Card className=" rounded-2xl overflow-hidden shadow-xl hover:scale-105 duration-300">
          <CardHeader className=" relative bg-cardbg bg-blend-overlay grid items-center grid-cols-2 justify-between">
            <div className=" absolute top-0 left-0 w-full h-full  bg-[#2558A1]/90"></div>
            <div>
              <CardTitle className=" border-b border-white pb-3 mb-2 tracking-wider text-white z-10 relative font-bold">
                DIGITAL <br />
                <span>MARKETING</span>
              </CardTitle>
              <CardDescription className=" relative z-10 text-white">
                Eztich Institue
              </CardDescription>
            </div>
            <div className=" relative z-10 justify-self-end">
              <img src="/digital-marketing.png" className=" w-20" alt="" />
            </div>
          </CardHeader>
          <CardContent className=" mt-5 space-y-4">
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
          </CardContent>
          <CardFooter className=" flex justify-center">
            <button className=" bg-sky-600 font-semibold px-6 py-2 rounded-sm text-white">
              Load More
            </button>
          </CardFooter>
        </Card>
        <Card className=" rounded-2xl overflow-hidden shadow-xl hover:scale-105 duration-300">
          <CardHeader className=" relative bg-cardbg bg-blend-overlay grid items-center grid-cols-2 justify-between">
            <div className=" absolute top-0 left-0 w-full h-full  bg-[#2558A1]/90"></div>
            <div>
              <CardTitle className=" border-b border-white pb-3 mb-2 tracking-wider text-white z-10 relative font-bold">
                DIGITAL <br />
                <span>MARKETING</span>
              </CardTitle>
              <CardDescription className=" relative z-10 text-white">
                Eztich Institue
              </CardDescription>
            </div>
            <div className=" relative z-10 justify-self-end">
              <img src="/digital-marketing.png" className=" w-20" alt="" />
            </div>
          </CardHeader>
          <CardContent className=" mt-5 space-y-4">
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
          </CardContent>
          <CardFooter className=" flex justify-center">
            <button className=" bg-sky-600 font-semibold px-6 py-2 rounded-sm text-white">
              Load More
            </button>
          </CardFooter>
        </Card>
        <Card className=" rounded-2xl overflow-hidden shadow-xl hover:scale-105 duration-300">
          <CardHeader className=" relative bg-cardbg bg-blend-overlay grid items-center grid-cols-2 justify-between">
            <div className=" absolute top-0 left-0 w-full h-full  bg-[#2558A1]/90"></div>
            <div>
              <CardTitle className=" border-b border-white pb-3 mb-2 tracking-wider text-white z-10 relative font-bold">
                DIGITAL <br />
                <span>MARKETING</span>
              </CardTitle>
              <CardDescription className=" relative z-10 text-white">
                Eztich Institue
              </CardDescription>
            </div>
            <div className=" relative z-10 justify-self-end">
              <img src="/digital-marketing.png" className=" w-20" alt="" />
            </div>
          </CardHeader>
          <CardContent className=" mt-5 space-y-4">
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
          </CardContent>
          <CardFooter className=" flex justify-center">
            <button className=" bg-sky-600 font-semibold px-6 py-2 rounded-sm text-white">
              Load More
            </button>
          </CardFooter>
        </Card>
        <Card className=" rounded-2xl overflow-hidden shadow-xl hover:scale-105 duration-300">
          <CardHeader className=" relative bg-cardbg bg-blend-overlay grid items-center grid-cols-2 justify-between">
            <div className=" absolute top-0 left-0 w-full h-full  bg-[#2558A1]/90"></div>
            <div>
              <CardTitle className=" border-b border-white pb-3 mb-2 tracking-wider text-white z-10 relative font-bold">
                DIGITAL <br />
                <span>MARKETING</span>
              </CardTitle>
              <CardDescription className=" relative z-10 text-white">
                Eztich Institue
              </CardDescription>
            </div>
            <div className=" relative z-10 justify-self-end">
              <img src="/digital-marketing.png" className=" w-20" alt="" />
            </div>
          </CardHeader>
          <CardContent className=" mt-5 space-y-4">
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-blue-200 w-10 aspect-square rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-blue-800"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className=" font-medium text-stone-700">
                Employment -{" "}
                <span className=" bg-gray-100 font-normal px-2 py-1.5 rounded-md">
                  Hybrid
                </span>
              </h3>
            </div>
          </CardContent>
          <CardFooter className=" flex justify-center">
            <button className=" bg-sky-600 font-semibold px-6 py-2 rounded-sm text-white">
              Load More
            </button>
          </CardFooter>
        </Card>
      </div>
      <div className=" mt-10 flex justify-center">
        <button className=" bg-sky-600 font-semibold px-6 py-2 rounded-sm text-white">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Internship;
