const MainMenu = () => {
  return (
    <nav className=" h-20 items-center px-4 flex border-b border-[#546384] justify-between">
      <div className=" ">
        <img className=" w-40" src="/logo.png" alt="Logo" />
      </div>
      <ul className="flex items-center gap-6 uppercase font-bold">
        <li>home</li>
        <li>about</li>
        <li>internship</li>
        <li>certification</li>
        <li>Seminars</li>
      </ul>
      <div className=" flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <div className="border-2 p-2 border-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="size-4 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
