/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Image from "next/image";

function ROIForm({
  roiData,
  selectedProduct,
  setSelectedProduct,
  monthlyOutput,
  setMonthlyOutput,
  register,
  errors,
  desiredOutput,
  setDesiredOutput,
  selectedOutput,
  setSelectedOutput,
}) {
  const { conferenceGrid, ContainerOutputs } = roiData;
  const [activeHover, setActiveHover] = useState(false);

  const products = conferenceGrid.map((product, index) => {
    const { bg, bgAct, iconAct, icon, title, context } = product;
    return (
      <li
        onMouseOver={() => setActiveHover(index)}
        onMouseOut={() => setActiveHover(null)}
        onClick={() => {
          setSelectedProduct(context);
          setDesiredOutput(ContainerOutputs[context]);
        }}
        key={index}
        className="min-w-xs max-w-xs flex flex-col justify-end"
      >
        <div
          className={`relative rounded-2xl border-2 border-${
            activeHover === index || selectedProduct === context
              ? "atgBlue"
              : "transparent"
          }`}
        >
          <Image
            src={
              activeHover === index || selectedProduct === context ? bgAct : bg
            }
            alt="Picture of the author"
            layout="fill"
            className="object-center object-cover pointer-events-none rounded-2xl"
          />
          <div className="relative z-10 flex flex-col items-center">
            <Image
              src={
                activeHover === index || selectedProduct === context
                  ? iconAct
                  : icon
              }
              alt="Picture of the author"
              width={85}
              height={85}
              className="h-8 w-auto sm:h-10"
            />
            <p
              className={`text-${
                activeHover === index || selectedProduct === context
                  ? "atgBlue"
                  : "white"
              } text-xs font-semibold tracking-tight pb-3 lg:pb-6`}
            >
              {title}
            </p>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="w-full lg:grid lg:grid-cols-2 ">
      <div className="sm:text-center lg:col-span-1 lg:text-left flex items-center flex-col justify-between">
        <ul className="w-full space-y-6 grid grid-cols-2 gap-x-6 gay-y-1 sm:gap-y-6 sm:space-y-0 lg:grid-cols-3 ">
          {products}
        </ul>
        {/* <h3 className="pt-4 lg:pt-6 text-xl text-gray-900 font-bold leading-2 tracking-wide pb-2">
          Production Hours Per Week:
        </h3>
        <div className="w-full py-4">
          <input
            className="w-full"
            type="range"
            min="5"
            max="80"
            value={monthlyOutput}
            onChange={(e) => setMonthlyOutput(e.target.value)}
          />
          <div className="flex flex-row justify-between font-medium">
            <span>5 Hours</span>
            <h4 className="text-lg">
              <span className="font-bold">{monthlyOutput} Hours</span>
            </h4>
            <span>80 Hours</span>
          </div>
        </div> */}
        <div className="w-full mt-2 grid grid-cols-1 gap-y-2 gap-x-4 lg:grid-cols-2">
          <div className="col-span-1 lg:col-span-1">
            <label
              htmlFor="employees"
              className="block text-sm font-medium text-gray-700"
            >
              Hourly Wage per Employee
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <h3>$</h3>
              </div>
              <input
                type="number"
                step="0.01"
                name="hourly"
                id="hourly"
                ref={register({
                  required: "Avg Hourly Wage is required.",
                })}
                className={`shadow-sm p-2 pl-4 block w-full sm:text-sm border-2 ${
                  errors.hourly ? "border-red-600" : "border-blue-200"
                } focus:outline-none focus:border-atgBlue rounded-xl`}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className={`${
                    errors.hourly ? "visible" : "hidden"
                  } h-5 w-5 text-red-500`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {errors.hourly && (
              <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
                {errors.hourly.message}
              </p>
            )}
          </div>
          <div className="col-span-1 lg:col-span-1">
            <label
              htmlFor="employees"
              className="block text-sm font-medium text-gray-700"
            >
              Sale Price per Unit
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <h3>$</h3>
              </div>
              <input
                type="number"
                step="0.01"
                name="price"
                id="price"
                ref={register({
                  required: "Sale Price is required.",
                })}
                className={`shadow-sm p-2 pl-4 block w-full sm:text-sm border-2 ${
                  errors.price ? "border-red-600" : "border-blue-200"
                } focus:outline-none focus:border-atgBlue rounded-xl`}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className={`${
                    errors.price ? "visible" : "hidden"
                  } h-5 w-5 text-red-500`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {errors.price && (
              <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
                {errors.price.message}
              </p>
            )}
          </div>
          <div className="col-span-1 lg:col-span-1">
            <label
              htmlFor="employees"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                name="email"
                id="email"
                ref={register({
                  required: "Email is required.",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid Email Address",
                  },
                })}
                className={`shadow-sm p-2 block w-full sm:text-sm border-2 ${
                  errors.email ? "border-red-600" : "border-blue-200"
                } focus:outline-none focus:border-atgBlue rounded-xl`}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className={`${
                    errors.email ? "visible" : "hidden"
                  } h-5 w-5 text-red-500`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {errors.email && (
              <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="sm:text-center lg:col-span-1 lg:text-left flex items-center flex-col justify-start">
        <div className=" w-full lg:w-1/2">
          <h3 className=" pt-2 lg:pt-0 text-xl text-gray-900 font-bold leading-2 tracking-wide text-center mb-4">
            Desired Output
          </h3>
          <div className="my-2 w-5/6  mx-auto flex flex-col gap-4">
            {desiredOutput.map((entry, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedOutput(entry)}
                className={`w-full inline-flex justify-center py-3 px-8  border-2  rounded-3xl shadow-sm ${
                  selectedOutput === entry
                    ? "border-atgBlue bg-white  text-atgBlue "
                    : "border-transparent hover:border-atgBlue bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-white hover:text-atgBlue"
                } text-base font-medium focus:outline-none`}
              >
                {entry}k units/month
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ROIForm;
