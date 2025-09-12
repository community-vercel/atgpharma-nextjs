import { useRouter } from "next/router";

function ButtonGrid({ data, currentProduct }) {
  const router = useRouter();

  const gridWidth = data[0].width;
  const productSelection = data.map((entry, index) => (
    <div key={index} className="w-full lg:w-max rounded-md my-2 lg:my-0">
      <button
        // href={entry.link}
        type="button"
        onClick={() => router.push(entry.link)}
        className={`${
          currentProduct === index
            ? "border-atgBlue from-white to-white text-atgBlue "
            : "border-transparent from-buttonStart to-atgBlue text-white "
        }hover:border-atgBlue hover:from-white hover:to-white hover:text-atgBlue  bg-gradient-to-r border-2 text-center lg:text-center pl-6 lg:pl-0 w-full text-md rounded-full py-2 focus:outline-none flex flex-row items-center justify-start`}
      >
        <img
          src={currentProduct === index ? entry.activeRoot : entry.iconRoot}
          alt="Picture of the author"
          className="w-9 h-9 ml-2 "
        />
        <span className="ml-8 lg:ml-3 xl:ml-6  mr-6 xl:mr-16">
          {entry.buttonTitle}
        </span>
      </button>
    </div>
  ));
  return (
    <div
      className={`w-full lg:w-${gridWidth} mx-auto my-8 bg-white shadow-none lg:shadow-lg border-0 lg:border border-gray-100 rounded-none lg:rounded-full`}
    >
      <div className="px-4 py-5">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-around">
          {productSelection}
        </div>
      </div>
    </div>
  );
}
export default ButtonGrid;
