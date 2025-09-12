/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { PlusCircleIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import { PrinterIcon, ExclamationIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useReactToPrint } from "react-to-print";
import axios from "axios";

// COMPONENTS
import PageContainer from "../pageContainer";
import PrintableSpecSheet from "./printableSpecSheet";

const tableHeaders = [
  "Sample Identifier",
  "Sample Type",
  "Details Form",
  "Attachable Sheet",
];

const SamplesForm = ({ pageOrder, setPageOrder }) => {
  const [samples, setSamples] = useState([]);
  const { register, handleSubmit, watch, errors } = useForm();
  const [selectedSample, setSelectedSample] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSampleName, setSelectedSampleName] = useState(null);
  const [specSheetSample, setSpecSheetSample] = useState(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [specSheet, setSpecSheet] = useState(false);
  const [skipSamples, setSkipSamples] = useState(false);
  const cancelButtonRef = useRef(null);
  const cancelSkipRef = useRef(null);
  const componentRef = useRef();

  const handlePrint = async (entry) => {
    await setSpecSheetSample(entry);
    printDoc();
  };
  const printDoc = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/sampleFetch", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(id),
        });
        if (res.status === 200) {
          res.json().then((value) => setSamples(value));
        } else {
          res.json().then((value) => {
            console.log(value.message);
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (id) fetchData();
  }, [id]);

  async function submitDimensions(data) {
    setIsSubmitting(true);
    const requst_body = new FormData();
    requst_body.append("isometric_image", data.isometric_image["0"]);
    requst_body.append("top_image", data.top_image["0"]);
    requst_body.append("front_image", data.front_image["0"]);
    "isometric_image top_image front_image"
      .split(" ")
      .forEach((e) => delete data[e]);
    requst_body.append("quantity", data?.quantity);
    delete data.quantity;
    requst_body.append("measurements", JSON.stringify(data));
    requst_body.append("public_ID", id);
    requst_body.append("sample_name", selectedSampleName?.name);
    try {
      const response = await axios({
        url: `http://localhost:8000/sales/public/samples/${id}`,
        method: "patch",
        data: requst_body,
        headers: {
          "X-CSRFToken":
            "tf7guFRhdSioNWU5FhKlGXH9gQCci2XqAEdJ3epMpfcZYFfvC36dqiVZLPozHsTN",
          "Content-Type": "multipart/form-data",
          accept: "application/json",
        },
      });
      if (response.status === 200) {
        window.history.go(0);
        setOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  }
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
              <div className="inline-block align-bottom bg-white rounded-lg pt-5 text-left overflow-hidden shadow-xl transform transition-all sm:mt-8 sm:align-middle sm:max-w-3xl sm:w-full sm:pt-6">
                <form onSubmit={handleSubmit(submitDimensions)}>
                  <div className="px-4 sm:px-6">
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-xl mb-2 leading-6 font-bold text-gray-900"
                      >
                        Sample Details Form
                      </Dialog.Title>
                      <div className="w-full flex flex-col items-start border-b my-2 ">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Dimensions
                        </h3>
                        <p className="mt-1 pb-3 max-w-2xl text-xs text-gray-500">
                          Enter specific dimensions to help design filling trays
                          accurately
                        </p>
                      </div>
                      <div className="grid grid-cols-4 gap-2 py-4 border-b">
                        {selectedSample.map((entry, index) => {
                          return (
                            <React.Fragment>
                              <label
                                key={index}
                                className="text-gray-800 text-left ml-2"
                              >
                                {entry.name}
                              </label>
                              <div className="relative rounded-md shadow-sm border border-gray-300">
                                <input
                                  type="number"
                                  name={entry.name}
                                  ref={register({
                                    required: "An Input is Required",
                                  })}
                                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1 pl-2 pr-12 sm:text-sm  rounded-md"
                                  placeholder="0"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                  <p className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-1 pl-4 pr-8 border-l border-gray-300 bg-gray-50 text-gray-500 sm:text-sm  rounded-r-md">
                                    {entry.unit_of_measure}
                                  </p>
                                </div>
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>
                      <div className="w-full flex flex-row items-start border-b my-2 ">
                        <div className="flex flex-col items-start justify-end">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Quantity
                          </h3>
                          <p className="mt-1 pb-3 max-w-2xl text-xs text-gray-500">
                            Please Identify how many samples for this container
                            will be shipped
                          </p>
                        </div>
                        <div className="relative rounded-md shadow-sm border border-gray-300">
                          <input
                            type="number"
                            min="10"
                            name="quantity"
                            ref={register({
                              required: "An Input is Required",
                            })}
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1 pl-2 pr-12 sm:text-sm  rounded-md"
                            placeholder="0"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center">
                            <p className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-1 pl-4 pr-8 border-l border-gray-300 bg-gray-50 text-gray-500 sm:text-sm  rounded-r-md">
                              units
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-col items-start border-b my-2 ">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Images
                        </h3>
                        <p className="mt-1 pb-3 max-w-2xl text-xs text-gray-500">
                          Uploading Images of the samples help us identify your
                          assets to avoid errors along the pipeline
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 py-4">
                        <label className="text-gray-800 text-left ml-2">
                          <span>Top View:</span>
                          <span className="block text-xs text-gray-400">
                            A perspective directly above the sample is seen.
                          </span>
                          <span className="block text-xs text-blue-400 animate-pulse pt-0.5 font-bold">
                            <a>Example</a>
                          </span>
                        </label>
                        <div className="col-span-2 flex justify-center px-6 pt-3 pb-5 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            {watch("top_image")?.length ? (
                              <p className="text-gray-700 font-medium my-1 border border-gray-200 rounded-md">
                                File:{" "}
                                <span className="text-green-700 font-semibold">
                                  {watch("top_image")[0]?.name}
                                </span>
                              </p>
                            ) : (
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="top_image"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-atgBlue hover:text-blue-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  name="top_image"
                                  id="top_image"
                                  type="file"
                                  ref={register({
                                    required: "An Input is Required",
                                  })}
                                  className="sr-only"
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                        <label className="text-gray-800 text-left ml-2">
                          <span>Front View:</span>
                          <span className="block text-xs text-gray-400">
                            A perspective where the sample is viewed from the
                            front.
                          </span>
                          <span className="block text-xs text-blue-400 animate-pulse pt-0.5 font-bold">
                            <a>Example</a>
                          </span>
                        </label>
                        <div className="col-span-2 flex justify-center px-6 pt-3 pb-5 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            {watch("front_image")?.length ? (
                              <p className="text-gray-700 font-medium my-1 border border-gray-200 rounded-md">
                                File:{" "}
                                <span className="text-green-700 font-semibold">
                                  {watch("front_image")[0]?.name}
                                </span>
                              </p>
                            ) : (
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="front_image"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-atgBlue hover:text-blue-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  name="front_image"
                                  id="front_image"
                                  type="file"
                                  ref={register({
                                    required: "An Input is Required",
                                  })}
                                  className="sr-only"
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                        <label className="text-gray-800 text-left ml-2">
                          <span>Isometric View:</span>
                          <span className="block text-xs text-gray-400">
                            A perspective where front facing angles can be seen.
                          </span>
                          <span className="block text-xs text-blue-400 animate-pulse pt-0.5 font-bold">
                            <a>Example</a>
                          </span>
                        </label>
                        <div className="col-span-2 flex justify-center px-6 pt-3 pb-5 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            {watch("isometric_image")?.length ? (
                              <p className="text-gray-700 font-medium my-1 border border-gray-200 rounded-md">
                                File:{" "}
                                <span className="text-green-700 font-semibold">
                                  {watch("isometric_image")[0]?.name}
                                </span>
                              </p>
                            ) : (
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="isometric_image"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-atgBlue hover:text-blue-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  name="isometric_image"
                                  id="isometric_image"
                                  type="file"
                                  ref={register({
                                    required: "An Input is Required",
                                  })}
                                  className="sr-only"
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-atgBlue text-base font-medium text-white hover:bg-blue-800 focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      {isSubmitting && (
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
                      Continue
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Return
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={specSheet} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          open={specSheet}
          onClose={setSpecSheet}
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
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Confirm Spec Sheet Printing
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Have you printed all spec sheets associated with the
                          samples that will be shipped? If not please revert
                          back to print all the sheets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-atgBlue text-base font-medium text-white hover:bg-blue-800 focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setPageOrder(pageOrder + 1)}
                  >
                    Continue
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setSpecSheet(false)}
                    ref={cancelButtonRef}
                  >
                    Return
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={skipSamples} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelSkipRef}
          open={skipSamples}
          onClose={setSkipSamples}
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
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Confirm Skipping Samples
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Skipping Samples data entry, results in an additional
                          <span className="font-bold"> $500</span> onto the
                          deposit, as it splits your order into segments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-800 focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setPageOrder(pageOrder + 1)}
                  >
                    Continue
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setSkipSamples(false)}
                    ref={cancelSkipRef}
                  >
                    Return
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="px-8 xl:px-0 max-w-7xl mx-auto my-20">
        <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center">
          <span className="block xl:inline">ATG Pharma Samples Form</span>
        </h2>
        <p className="text-center py-4 max-w-5xl mx-auto text-base text-gray-600">
          Based on the estimate selected, the filling trays milled in-house
          require a sample of the container(s) in order to accurately fit your
          production needs. Below you find the steps to populate details about
          the sample as well as a printable paper to attach with your shipment.
        </p>
        <div className="flex flex-col">
          <div className="-my-2 sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 z-40">
              <div className="shadow border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 z-20 ">
                  <thead className="bg-gray-50">
                    <tr>
                      {tableHeaders.map((header, headerIndex) => (
                        <th
                          key={headerIndex}
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {samples.map((entry, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          <span className="mr-4 font-semibold">
                            {index + 1}
                            {"."}
                          </span>
                          <span className="font-medium">
                            {entry.name?.split("_")[1]}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-800">
                          {entry.container?.type.name}
                        </td>
                        <td className="px-6 py-4  text-sm">
                          {entry.status !== "AWAITING_INFO" ? (
                            <div className="text-green-700 ml-8">
                              <CheckCircleIcon
                                className="-ml-1 mr-2 h-8 w-8"
                                aria-hidden="true"
                              />
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => {
                                setOpen(true);
                                setSelectedSample(
                                  entry.container?.type.dimensions
                                );
                                setSelectedSampleName(entry);
                              }}
                              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-atgBlue hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <PlusCircleIcon
                                className="-ml-1 mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                              Add Details
                            </button>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {entry.status !== "AWAITING_INFO" ? (
                            <button
                              type="button"
                              onClick={() => handlePrint(entry)}
                              className="flex flex-row text-purple-800 hover:text-purple-900 animate-pulse"
                            >
                              <PrinterIcon
                                className="-ml-1 mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                              <p>Print Spec Sheet</p>
                            </button>
                          ) : (
                            <h1 className="font-bold ml-8">-</h1>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-center gap-4 lg:items-center justify-end pt-6">
          <PrintableSpecSheet reference={componentRef} data={specSheetSample} />
          <button
            type="submit"
            onClick={() => setSkipSamples(true)}
            className="flex items-center justify-center px-5 md:px-6 py-3 focus:outline-none bg-red-600 hover:bg-red-900 rounded-xl shadow-md text-md font-medium text-white"
          >
            Skip
          </button>
          <button
            type="submit"
            onClick={() => setSpecSheet(true)}
            className="flex items-center justify-center px-5 md:px-6 py-3 focus:outline-none bg-atgBlue hover:bg-blue-900 rounded-xl shadow-md text-md font-medium text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export default SamplesForm;
