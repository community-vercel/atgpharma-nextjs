/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-syntax */
/* eslint-disable operator-linebreak */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { useForm } from "react-hook-form";
import Autocomplete from "react-google-autocomplete";

// COMPONENTS
import PageContainer from "../pageContainer";

const UnderRevision = ({ pageOrder, setPageOrder }) => {
  const { register, setValue } = useForm();
  return (
    <PageContainer>
      <div className="px-8 xl:px-0 max-w-7xl mx-auto my-20">
        <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center">
          <span className="block xl:inline">Shipping Address</span>
        </h2>
        <p className="text-center py-4 max-w-5xl mx-auto text-base text-gray-600">
          To avoid delays and ensure accurate tracking of shipment. Please
          provide the shipping address where the equipment will reside.
          <span class="block">We will be in touch shortly.</span>
        </p>
        <div className="bg-white overflow-hidden shadow border border-gray-50 rounded-lg my-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 divide-x divide-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-3 gap-3 pt-0 px-4 pb-5 sm:px-6 sm:pb-6">
              <div className="col-span-6 sm:col-span-3">
                <h3 className="font-semibold text-gray-900 text-xl lg:text-xl ">
                  1. Account Breakdown:
                </h3>
              </div>
              <div className="col-span-6 sm:col-span-1">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <input
                  type="text"
                  ref={register()}
                  name="contact_name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-1">
                <label
                  htmlFor="email_address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="text"
                  ref={register()}
                  name="email"
                  autoComplete="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-1">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  ref={register()}
                  name="phone_number"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <Autocomplete
                  className="mt-1  w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  apiKey={"AIzaSyCjVTY4ZhotiU1Ldf54tRItAcBS-s_tlNU"}
                  style={{ width: "90%" }}
                  onPlaceSelected={(place) => {
                    let number = "";
                    for (const entry of place.address_components) {
                      let type = entry.types[0];
                      switch (type) {
                        case "locality":
                          document.querySelector("#locality").value =
                            entry.long_name;
                          setValue("city", entry.long_name);
                          break;
                        case "administrative_area_level_1":
                          document.querySelector("#state").value =
                            entry.short_name;
                          setValue("state", entry.short_name);
                          break;
                        case "postal_code":
                          document.querySelector("#postal_code").value =
                            entry.long_name;
                          setValue("postal_code", entry.long_name);
                          break;
                        case "country":
                          document.querySelector("#country").value =
                            entry.long_name;
                          setValue("country", entry.long_name);
                          break;
                        case "street_number":
                          number = entry.long_name;
                          break;
                        case "route":
                          document.querySelector(
                            "#street_address"
                          ).value = `${number}  ${entry.long_name}`;
                          setValue(
                            "street_address",
                            `${number}  ${entry.short_name}`
                          );
                          break;
                        default:
                          break;
                      }
                    }
                  }}
                  options={{
                    types: ["address"],
                  }}
                  placeholder="Enter A Street Address..."
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-0 px-4 pb-5 sm:px-6 sm:pb-6">
              <div className="col-span-6 sm:col-span-3">
                <h3 className="font-semibold text-gray-900 text-xl lg:text-xl ">
                  2. Confirm Address:
                </h3>
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="street_address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="street_address"
                  ref={register()}
                  name="street_address"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="unit"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apartment, Unit, or Floor
                </label>
                <input
                  type="text"
                  ref={register()}
                  name="unit"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="locality"
                  ref={register()}
                  name="city"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  State/Province
                </label>
                <input
                  type="text"
                  id="state"
                  ref={register()}
                  name="state"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Postal code
                </label>
                <input
                  type="text"
                  id="postal_code"
                  ref={register()}
                  name="postal_code"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Country/Region
                </label>
                <input
                  type="text"
                  id="country"
                  ref={register()}
                  name="country"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              id="completeSubmit"
              className="inline-flex justify-center px-5 md:px-6 py-3 focus:outline-none bg-atgBlue hover:bg-blue-900 rounded-xl shadow-sm text-md font-medium text-white"
            >
              {false && (
                <svg
                  className="animate-spin h-5 w-5 text-white self-center mr-2"
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
              )}
              Submit
            </button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default UnderRevision;
