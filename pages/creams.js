import { useState, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import Footer from "../components/footer";
import { useForm } from "react-hook-form";

//COMPONENTES
import Header from "../components/header";

const INPUTS = [
  {
    label: "First Name",
    type: "name",
    register: "firstName",
  },
  {
    label: "Last Name",
    type: "name",
    register: "lastName",
  },
  {
    label: "Email Address",
    type: "email",
    register: "email",
  },
  {
    label: "Phone Number",
    type: "number",
    register: "number",
  },
  {
    label: "Company Name",
    type: "company",
    register: "company",
  },
];
export default function Creams() {
  const [isLoading, setIsLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { register, handleSubmit, errors, setValue } = useForm();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const contactSubmit = async (data) => {
    setIsLoading(true);
    data.helpRequired = "Interested in Creams Filling";
    data.interest = "Interested in Creams Filling";
    try {
      const res = await fetch("./api/contact", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        router.push("/thankyou");
      } else {
        console.log("wrong email");
      }
      setIsLoading(false);
    } catch (err) {}
  };
  return (
    <div className="md:max-w-sm md:mx-auto">
      <Header hide={scrollPosition < 1028} />
      <div className="h-iphone relative">
        <Image
          src="/creams/hero.png"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="relative px-8 h-full flex flex-col justify-between">
          <div>
            <a href="/">
              <img
                src="/Logo_Coloured.svg"
                alt="Picture of the author"
                className="w-28 h-20"
              />
            </a>
            <div className="mt-8">
              <h1 className="text-atgBlue text-5xl font-semibold tracking-tight">
                Fill creams & balms without the headache.
              </h1>
              <p className="my-2 font-medium tracking-tighter">
                <span className="text-atgBlue">The RoboCAP 500 </span>fills
                cosmetic creams and balms at high speed and precision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center w-full pb-8">
            <div />
            <a
              href="/build"
              className="bg-atgBlue text-white w-4/5  ml-auto text-center py-3 text-lg"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 items-center w-full py-2">
          <div />
          <p className="mt-2 font-semibold text-sm">Watch our 2 minute video</p>
        </div>
        <div className="mx-6 border border-gray-100 rounded-lg">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=o7PctKnDQvM"
            controls
            width="100%"
            height="100%"
            loop
            muted
          />
        </div>
      </div>

      <div className="px-6">
        <div className="mt-8">
          <h1 className="text-atgBlue text-5xl font-semibold tracking-tight">
            Set it
            <span className="block">& forget it.</span>
          </h1>
          <p className="my-2 font-medium tracking-tighter w-1/2">
            Fill from start to finish.{" "}
            <span className="block">1 operator setup and go.</span>
          </p>
        </div>
      </div>
      <img src="/creams/options.png" alt="Picture of the author" />
      <div className="w-full grid grid-cols-2 items-center px-6 -mt-12">
        <div />
        <a
          href="/build"
          className="bg-atgBlue w-4/5 ml-auto text-white text-center py-3"
        >
          Get Quote
        </a>
      </div>
      <img src="/creams/review.png" alt="Picture of the author" />
      <div className="w-full grid grid-cols-2 items-center px-6 -mt-16">
        <a
          href="/build"
          className="bg-atgBlue w-4/5 mr-auto text-white text-center py-3"
        >
          Get Quote
        </a>
      </div>
      <div className="px-6">
        <div className="mt-8">
          <h1 className="text-atgBlue text-5xl font-semibold tracking-tight">
            Get in
            <span className="block">touch</span>
          </h1>
          <p className="my-2 font-medium tracking-tighter w-1/2">
            We are excited to hear from you
          </p>
        </div>

        <form
          onSubmit={handleSubmit(contactSubmit)}
          className="space-y-6 mb-12"
        >
          {INPUTS.map((entry, i) => (
            <div key={i}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {entry.label}
              </label>
              {errors.name && (
                <p className="text-red-600 text-xs font-bold animate-pulse">
                  A {entry.label} is required.
                </p>
              )}
              <div className="mt-1">
                <input
                  type={entry.type}
                  name={entry.register}
                  {...register(entry.register, { required: true })}
                  onChange={(e) => setValue(entry.register, e.target.value)}
                  className=" px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder={`Enter Your ${entry.label}`}
                />
              </div>
            </div>
          ))}
          <div className="w-full px-6 mb-16">
            {!isLoading ? (
              <button
                type="submit"
                className="w-full  flex items-center justify-center px-10 py-3 md:py-4 border-2 border-transparent hover:border-atgBlue shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-md font-medium text-white hover:text-atgBlue md:px-14"
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                className="w-full  flex items-center justify-center px-10 py-3 md:py-4 border-2 border-transparent  shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue text-md font-medium text-white md:px-14"
                disabled
              >
                <svg
                  className="animate-spin h-8 w-8 text-white self-center mr-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  enableBackground="new 0 0 40 40"
                  xml="preserve"
                >
                  <path
                    opacity="0.2"
                    d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                  />
                  <path d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z" />
                </svg>
                Processing
              </button>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
