/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

// COMPONENTS
import PageContainer from "../pageContainer";

const DepositForm = ({ pageOrder, setPageOrder }) => {
  const router = useRouter();
  const { id } = router.query;
  const { register, handleSubmit, errors } = useForm();
  const [orderData, setOrderData] = useState(null);
  const [price, setTotalPrice] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/orderValidation", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(id),
        });
        if (res.status === 200) {
          res.json().then((value) => {
            for (const estimate of value.estimates) {
              if (value.selected_estimate === estimate.estimate_id) {
                console.log(value);
                setTotalPrice(estimate.data_json.estimate_total);
              }
            }
            setOrderData(value);
          });
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

  const makeDeposit = async (formData) => {
    formData.public_ID = id;
    try {
      const res = await fetch("/api/makeDeposit", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PageContainer>
      <div className="px-8 xl:px-0 max-w-7xl mx-auto mt-20 mb-2">
        <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center">
          <span className="block xl:inline">ATG Pharma Deposit Form</span>
        </h2>
        <p className="text-center py-4 max-w-5xl mx-auto text-base text-gray-600">
          In order to secure the order and move forward with production bringing
          you the products in timely manner please place a deposit through the
          portal below.
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-row mb-8 justify-center items-start">
        <div className="mx-w-md ml-auto">
          <h3 className="text-xl lg:text-2xl tracking-tight font-bold text-gray-900 text-left mb-8">
            Price Breakdown:
          </h3>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="w-full  table divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Line Entry
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Price [CAD]
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Estimate Total
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right proportional-nums ">
                        $
                        {price
                          ?.toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Unfilled Samples
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-900 text-right proportional-nums ">
                        - $500.00
                      </td>
                    </tr>
                    <tr className="bg-white border-b-2 border-gray-300">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Deposit
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-800 text-right proportional-nums ">
                        - $1,500.00
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        First Installment
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-semibold text-right proportional-nums ">
                        $
                        {(price / 2)
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Second Installment
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-semibold text-right proportional-nums ">
                        $
                        {(price / 2 - 1500)
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg p-8 mx-auto mt-14 bg-gray-50 border border-gray-300 rounded-xl shadow-sm mb-12">
          <form className="" onSubmit={handleSubmit(makeDeposit)}>
            <h2 className=" text-gray-500 col-span-2">Payment Information</h2>
            <input
              disabled={true}
              value={"$ 1,500.00 CAD"}
              type="text"
              className="border border-gray-300 px-4 py-2 col-span-4 mb-4 w-full"
            />
            <div className="grid grid-cols-4">
              <input
                type="text"
                ref={register()}
                name="name"
                placeholder="Name On Card"
                className="border border-gray-300 px-4 py-2 col-span-4  placeholder-gray-500"
              />
              <input
                type="text"
                ref={register()}
                name="number"
                placeholder="Card Number"
                className="border border-t-0 border-gray-300 px-4 py-2 col-span-4 placeholder-gray-500"
              />
              <select
                className=" px-4 py-2 text-base border border-t-0 border-r-0 border-gray-300 focus:outline-none "
                defaultValue="01"
                ref={register()}
                name="expiry_month"
              >
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
              <select
                className=" px-4 py-2 text-base border border-t-0 border-r-0  border-gray-300 focus:outline-none "
                defaultValue="2021"
                ref={register()}
                name="expiry_year"
              >
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
                <option>2031</option>
                <option>2032</option>
                <option>2033</option>
              </select>
              <input
                type="text"
                placeholder="CVD"
                ref={register()}
                name="cvd"
                className="border border-t-0 border-gray-300 px-4 py-2 col-span-2 placeholder-gray-500"
              />
            </div>
            <h2 className=" text-gray-500 col-span-2 mt-4">Billing Address</h2>
            <div className="grid grid-cols-2">
              <input
                type="text"
                ref={register()}
                name="name"
                placeholder="Name On Card"
                className="border border-gray-300 px-4 py-2 col-span-2  placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Email"
                className="border border-t-0 border-r-0 border-gray-300 px-4 py-2 col-span-1 placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-t-0 border-gray-300 px-4 py-2 col-span-1 placeholder-gray-500"
              />
              <input
                type="text"
                ref={register()}
                name="address_line1"
                placeholder="Address Line 1"
                className="border border-t-0 border-r-0 border-gray-300 px-4 py-2 col-span-1 placeholder-gray-500"
              />
              <input
                type="text"
                ref={register()}
                name="address_line2"
                placeholder="Address Line 2"
                className="border border-t-0 border-gray-300 px-4 py-2 col-span-1 placeholder-gray-500"
              />
              <input
                type="text"
                ref={register()}
                name="city"
                placeholder="City"
                className="border border-t-0 border-r-0 border-gray-300 px-4 py-2 col-span-1 placeholder-gray-500"
              />
              <input
                type="text"
                ref={register()}
                name="postal_code"
                placeholder="Postal/Zip Code"
                className="border border-t-0 border-gray-300 px-4 py-2 col-span-1 placeholder-gray-500"
              />
              <select
                className=" px-4 py-2 text-base border border-t-0 border-r-0 border-gray-300 focus:outline-none "
                defaultValue="Ontario"
                ref={register()}
                name="province"
              >
                <option>Ontario</option>
                <option>Quebec</option>
              </select>
              <select
                className=" px-4 py-2 text-base border border-t-0  border-gray-300 focus:outline-none text-gray "
                defaultValue="Canada"
                ref={register()}
                name="country"
              >
                <option>Canada</option>
              </select>
            </div>
            <button
              type="submit"
              className="my-4 w-full text-white  bg-bamboraPurple py-3 rounded-md"
            >
              Submit Payment
            </button>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default DepositForm;
