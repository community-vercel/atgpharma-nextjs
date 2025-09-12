/* eslint-disable react/jsx-filename-extension */
import React, { Fragment, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

// CONTEXT
import { EstimateContext } from "../../context/estimateContext";

// COMPONENTS
import PageContainer from "../pageContainer";

const EstimateSelector = ({ data, pageOrder, setPageOrder }) => {
  const [state, dispatch] = useContext(EstimateContext);
  const router = useRouter();
  const { id } = router.query;
  const [RevisionOn, setRevisionOn] = useState(null);
  const [pdfSelected, setPdfSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [error, SetError] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const tableHeaders = [
    "Estimate ID",
    "Estimate Total",
    "Estimate Expiry",
    "View Estimate",
    "Accept",
  ];

  const selectEstimate = async (formData) => {
    let filteredData = Object.fromEntries(
      Object.entries(formData).filter(
        ([_, entry]) => entry !== null && entry !== "" && entry !== "0"
      )
    );
    if (Object.keys(filteredData).length !== 0) {
      SetError(null);
      data.selected_estimate_id = formData.revision
        ? data.estimates[RevisionOn].estimate_id
        : formData.accepted;
      data.revision_comment = formData.revision ? formData.revision : null;
      data.public_ID = id;
      if (!data.revision_comment) {
        dispatch({
          type: "SET_ESTIMATE_SELECTION",
          payload: data,
        });
        let page = pageOrder + 1;
        setPageOrder(page);
      } else {
        setPageOrder("revision");
      }
    } else {
      SetError("A Selection is Required");
    }
  };

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
      <div className="px-8 xl:px-0 max-w-7xl mx-auto my-20">
        <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center">
          <span className="block xl:inline">ATG Pharma Estimate Selection</span>
        </h2>
        <p className="text-center py-4 max-w-5xl mx-auto text-base text-gray-600">
          Thank you for taking time to look over the estimate that were created
          specifically to boost your production. Below you can review the
          estimates and select the ones you would like to move forward with.
        </p>
        <form onSubmit={handleSubmit(selectEstimate)}>
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
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider flex flex-row items-end gap-2"
                        >
                          REVISE
                          <div className="relative flex flex-col items-center group">
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div className="absolute bottom-0 w-full z-50 flex flex-col items-center hidden  mb-6 group-hover:flex">
                              <span className="relative p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
                                Add revision comments on estimate to meet
                                requirements
                              </span>
                              <div className="w-3 h-3 -mt-2 transform rotate-45 bg-gray-600" />
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.estimates.map((entry, index) => (
                        <>
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {entry.estimate_id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-800">
                              $
                              {entry.data_json.estimate_total
                                .toFixed(2)
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-800">
                              {entry.created_at.split("T")[0]}
                            </td>
                            <td className="px-6 py-4  text-sm">
                              <button
                                type="button"
                                onClick={() => {
                                  setOpen(true);
                                  setPdfSelected(entry.pdf.document);
                                }}
                                className="flex flex-row focus:outline-none items-center text-atgBlue hover:text-blue-900"
                              >
                                <span className="pr-2">View</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                                  />
                                </svg>
                              </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <input
                                ref={register()}
                                name="accepted"
                                type="radio"
                                value={entry.estimate_id}
                                className="h-4 w-4 ml-2"
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-atgBlue">
                              <button
                                type="button"
                                className="ml-2"
                                onClick={() =>
                                  RevisionOn === index
                                    ? setRevisionOn(null)
                                    : setRevisionOn(index)
                                }
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                          {RevisionOn === index && (
                            <tr
                              className={
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }
                            >
                              <td className="font-medium leading-3 px-6 py-4 ">
                                Revision Comments:
                              </td>
                              <td colSpan="5" className="p-4">
                                <textarea
                                  ref={register()}
                                  name="revision"
                                  className="w-full border border-gray-100 shadow-md rounded-md p-4"
                                ></textarea>
                              </td>
                            </tr>
                          )}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center lg:items-end justify-center pt-6">
            {error && (
              <p className=" text-sm tracking-wide py-2 text-red-600">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="flex items-center justify-center px-5 md:px-6 py-3 focus:outline-none bg-atgBlue hover:bg-blue-900 rounded-xl shadow-sm text-md font-medium text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
};

export default EstimateSelector;
