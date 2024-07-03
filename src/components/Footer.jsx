import React from "react";

const Footer = () => {
  return (
    <div className=" py-8 px-4 bg-[#0E2B70]">
      <h2 className=" text-center text-4xl text-white font-bold">
        It’s time to <span className=" text-blue-600">start</span> investing in{" "}
        <br />
        yourself
      </h2>
      <div className=" mt-10">
        <img src="/footer.webp" alt="" />
      </div>

      <div className=" max-w-6xl gap-x-4 text-white mt-7 py-4 mx-auto grid grid-cols-4">
        <div>
          <h2 className=" text-xl mb-5 uppercase font-bold">About</h2>
          <p className=" text-sm">
            Ezitech Institute provides a platform for newcomers to launch their
            IT and freelancing careers. Our emphasis on practical information
            technology courses that are career and work oriented makes us the
            top computer institute in Rawalpindi, Islamabad, Pakistan.
          </p>
        </div>
        <div>
          <h2 className=" text-xl tracking-wider mb-5 uppercase font-bold">
            popular courses
          </h2>
          <div className=" flex mb-3 gap-4 items-center">
            <img className=" w-14 aspect-square" src="/course1.webp" alt="" />
            <div>
              <h3 className=" leading-5 tracking-wide text-[15px] font-bold line-clamp-2">
                Online Arbitrage Mastermind 2.0 [Resell Products from Home]
              </h3>
              <span className=" font-light text-gray-400">By Hussain ali</span>
            </div>
          </div>
          <div className=" flex gap-4 items-center">
            <img className=" w-14 aspect-square" src="/course2.webp" alt="" />
            <div>
              <h3 className=" leading-5 tracking-wide text-[15px] font-bold line-clamp-2">
                The complete bootcamp 2024 node.js course
              </h3>
              <span className=" font-light text-gray-400">By Hussain ali</span>
            </div>
          </div>
        </div>
        <div className="  justify-self-center">
          <h2 className="  text-xl tracking-wider mb-5 uppercase font-bold">
            Pages
          </h2>
          <ul className=" list-inside list-disc uppercase space-y-4 text-sm font-light">
            <li>Blog</li>
            <li>ezicoding</li>
            <li>internship</li>
            <li>our services</li>
          </ul>
        </div>
        <div className="  space-y-6 justify-self-center">
          <h2 className=" text-xl tracking-wider mb-5 uppercase font-bold">
            contact
          </h2>
          <div className=" flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7 text-blue-700"
            >
              <path
                fill-rule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clip-rule="evenodd"
              />
            </svg>
            <p className=" tracking-wider text-sm font-light">
              Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab
              46000
            </p>
          </div>
          <div className=" flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-blue-700"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <p className=" tracking-wider text-sm font-light">+923455555396</p>
          </div>
          <div className=" flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-blue-700"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>

            <p className=" tracking-wider text-sm font-light">
              info@ezitech.org
            </p>
          </div>
        </div>
      </div>

      <div className=" text-white mt-28 text-center">
        <p>
          Copyright © 2024 Ezitech Institute | Design & Develop by{" "}
          <span className=" underline cursor-pointer hover:no-underline">
            Eziline Software House
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
