import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecomendedCourse = () => {
  return (
    <div className=" max-w-6xl py-12 mx-auto">
      <div>
        <h2 className=" text-4xl text-center mb-7 text-gray-700 font-bold">
          Limited-Time Summer Course Bundles!
        </h2>
        <p className=" -mt-3 text-center">
          Note : All these bundles have recorded luctures
        </p>
      </div>

      <div className=" mt-8 grid grid-cols-2 gap-x-5">
        <Card className=" hover:shadow-lg">
          <CardHeader className=" text-center text-white bg-blue-500">
            <CardTitle>Web development courses with project</CardTitle>
            <CardDescription className=" text-inherit text-center mt-2">
              4 courses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex border-b border-gray-300 items-center gap-3 py-4">
              <img src="/js.jpg" className=" w-24" alt="js course" />
              <h2 className=" text-stone-600 text-lg font-medium">
                Free novice to exepert, complete javascriot course 2024
              </h2>
              <p className=" text-nowrap font-semibold text-gray-500">
                PKR 2,000
              </p>
            </div>
            <div className="flex border-b border-gray-300 items-center gap-3 py-4">
              <img src="/js.jpg" className=" w-24" alt="js course" />
              <h2 className=" text-stone-600 text-lg font-medium">
                Free novice to exepert, complete javascriot course 2024
              </h2>
              <p className=" text-nowrap font-semibold text-gray-500">
                PKR 2,000
              </p>
            </div>
            <div className="flex border-b border-gray-300 items-center gap-3 py-4">
              <img src="/js.jpg" className=" w-24" alt="js course" />
              <h2 className=" text-stone-600 text-lg font-medium">
                Free novice to exepert, complete javascriot course 2024
              </h2>
              <p className=" text-nowrap font-semibold text-gray-500">
                PKR 2,000
              </p>
            </div>
          </CardContent>
          <CardFooter className=" flex justify-end mt-12 font-semibold">
            <span className=" font-semibold text-stone-600 ">PKR 10,000</span>
            <del className=" text-gray-500">PKR 33,000</del>
          </CardFooter>
        </Card>
        <Card className=" hover:shadow-lg">
          <CardHeader className=" text-center text-white bg-blue-500">
            <CardTitle>Web development courses with project</CardTitle>
            <CardDescription className=" text-inherit text-center mt-2">
              4 courses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex border-b border-gray-300 items-center gap-3 py-4">
              <img src="/js.jpg" className=" w-24" alt="js course" />
              <h2 className=" text-stone-600 text-lg font-medium">
                Free novice to exepert, complete javascriot course 2024
              </h2>
              <p className=" text-nowrap font-semibold text-gray-500">
                PKR 2,000
              </p>
            </div>
            <div className="flex border-b border-gray-300 items-center gap-3 py-4">
              <img src="/js.jpg" className=" w-24" alt="js course" />
              <h2 className=" text-stone-600 text-lg font-medium">
                Free novice to exepert, complete javascriot course 2024
              </h2>
              <p className=" text-nowrap font-semibold text-gray-500">
                PKR 2,000
              </p>
            </div>
            <div className="flex border-b border-gray-300 items-center gap-3 py-4">
              <img src="/js.jpg" className=" w-24" alt="js course" />
              <h2 className=" text-stone-600 text-lg font-medium">
                Free novice to exepert, complete javascriot course 2024
              </h2>
              <p className=" text-nowrap font-semibold text-gray-500">
                PKR 2,000
              </p>
            </div>
          </CardContent>
          <CardFooter className=" flex justify-end mt-12 font-semibold">
            <span className=" font-semibold text-stone-600 ">PKR 10,000</span>
            <del className=" text-gray-500">PKR 33,000</del>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RecomendedCourse;
