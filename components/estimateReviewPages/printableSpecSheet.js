/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
var QRCode = require("qrcode.react");

const PrintableSpecSheet = ({ reference, data }) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  return (
    <div
      className="overflow-hidden print:overflow-visible h-0 w-0 print:w-full print:my-14 print:px-12"
      ref={reference}
    >
      <div className="w-full flex flex-row justify-between items-center">
        <div>
          <img
            src="/Logo_Coloured.svg"
            alt="Picture of the author"
            className="w-28 h-20 ml-2 "
          />
        </div>
        <p>
          <span className="block font-bold"> ATG Pharma Inc.</span>
          <span className="block text-sm">474 Iroquois Shore Rd, Unit 2</span>
          <span className="block text-sm">Oakville, ON</span>
          <span className="block text-sm">Canada, L6H2Y7</span>
        </p>
      </div>
      <h1 className="text-3xl font-bold text-center">Sample Spec Sheet</h1>
      <p className="text-lg py-2 text-gray-600 text-center">
        Please attach this sheet with the associated sample container, such that
        the QR code is facing outwards.
      </p>
      <div className="w-full h-64">
        {/* <h3 className="text-lg py-2 px-8 text-gray-900  font-semibold">
          <span className="block">
            {data?.container?.type.name.toUpperCase()}:
          </span>
        </h3> */}
        <div className="bg-gray-200 w-full flex flex-row items-center text-center justify-center border-b border-gray-300 mx-4">
          <h4 className="text-center text-lg font-bold">Details</h4>
        </div>
        <div className="grid grid-cols-2 w-full border border-gray-300 mx-4 mb-4">
          <div className="border-r border-gray-300">
            <div className="flex flex-col">
              <div className="align-middle inline-block min-w-full">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody>
                      <tr className="bg-white border-b border-gray-300">
                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left bg-gray-100 border-r border-gray-300">
                          Company Name:
                        </td>
                        <td className="px-2 py-2 whitespace-nowrap text-sm font-bold text-gray-800 text-center border-r border-gray-300">
                          {data?.container?.name?.split("_")[0].toUpperCase()}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left bg-gray-100 border-r border-gray-300">
                          Sample Type:
                        </td>
                        <td className="px-2 py-2 whitespace-nowrap text-sm font-bold text-gray-800 text-center">
                          {data?.container?.type.name.toUpperCase()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="border-r border-gray-300">
            <div className="flex flex-col">
              <div className="align-middle inline-block min-w-full">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody>
                      <tr className="bg-white  border-b border-gray-300">
                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left bg-gray-100 border-r border-gray-300">
                          Date Issued
                        </td>
                        <td className="px-2 py-2 whitespace-nowrap text-sm font-bold text-gray-800 text-center">
                          {mm + "/" + dd + "/" + yyyy}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left bg-gray-100 border-r border-gray-300">
                          Quantity Expected:
                        </td>
                        <td className="px-2 py-2 whitespace-nowrap text-sm font-bold text-gray-800 text-center">
                          15 units
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col  border border-gray-300 mx-4 ">
          <div className="bg-gray-200 flex flex-row items-center text-center justify-center border-b border-gray-300">
            <h4 className="text-center text-lg font-bold">Measurements</h4>
          </div>
          <div className="flex flex-col">
            <div className="align-middle inline-block min-w-full">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                      >
                        Dimension
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-xs font-medium text-gray-800 uppercase tracking-wider text-center"
                      >
                        Value
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-xs font-medium text-gray-800 uppercase tracking-wider text-right"
                      >
                        Unit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.measurement?.map((entry, index) => {
                      return (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-100"
                          }
                        >
                          <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                            {entry.dimension.name.toUpperCase()}
                          </td>
                          <td className="px-2 py-2 whitespace-nowrap text-sm font-bold text-gray-800 text-center">
                            {entry.measurement}
                          </td>
                          <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 text-right">
                            {entry.dimension.unit_of_measure}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-center mt-24">
        <div className="w-1/3 border-dashed border-b-2 border-gray-200" />
        <h1 className="block text-center w-1/3 text-2xl font-bold">
          FOLD HERE
        </h1>
        <div className="w-1/3 border-dashed border-b-2 border-gray-200" />
      </div>
      <div className="mx-60 mt-12 text-center">
        <QRCode value={data ? data.name : ""} size="150" />
      </div>
    </div>
  );
};

export default PrintableSpecSheet;
