function Source({ data, register, errors, setFormValue, clearFormError }) {
  const SourceSelection = data.input.map((entry, index) => {
    const { label } = entry;
    return <option key={index}>{label}</option>;
  });
  // const { ...rest} = register("source", { required: "A source selection is required" });
  console.log("errors", errors);
  const { name } = data
  return (
    <div>
      <div>
        <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">
          {data.header}
        </h3>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <div className="mt-1">
            <select
              // ref={register({ required: "A source selection is required." })}
              id={name || "source"}
              name={name || "source"}
              {...register(name, data.requirement)}
              onChange={(e) => {
                const val = e.target.value;
                setFormValue(name, val);
                if(data.requirement?.required && val && errors[name]) clearFormError(name)
              }}
              // name="source"
              placeholder="Select..."
              className={`shadow-sm p-2  py-3  block w-full sm:text-sm border-2 bg-white ${
                errors[name] ? "border-red-600" : "border-blue-200"
              } focus:outline-none focus:border-atgBlue rounded-xl`}
            >
              <option selected disabled value={null}>
                Select...
              </option>
              {SourceSelection}
            </select>
            {errors[name] && (
              <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
                {errors[name].message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Source;
