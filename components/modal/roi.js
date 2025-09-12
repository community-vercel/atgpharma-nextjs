/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon, XIcon } from "@heroicons/react/outline";

export default function ROI({
  openModal,
  setOpenModal,
  modalType,
  profitMargin,
  setProfitMargin,
}) {
  let renderedData = {};
  switch (modalType) {
    case "units":
      renderedData = {
        title: "ROI Units",
        description:
          "The ROI is based off units to sell created by the sales price entered with an assumption of a 50% profit margin",
        range: true,
      };
      break;
    case "price":
      renderedData = {
        title: "RoboCAP Pricing",
        description:
          "The pricing presented is a rough estimate that can be utilized to capture a framework of ATG pricing",
      };
      break;
    case "technician":
      renderedData = {
        title: "Technicians Required",
        description:
          "With the current parameters set, ATG estimates the number of employees required to operate the production line for filling with the RoboCAP",
      };
      break;
    case "revenue":
      renderedData = {
        title: "Monthly Revenue",
        description:
          "The monthly revenue is calculated based on the selling price set and the monthly output chosen for the current setup",
      };
      break;
    case "hours":
      renderedData = {
        title: "Filling Hours",
        description:
          "The man hours presented are based on industry standards for manual filling for the product presented based on ATG cliental",
      };
      break;
    case "costs":
      renderedData = {
        title: "Labour Costs",
        description:
          "The labour costs are determined by the man hours required and the wage provided",
      };
      break;
    case "profits":
      renderedData = {
        title: "Production Profits",
        description:
          "The production profits account for labour as the only expense and explores profit boosts with RoboCAP",
      };
      break;
    default:
      break;
  }
  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpenModal}
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setOpenModal(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  <QuestionMarkCircleIcon
                    className="h-6 w-6 text-atgBlue"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    {renderedData.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {renderedData.description}
                    </p>
                  </div>
                  {renderedData.range && (
                    <div className="w-full py-4">
                      <h3>Product Profit Margins:</h3>
                      <input
                        className="w-full"
                        type="range"
                        min="1"
                        max="100"
                        value={profitMargin * 100}
                        onChange={(e) => setProfitMargin(e.target.value / 100)}
                      />
                      <div className="flex flex-row justify-between font-medium">
                        <span>1%</span>
                        <h4 className="text-lg">
                          <span className="font-bold">
                            {profitMargin * 100} %
                          </span>
                        </h4>
                        <span>100 %</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
