function RangeScale({ data }) {
  return (
    <div className="container my-14 py-4 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
      <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center mb-6">
        <span>Explore {data} and Packaging Solutions</span>
      </h2>
      <p className="text-base my-4 leading-6 text-gray-500 text-center">
        <span className="block">
          {" "}
          Our list of products includes options for any kind of companies, big
          or small, startup or well established corporations. Control your
          production the way you want it + return on investment.
        </span>
      </p>
      <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
        <div className="w-full">
          <a
            href="/products/packaging/capper"
            className="mx-2 px-10 py-5 border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-base  text-white hover:text-atgBlue "
          >
            EXPLORE PACKAGING
          </a>
        </div>
      </div>
    </div>
  );
}
export default RangeScale;
