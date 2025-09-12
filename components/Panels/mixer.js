/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Image from "next/image";

function Mixer() {
  return (
    <>
      <div className="container -mt-16 my-12 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
        <h2 className="text-5xl tracking-tight font-bold text-atgBlue text-center mb-6">
          <span className="block xl:inline">MAZ Mixer Benefits</span>
        </h2>
        <p className="text-base my-4 leading-6 text-gray-500 text-center">
          <span className="block">
            The Maz also streamlines the production of final products including
            batter, shatter, budder, topicals, infusions and more. The Maz not
            only increases throughput but also frees up lab space and capital by
            replacing vacuum ovens, overhead mixers and heated stir plates with
            a single or multiple compact units.
          </span>
        </p>
        <h2 className="my-6 text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl md:w-auto flex flex-col items-center">
          <span className="block xl:inline">
            Product Capabilities & Features:
          </span>
        </h2>
        <div className="flex flex-col-reverse items-center lg:grid gap-8  md:grid-cols-2 my-8">
          <div className="col-span-1 text-left flex flex-col items-center">
            <ul className="grid grid-cols-1 gap-6  lg:gap-y-12 lg:grid-cols-2">
              <li className="mt-12 lg:mt-0  col-span-1 flex flex-col text-center bg-card rounded-3xl shadow divide-gray-200">
                <img
                  src="/products/packaging/Milling.svg"
                  alt="Icons"
                  width={60}
                  height={60}
                  className="transform -translate-y-2/4	self-center"
                />
                <div className="-mt-9 flex-1 flex flex-col pb-2 px-8">
                  <h3 className="text-xl mt-2 lg:text-2xl text-white font-medium">
                    Milling
                  </h3>
                  <p className="text-sm my-1 leading-6 text-white flex flex-col items-center">
                    <span className="block">Powders, Flowers & Gummies</span>
                  </p>
                </div>
              </li>
              <li className="mt-12 lg:mt-0  col-span-1 flex flex-col text-center bg-card rounded-3xl shadow divide-gray-200">
                <img
                  src="/products/packaging/Mixing.svg"
                  alt="Icons"
                  width={60}
                  height={60}
                  className="transform -translate-y-2/4	self-center"
                />
                <div className="-mt-9 flex-1 flex flex-col pb-4 px-8">
                  <h3 className="text-xl mt-2 lg:text-2xl text-white font-medium">
                    Mixing
                  </h3>
                  <p className="text-sm my-1 leading-6 text-white flex flex-col items-center">
                    <span className="block">
                      Topicals, Gels, Powders & Liquids
                    </span>
                  </p>
                </div>
              </li>
              <li className="mt-12 lg:mt-0  col-span-1 flex flex-col text-center bg-card rounded-3xl shadow divide-gray-200">
                <img
                  src="/products/packaging/Melting.svg"
                  alt="Icons"
                  width={60}
                  height={60}
                  className="transform -translate-y-2/4	self-center"
                />
                <div className="-mt-9 flex-1 flex flex-col pb-4 px-8">
                  <h3 className="text-xl mt-2 lg:text-2xl text-white font-medium">
                    Melting
                  </h3>
                  <p className="text-sm my-1 leading-6 text-white flex flex-col items-center">
                    <span className="block">Gelatin Gum Base & Waxes</span>
                  </p>
                </div>
              </li>
              <li className="mt-12 lg:mt-0  col-span-1 flex flex-col text-center bg-card rounded-3xl shadow divide-gray-200">
                <img
                  src="/products/packaging/Deaerating.svg"
                  alt="Icons"
                  width={60}
                  height={60}
                  className="transform -translate-y-2/4	self-center"
                />
                <div className="-mt-9 flex-1 flex flex-col pb-4 px-8">
                  <h3 className="text-xl mt-2 lg:text-2xl text-white font-medium">
                    Deaerating
                  </h3>
                  <p className="text-sm my-1 leading-6 text-white flex flex-col items-center">
                    <span className="block">Gels & Lotions</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="sm:text-center col-span-1 text-left flex flex-col items-start justify-start mx-auto mb-2 lg:mb-0">
            <ul className="ml-5 list-disc text-left text-atgBlue text-2xl font-bold ">
              <li className="my-1.5">Labor Savings</li>
              <li className="my-1.5">Mill, Mix and Melt in Under 2 Minutes</li>
              <li className="my-1.5">Reduce Preparation Time</li>
              <li className="my-1.5">Increase Product Quality</li>
              <li className="my-1.5">Process Hundreds of Samples a Day</li>
              <li className="my-1.5">No Risk of Cross-Contamination</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative shadow-md">
        <Image
          src="/products/packaging/testi.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="relative py-16 px-8 xl:px-0 max-w-7xl mx-auto flex flex-col items-center">
          <img
            src="/products/packaging/Calyx_Logo.svg"
            alt="Icons"
            width={220}
            height={220}
            className="self-center"
          />
          <p className="text-base lg:text-lg my-4 leading-6 text-white text-center">
            <span className="block">
              The MAZ mixer is great for thoroughly mixing isolate into creams.
              Our creams come out smoothly textured, without being grainy or
              airy. In our small- scale production environment, the KK-400W MAZ
              Mixer model also saves space without being too labor-intensive.
            </span>
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <h2 className="text-2xl lg:text-3xl tracking-wide font-semibold text-white text-center">
              <span className="block xl:inline">
                Erik Weiss, Calyx Wellness Inc.
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container my-14 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
        <h2 className="text-5xl tracking-tight font-bold text-gray-900 text-center mb-6">
          <span className="block xl:inline">MAZ Mixer Models:</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-start">
            <img
              src="/products/packaging/MazMizer_Size_310g.jpg"
              alt="Picture of the author"
              width={400}
              height={400}
            />
            <h4 className="font-bold  text-2xl text-gray-900">KK-300SS</h4>
            <h4 className="tracking-wide text-2xl text-gray-600">
              310 g X 1 CONTAINER
            </h4>
          </div>
          <div className="flex flex-col items-center justify-start">
            <img
              src="/products/packaging/MazMizer_Size_410g.jpg"
              alt="Picture of the author"
              width={400}
              height={400}
            />
            <h4 className="font-bold  text-2xl text-gray-900">KK-400W</h4>
            <h4 className="tracking-wide text-2xl text-gray-600">
              400 g X 2 CONTAINERS
            </h4>
          </div>
          <div className="flex flex-col items-center justify-start">
            <img
              src="/products/packaging/MazMizer_Size_1kg.jpg"
              alt="Picture of the author"
              width={400}
              height={400}
            />
            <h4 className="font-bold  text-2xl text-gray-900">KK-1000W</h4>
            <h4 className="tracking-wide text-2xl text-gray-600">
              1 Kg X 2 CONTAINERS
            </h4>
          </div>
        </div>
      </div>
      <div className="px-8 xl:px-0 max-w-7xl mx-auto  my-20">
        <h2 className="my-12 text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl md:w-auto flex flex-col items-center">
          <span className="block xl:inline">Larger Models Available</span>
        </h2>
        <div className="bg-white">
          <ul>
            <li className="px-6 py-4 bg-gray-200 rounded-full">
              <div className="grid gap-1 grid-cols-1 lg:grid-cols-2 text-center lg:text-left ">
                <h1 className="col-span-1 px-2  lg:px-6 text-atgBlue font-bold">
                  KK-2000W
                </h1>
                <h1 className="col-span-1 font-semibold">
                  (2 Kg x 2 CONTAINERS)
                </h1>
              </div>
            </li>
            <li className="px-6 py-4 bg-white rounded-full">
              <div className="grid gap-1 grid-cols-1 lg:grid-cols-2 text-center lg:text-left ">
                <h1 className="col-span-1 px-2  lg:px-6 text-atgBlue font-bold">
                  KK-5000
                </h1>
                <h1 className="col-span-1 font-semibold">
                  (5 Kg x 2 CONTAINERS)
                </h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Mixer;
