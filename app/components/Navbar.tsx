import Image from "next/image";
import myImg from "@/public/myImg.jpg";
export default function Navbar() {
  return (
    <div className="navbar justify-between">
      {/* medium device drop down */}
      <div className="lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm md:menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 md:w-96"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Details</a>
            </li>
            <li>
              <a>Category</a>
            </li>
            <li>
              <a>My Favorites</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Login/SignUp</a>
            </li>
            {/* search field */}
            <div className="flex flex-col justify-between items-center gap-2">
              <input
                type="text"
                placeholder="Search Audio Book"
                className="input input-bordered w-full rounded-xl text-sm border focus:border-none focus:outline-orange-300 my-2"
              />

              <button className="btn bg-orange-500 text-white hover:bg-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                Search
              </button>
            </div>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-semibold">pti.</a>
      </div>

      {/* logo */}
      <div className="hidden lg:block">
        <a className="btn btn-ghost text-2xl font-bold">pti.</a>
      </div>

      <div className="form-control lg:flex flex-row items-center flex-1 gap-2 justify-center hidden">
        {/* search field */}
        <div className="flex items-center w-3/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 absolute ml-2 text-orange-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          {/* search input */}
          <input
            type="text"
            placeholder="Search Audio Book"
            className="input input-bordered w-full px-10 h-10 rounded-xl text-sm border-none focus:outline-orange-300"
          />
        </div>

        {/* dropdown button */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-white min-h-11 h-11 w-32 justify-between px-3"
          >
            <p className="uppercase">menu</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-orange-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Details</a>
            </li>
            <li>
              <a>Category</a>
            </li>
            <li>
              <a>My Favorites</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Login/SignUp</a>
            </li>
          </ul>
        </div>
      </div>
      {/* profile menu */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Image
              alt="Tailwind CSS Navbar component"
              src={myImg}
              height={50}
              width={50}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
