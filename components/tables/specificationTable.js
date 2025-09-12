function SpecificationTable({ data, basis, title, specificationTitle }) {
  const tableData = data.map((entry, index) => {
    const { title, value } = entry;
    return (
      <li
        key={index}
        className={`px-6 py-4 ${
          index % 2 === 0 ? "bg-gray-200" : "bg-white"
        } rounded-full`}
      >
        <div className="grid gap-1 grid-cols-1 lg:grid-cols-2 text-center lg:text-left ">
          <p className="col-span-1 px-2  lg:px-6 text-atgBlue font-bold">
            {title}
          </p>
          <p className="col-span-1 font-semibold">{value}</p>
        </div>
      </li>
    );
  });
  return (
    <div className="px-8 xl:px-0 max-w-7xl mx-auto  my-20">
      <h2 className="my-12 text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl md:w-auto flex flex-col items-center text-center">
        <span className="block xl:inline">{specificationTitle || `${title} Specifications`}</span>
      </h2>
      <div className="bg-white">
        <ul>{tableData}</ul>
        <p className="text-center pt-4 py-2 text-gray-500">{basis}</p>
      </div>
    </div>
  );
}
export default SpecificationTable;
