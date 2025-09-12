import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

function newsLetter() {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, SetIsSubmitted] = useState(false);
  const [error, SetError] = useState(null);

  const subscribe = async (data) => {
    setIsLoading(true);
    SetError(null);
    try {
      const res = await fetch("./api/subscribe", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(res.status);
      if (res.status === 200) {
        SetIsSubmitted(true);
      } else {
        SetError("Already Subscribed");
      }
      setIsLoading(false);
    } catch (err) {}
    console.log(error);
  };

  return (
    <div className="relative py-12">
      <Image
        src="/About/Email.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className={`${
              submitted ? "hidden" : "visible "
            } text-3xl font-extrabold tracking-tight text-atgBlue sm:text-4xl" id="newsletter-headline`}
          >
            <span className="block">Stay up to Date With Our Latest</span>
            <span className="block pt-1">
              Product Launches and Promotions:{" "}
            </span>
          </h2>
          <p
            className={`${
              submitted ? " " : "hidden "
            } text-3xl text-center font-extrabold tracking-tight text-atgBlue sm:text-4xl" id="newsletter-headline`}
          >
            <span className="block">Subscribed!</span>
          </p>
          <img
            src="/build/Check Icon-145.svg"
            alt="Picture of the author"
            className={`${submitted ? " " : "hidden"} h-40 w-auto mx-auto`}
          />
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form onSubmit={handleSubmit(subscribe)} className="sm:flex">
            <label htmlFor="emailAddress" className="sr-only">
              Email address
            </label>
            <div className="w-full md:w-2/3">
              <input
                ref={register({ required: "An Email is required" })}
                name="emailAddress"
                type="email"
                autoComplete="email"
                className={`w-full px-5 py-3 mb-5 lg:mb-0 border-2  ${
                  errors.emailAddress ? "border-red-600" : "border-blue-200"
                } placeholder-gray-500 focus:outline-none focus:border-atgBlue sm:max-w-xs rounded-full`}
                placeholder="Enter your email"
              />
              {errors.emailAddress && (
                <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
                  {errors.emailAddress.message}
                </p>
              )}
              {error && (
                <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
                  {error}
                </p>
              )}
            </div>
            <div className="md:w-auto w-1/2 mx-auto mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              {!isLoading ? (
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 md:px-6 py-3 border-2 border-transparent rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue text-md font-medium text-white"
                >
                  SUBSCRIBE
                </button>
              ) : (
                <button
                  type="button"
                  className="flex items-center justify-center  px-5 md:px-6 py-3  border-2 border-transparent rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue text-md font-medium text-white "
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
          <p className="mt-3 text-sm px-2 text-atgBlue">
            We care about the protection of your data. Read our
            <a
              href="/privacy"
              className="pl-2 text-atgBlue font-medium underline"
            >
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default newsLetter;
