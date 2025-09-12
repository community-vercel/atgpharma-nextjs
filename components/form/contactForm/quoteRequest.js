import { useState, useEffect } from "react";

function QuoteRequest({ data, register, errors, watch, unregister }) {
  const [otherValue, setOtherValue] = useState(false);
  useEffect(() => {
    if (watch("interest").includes("other")) {
      setOtherValue(true);
    } else {
      setOtherValue(false);
      unregister("other_text");
    }
  }, [watch("interest")]);
  const productHelp = data.input.map((entry, index) => {
    const { label, name } = entry;
    return (
      <div key={index} className="flex items-start mx-2 pt-1">
        <div className="h-5 flex items-center">
          <input
            ref={register()}
            name="interest"
            type="checkbox"
            value={name}
            className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label className="font-medium text-gray-700">{label}</label>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {data.header}
        </h3>
      </div>
      {errors.interest && (
        <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
          {errors.interest.message}
        </p>
      )}
      <div className="mt-2 grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <div className="flex flex-col lg:flex-row items-start lg:tems-center justify-start lg:justify-between w-full">
            {productHelp}
          </div>
          <div className="flex flex-row my-2 pt-1">
            <div className="flex items-center  mx-2">
              <div className="h-5 flex items-center">
                <input
                  name="interest"
                  ref={register({ required: "A Selection is required." })}
                  type="checkbox"
                  value="Other"
                  className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm self-center">
                <label className="font-medium text-gray-700">Other:</label>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <textarea
                ref={
                  otherValue
                    ? register({ required: "An Input is Required" })
                    : null
                }
                name="other_text"
                rows="1"
                className=" p-2 shadow-sm block w-full sm:text-sm border-2 border-blue-200 focus:outline-none focus:border-atgBlue rounded-xl"
              />
              {errors.other_text && (
                <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
                  {errors.other_text.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteRequest;
