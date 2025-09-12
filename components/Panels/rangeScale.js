import Image from "next/image";
import { Fragment } from "react";

// banner below is unfinished awaiting assets to build HOC
function RangeScale({ data }) {
  return (
    <>
      <div className="relative">
        <Image
          src="/Home/Banner_Graph.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="hidden lg:block relative px-8 xl:px-0 max-w-7xl mx-auto">
          <div className="flex flex-row justify-between  items-end">
            <Image
              src="/Home/Hand_Manual.svg"
              alt="Picture of the author"
              width={120}
              height={120}
              className="h-10 w-auto sm:h-10"
            />
            <img
              src="/Home/robot.png"
              alt="Picture of the author"
              width={350}
              height={350}
              className="transform -translate-y-1/4	self-center -mb-24"
            />
            <Image
              src="/Home/Automatic.svg"
              alt="Picture of the author"
              width={120}
              height={120}
              className="h-10 w-auto sm:h-10"
            />
          </div>
          <div className="mx-14 mt-2">
            <img
              src="/Home/White Desktop.svg"
              alt="Picture of the author"
              className="h-11 w-auto"
            />
            <div className="flex flex-row justify-between  items-center py-4 pb-12">
              <p className="text-white text-xl tracking-wide	leading-3">
                <span className="block py-2">Hand</span>
                <span className="block">Filling</span>
              </p>
              <p className="text-white text-xl tracking-wide	 leading-3">
                <span className="block py-2">ROBOCAP</span>
              </p>
              <p className="text-white text-xl tracking-wide	 leading-3">
                <span className="block py-2">Auto</span>
                <span className="block">Filling</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:hidden  grid-cols-4 px-8 items-start xl:px-0 max-w-7xl mx-auto overflow-hidden">
        <Image
          src="/Home/Blue_Mobile_1.svg"
          alt="Picture of the author"
          width={120}
          height={700}
        />
        <div className="flex flex-col  col-span-3 items-stretch flex-grow justify-between py-6 h-full">
          <p className="text-gray-900 text-xl font-bold">
            <span className="block p-2">HAND FILLING</span>
          </p>
          <div>
            <img
              src="/Home/Robot_Mobile.jpg"
              alt="Picture of the author"
              className="h-auto w-auto md:w-2/3 "
            />
          </div>
          <p className="text-gray-900 text-xl font-bold">
            <span className="block p-2">FULL AUTO FILLING</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default RangeScale;
