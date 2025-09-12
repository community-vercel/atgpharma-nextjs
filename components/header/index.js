import React, { useState, useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// CONTEXT
import { useCookies } from "react-cookie";
import { RoboCAPContext } from "../../context";

// COOKIES

// HOOKS
import useRobotContext from "../../hooks/useRobotContext";

function Header({ hide }) {
  const wrapperRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [state, dispatch] = useContext(RoboCAPContext);
  const [cookies, setCookie, removeCookie] = useCookies(["machines"]);
  const [ping, setPing] = useState(false);
  const [bugState, setBugState] = useState(true);
  useOutsideAlerter(wrapperRef);
  const { jumpToReview } = useRobotContext();
  useEffect(() => {
    if (cookies.machines) {
      setPing(true);
    }
  }, [cookies]);
  const path = useRouter().route;
  const exactPath = path?.split("/")[1];
  function useOutsideAlerter(ref) {
    function handleClickOutside(event) {
      if (showMenu) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowMenu(false);
        }
      }
    }
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [handleClickOutside]);
  }

  return (
    <div
      className={`${hide && "hidden"} bg-navBar sticky shadow-lg  top-0 z-50 `}
    >
      <div className="flex justify-between items-center px-6 xl:px-0 py-5  max-w-7xl mx-auto">
        {/* <button
          onClick={() => jumpToReview(cookies.machines)}
          className="text-base md:hidden font-light text-white hover:text-gray-500"
        >
          <Image
            src="/RoboCAP.svg"
            alt="Picture of the author"
            width={50}
            height={50}
            className="h-8 w-auto sm:h-11"
          />
          <span
            className={`${
              ping ? "visible" : "hidden "
            } absolute object-right-top transform -translate-x-3  text-center`}
          >
            <span className="animate-pulse inline-flex rounded-full h-4 w-4 bg-red-600" />
            <span className="absolute bottom-1.5 left-1.5 text-xs">
              {cookies.machines?.length}
            </span>
          </span>
        </button> */}
        <div className="-mr-2 -my-2 lg:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            type="button"
            className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-start lg:w-0 lg:flex-1 ">
          <a href="https://atgpharma.com/" className="flex">
            <span className="sr-only">ATG Pharma Inc</span>
            <Image
              src="/Logo_White.svg"
              alt="Picture of the author"
              width={100}
              height={40}
              className="h-8 w-auto sm:h-10"
            />
          </a>
        </div>
        <div className="flex justify-center lg:hidden">
          <a
            href="https://atgpharma.com/request-a-quote/"
            className="rounded-full flex items-center justify-center px-5 py-2 border-2 text-sm border-transparent text-atgBlue bg-white hover:bg-gray-200"
          >
            Request Quote
          </a>
        </div>
        {/* <div className="-mr-2 -my-2 lg:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            type="button"
            className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div> */}
        <nav className="hidden lg:flex space-x-8  items-center">
          <a
            href="https://atgpharma.com/products/"
            className={`${
              exactPath === "products" ? "font-semibold" : "font-light"
            }  text-base text-white hover:text-gray-500`}
          >
            Products
          </a>
          <a
            href="https://atgpharma.com/about/"
            className={`${
              exactPath === "about" ? "font-semibold" : "font-light"
            }  text-base text-white hover:text-gray-500`}
          >
            About
          </a>
          <a
            href="https://atgpharma.com/blog/"
            className={`${
              exactPath === "blog" ? "font-semibold" : "font-light"
            }  text-base text-white hover:text-gray-500`}
          >
            Blog
          </a>
          <a
            href="https://atgpharma.com/request-a-quote/"
            className={`${
              exactPath === "contact" ? "font-semibold" : "font-light"
            }  text-base text-white hover:text-gray-500`}
          >
            Contact
          </a>
          <a
            href="https://atgpharma.com/support/"
            className={`${
              exactPath === "support" ? "font-semibold" : "font-light"
            }  text-base text-white hover:text-gray-500`}
          >
            Support
          </a>
          <button
            onClick={() => jumpToReview(cookies.machines)}
            className={`${
              exactPath === "build" ? "font-semibold" : "font-light"
            }  text-base text-white hover:text-gray-500`}
          >
            Build and Price
          </button>
          {/* <button
            onClick={() => jumpToReview(cookies.machines)}
            className="text-base font-light text-white hover:text-gray-500"
          >
            <Image
              src="/RoboCAP.svg"
              alt="Picture of the author"
              width={50}
              height={50}
              className="h-8 w-auto sm:h-11"
            />
            <span
              className={`${
                ping ? "visible" : "hidden "
              } absolute object-right-top transform -translate-x-3 text-center`}
            >
              <span className="animate-pulse inline-flex rounded-full h-4 w-4 bg-red-600" />
              <span className="absolute bottom-1.5 left-1.5 text-xs">
                {cookies.machines?.length}
              </span>
            </span>
          </button> */}
          <div className="flex justify-center">
            <a
              href="https://atgpharma.com/request-a-quote/"
              className="rounded-full flex items-center justify-center px-5 py-2 border-2 text-sm border-transparent text-atgBlue bg-white hover:bg-gray-200"
            >
              Request Quote
            </a>
          </div>
        </nav>
      </div>
      {/*
  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
      <div
        ref={wrapperRef}
        className={`${
          showMenu ? "visible" : "hidden"
        } absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden`}
      >
        <div className="rounded-lg shadow-lg md:w-1/2 md:transform md:translate-x-full ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <Image
                  src="/Logo_Coloured.svg"
                  alt="Picture of the author"
                  width={100}
                  height={40}
                  className="h-8 w-auto sm:h-10"
                />
              </div>
              <div className="-mr-2">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid grid-cols-1 gap-7">
                <a
                  href="https://atgpharma.com/products/"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white">
                    <img src="/Products_Home.svg" />
                  </div>
                  <div className="ml-4 text-base font-medium text-atgBlue">
                    Products
                  </div>
                </a>

                <a
                  href="https://atgpharma.com/about/"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white">
                    <img src="/About_Home.svg" />
                  </div>
                  <div className="ml-4 text-base font-medium text-atgBlue">
                    About
                  </div>
                </a>

                <a
                  href="https://atgpharma.com/blog/"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md  text-white">
                    <img src="/Blog_Home.svg" />
                  </div>
                  <div className="ml-4 text-base font-medium text-atgBlue">
                    Blog
                  </div>
                </a>

                <a
                  href="https://atgpharma.com/request-a-quote/"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md  text-white">
                    <img src="/Contact_Home.svg" />
                  </div>
                  <div className="ml-4 text-base font-medium text-atgBlue">
                    Contact
                  </div>
                </a>

                <a
                  href="/https://atgpharma.com/support/"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white">
                    <img src="/Support_Home.svg" />
                  </div>
                  <div className="ml-4 text-base font-medium text-atgBlue">
                    Support
                  </div>
                </a>

                <a
                  href="/build"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white">
                    <img src="/Buil_Price_Home.svg" />
                  </div>
                  <div className="ml-4 text-base font-medium text-atgBlue">
                    Build & Price
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
