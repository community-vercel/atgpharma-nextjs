function Credentials({ data, register, errors }) {
  const Contacts = data.input.map((entry, index) => {
    const { span, label, name, requirement, type } = entry;
    return (
      <div key={index} className={`col-span-1 lg:col-span-${span}`}>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="relative mt-1">
          <input
            type="text"
            name={name}
            id={name}
            autoComplete={type}
            className={`shadow-sm p-2 block w-full sm:text-sm border-2 ${
              errors[name] ? "border-red-600" : "border-blue-200"
            } focus:outline-none focus:border-atgBlue rounded-xl`}
            ref={register(requirement)}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              className={`${
                errors[name] ? "visible" : "hidden"
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
        {errors[name] && (
          <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
            {errors[name].message}
          </p>
        )}
      </div>
    );
  });

  return (
    <div className="pt-4">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {data.header}
        </h3>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-y-4 gap-x-4 lg:grid-cols-2">
        {Contacts}
      </div>
    </div>
  );
}

export default Credentials;
