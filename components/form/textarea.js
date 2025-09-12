import { useRef } from "react";

// TODO: react-hook-form is not supporting other inputs, so, had to manually check for required validation, for supporting other validations we need to add other logic too
function TextArea({ data, register, errors, setFormValue, clearFormError }) {
  const { name } = data;
  return (
    <div>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {data.header}
        </h3>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <div className="relative mt-1">
            <textarea
              // ref={register()}
              onChange={(e) => {
                const val = e.target.value
                setFormValue(name, val)
                // TODO: react-hook-form is not supporting other inputs, so, had to manually check for required validation, for supporting other validations we need to add other logic too
                if(data.requirement?.required && val && errors[name]) clearFormError(name)
              }}
              
              rows="1"
              className={`p-2 shadow-sm block w-full sm:text-sm border-2 ${
                errors[name] ? "border-red-600" : "border-blue-200"
              } focus:outline-none focus:border-atgBlue rounded-xl`}
              {...register(name, data.requirement)}
              name={name}
            />
            {errors[name] && (
              <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
                {errors[name].message}
              </p>
            )}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className={`${
                  errors.helpRequired ? "visible" : "hidden"
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
          {/* {errors.helpRequired && (
            <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
              {errors.helpRequired.message}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default TextArea;
