/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { PencilIcon, CheckCircleIcon } from "@heroicons/react/outline";

// COMPONENTS
import PageContainer from "../pageContainer";

const UpdateAddress = ({ data }) => {
  const [address, setAddress] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [pdfSelected, setPdfSelected] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(data);
    let selected = data.selected_estimate;
    for (const estimate of data.estimates) {
      console.log(estimate.shipping_address);
      if (estimate.estimate_id === selected) {
        setAddress(estimate.shipping_address);
        setPdf(estimate.pdf);
        break;
      }
    }
  }, []);
  return (
    <PageContainer>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-50 inset-0 overflow-y-auto"
          open={open}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle sm:max-w-7xl sm:w-full ">
                <div className="p-4 sm:p-6">
                  {pdfSelected && (
                    <iframe
                      style={{ width: "100%", height: "90vh" }}
                      src={pdfSelected}
                      type="application/pdf"
                      title="title"
                    />
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* <div className="bg-gray-100 -my-20 py-20 "> */}
      {/* <div className="bg-white py-4 divide-y divide-gray-200 w-full">
        <h1 className="text-4xl underline max-w-7xl mx-auto text-atgBlue">
          <span className="text-gray-700">Order Details</span>
        </h1>
      </div> */}
      <h2 className="text-3xl lg:text-5xl mt-12 tracking-tight font-bold text-gray-900 text-center">
        <span className="block xl:inline">Order Details</span>
      </h2>
      <div className="px-8 xl:px-0 max-w-7xl mx-auto my-20">
        <div className="grid grid-cols-6 mt-12 gap-14">
          <div className="col-span-6 bg-white border border-gray-100 rounded-3xl shadow">
            <div className="flex flex-row items-center justify-between ">
              <h2 className="m-8 text-2xl lg:text-4xl tracking-tight font-bold text-gray-900 text-left">
                <span className="block xl:inline">Pending 2nd Installment</span>
              </h2>
              <div className="mx-8  mt-2 py-2 flex flex-col  items-end justify-start gap-0.5">
                <button
                  onClick={() => {
                    setOpen(true);
                    setPdfSelected(pdf?.document);
                  }}
                  className="px-2 text-atgBlue text-lg leading-6 items-center"
                >
                  View Invoice
                </button>
                <h3>
                  <span className="font-medium">Issued On: </span>
                  {pdf?.created_at.split("T")[0]}
                </h3>
              </div>
            </div>
            <div className="mx-8 grid grid-cols-5 border border-atgBlue bg-white rounded-full h-8 mt-8">
              <div className="bg-atgBlue opacity-95 rounded-l-full col-span-1 mr-36" />
              <div className="bg-atgBlue opacity-95 col-span-1 -ml-36 mr-16" />
              {/* <div className="bg-atgBlue opacity-95 col-span-1 -ml-36 -mr-4" /> */}
              {/* <div className="bg-atgBlue opacity-95 col-span-2 rounded-r-full" /> */}
            </div>
            <div className="mx-8 grid grid-cols-10">
              <div className="flex flex-col">
                <img
                  src="/status/confirm.svg"
                  alt="Picture of the author"
                  className="h-20"
                />

                <h1 className="text-center text-atgBlue font-medium">
                  Order Confirmed
                </h1>
              </div>
              <img
                src="/status/dashedLine.svg"
                alt="Picture of the author"
                className="h-20 mx-auto col-span-2"
              />
              <div className="flex flex-col">
                <img
                  src="/status/programming.svg"
                  alt="Picture of the author"
                  className="h-20"
                />

                <h1 className="text-center text-atgBlue font-medium">
                  Building &#x26; Programming
                </h1>
              </div>
              <img
                src="/status/dashedLine.svg"
                alt="Picture of the author"
                className="h-20  mx-auto col-span-2"
              />
              <div className="flex flex-col">
                <img
                  src="/status/delivered.svg"
                  alt="Picture of the author"
                  className="h-20"
                />

                <h1 className="text-center text-atgBlue font-medium">
                  On Route
                </h1>
              </div>
              <img
                src="/status/dashedLine.svg"
                alt="Picture of the author"
                className="h-20  mx-auto col-span-2"
              />
              <div className="flex flex-col">
                <img
                  src="/status/recieved.svg"
                  alt="Picture of the author"
                  className="h-20"
                />
                <h1 className="text-center text-atgBlue font-medium">
                  Received
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-2 gap-12 mt-4">
              <div className="mx-8  py-2 flex flex-col ">
                <h3 className="text-xl text-gray-800 font-semibold">
                  Concerns On Order Status?
                </h3>
                <p className="text-gray-700 mt-1 ">
                  Get in Touch to connect you with the correct person.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center w-1/2 my-4 mr-auto px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <PencilIcon
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          {/* <div className="col-span-4 flex flex-col gap-8"> */}
          <div className="bg-white border col-span-3 border-gray-100 p-4 rounded-3xl shadow">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-2xl leading-6 font-medium text-gray-900">
                Ships To
              </h3>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PencilIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Edit
              </button>
            </div>
            <p className="text-gray-700 px-4 pt-2">
              <span className="block">ATG Pharma Inc.</span>
              <span className="block ">ATTN TO: Ahmed Al Amawi</span>
              <span className="block">{address?.line_one}</span>
              <span className="block">{address?.city}, ON</span>
              <span className="block">
                {address?.postal_code}, {address?.country_subdivision_code}
              </span>
              <span className="block font-medium pt-1">
                Special Instructions: N/A
              </span>
            </p>
          </div>
          <div className="bg-white border col-span-3 border-gray-100 p-4 rounded-3xl shadow">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">
              Payment Breakdown
            </h3>
            <div className="p-2 grid grid-cols-3 gap-y-2 mt-4 items-center">
              <h3 className="text-lg text-gray-800">First Installment</h3>
              <h3 className="text-lg text-center font-semibold">$12,245.12</h3>
              <div className="flex items-start  justify-end mr-4">
                <CheckCircleIcon
                  className=" text-center text-green-600 h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg text-gray-800">Second Installment</h3>
              <h3 className="text-lg text-center font-semibold">$24,245.12</h3>
              <h3 className="mr-4 text-right text-red-700">Pending</h3>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* </div> */}
    </PageContainer>
  );
};

export default UpdateAddress;
