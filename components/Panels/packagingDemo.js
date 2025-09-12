import ReactPlayer from "react-player";
import { useState } from "react";
import CardList from "../cardList";
import ButtonPairs from "../buttons/pairedButtons";

function PackagingDemo() {
  const cardList = [
    {
      title: "Load",
      text: "Trays are pre-racked with cartridges that can be loaded directly onto our RoboCAP. No more tedious loading and unloading by hand.",
      iconRoot: "/Icon_Monoblox_Load.svg",
    },
    {
      title: "Fill",
      text: "Fill cartridges in under 2 minutes with our RoboCAP RL-302VF. Capable of filling & capping press down cartridges, pens, and pods.",
      iconRoot: "/Icon_Monoblox_Fill.svg",
    },
    {
      title: "Press",
      text: "Simply unload the pre-racked tray from the RoboCAP, directly onto the cartridge press, and close all cartridges in seconds.",
      iconRoot: "/Icon_Monoblox_Press.svg",
    },
  ];
  const actionButtonPair = [
    {
      linkTo: "/contact",
      startingShadeR: "buttonStart",
      startingShadeL: "atgBlue",
      startingTextShade: "text-white",
      hoverShadeR: "white",
      hoverShadeL: "white",
      hoverTextShade: "text-atgBlue",
      text: "CONTACT US",
      border: "transparent",
      borderHover: "atgBlue",
    },
    {
      linkTo: "/booking/demo",
      startingShadeR: "white",
      startingShadeL: "white",
      startingTextShade: "text-atgBlue",
      hoverShadeR: "buttonStart",
      hoverShadeL: "atgBlue",
      hoverTextShade: "text-white",
      text: "BOOK A DISCOVERY CALL",
      border: "atgBlue",
      borderHover: "transparent",
    },
  ];
  return (
    <div className="container my-14 py-4 px-4 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
      <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-gray-900 text-center">
        <span className="block">Complete Your Production </span>
        {/* <span className="text-center">Right Out of the Box</span> */}
      </h2>
      {/* <h3 className="text-xl text-atgBlue font-bold text-center">
        Pre-racked cartridges and Mouth Pieces
      </h3>
      <p className="text-gray-500 text-center py-8 text-base">
        AVD’s C3 Eazy-Press cartridges come pre-racked and ready to fill, right
        out the box. Simply load AVD’s pre-racked cartridge tray directly onto
        ATG’s RoboCAP RL-302VF filler - no more loading one-by-one. To cap,
        simply place AVD’s pre-racked mouthpiece tray over your filled C3
        Eazy-Press cartridges, and press up to 50 units at a time with ATG’s
        MonoPress
      </p>
      <CardList data={cardList} /> */}

      <div className="grid grid-cols-1 gap-6  lg:grid-cols-2 py-12">
        <div className="col-span-1 text-left flex flex-col items-center lg:items-start">
          <h3 className="mt-12 text-5xl tracking-normal font-extrabold text-atgBlue text-center lg:text-left">
            <span className="block xl:inline">MonoPress</span>
          </h3>
          <p className="mt-2 pb-6 text-xl tracking-wider font-bold text-gray-900 flex flex-col items-center">
            <span className="block xl:inline">Cartridge Press</span>
          </p>
          <div className="flex lg:hidden col-span-1 flex-col justify-end items-end">
            <img
              src="/products/packaging/MonoBlox_Packaging_2.jpg"
              alt="Picture of the author"
              className="z-0 w-full md:w-2/3 mx-auto"
            />
          </div>
          <p className="text-base pt-6 font-light tracking-wider py-5 text-gray-500 self-start">
            <span className=" block">
              The MonoBlox Product Suite consists of the MonoBlox, the
              MonoPress, and the MonoTray. This setup is ideal for filling &
              capping press top cartridges. The MonoBlox are custom cut for your
              cartridge sizes and are removable from the MonoTray so that the
              closing process can begin while the machine continues to fill.
              This eliminates any chance of leaking, clogging or oxidization.
            </span>
            <span className="py-4 block">
              The system derives off of air pressure and is the perfect addition
              to your cartridge production line.
            </span>
          </p>
          <ButtonPairs data={actionButtonPair} />
        </div>
        <div className="hidden sm:text-center col-span-1 text-left lg:flex items-center justify-center">
          <img
            src="/products/packaging/MonoBlox_Packaging_2.jpg"
            alt="Picture of the author"
            className="z-0 w-full mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse items-center lg:grid gap-8  md:grid-cols-2 my-8">
        <div className="col-span-1 text-left flex flex-col items-center lg:items-start ">
          <ReactPlayer
            url="https://youtu.be/ATgAEYPKpYM"
            controls
            width="100%"
            loop
            muted
          />
        </div>
        <div className="text-center col-span-1 lg:text-left flex flex-col items-start justify-start">
          <h2 className="my-6 text-3xl tracking-tight font-bold text-atgBlue sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl w-full">
            <span className="block ">MonoPress</span>
            <span className="block ">in Action</span>
          </h2>
          <p className="text-gray-500 text-left text-base">
            The MonoBlox Product Suite consists of the MonoBlox, the MonoPress,
            and the MonoTray. This setup is ideal for filling & capping press
            top cartridges. The MonoBlox are custom cut for your cartridge sizes
            and are removable from the MonoTray so that the closing process can
            begin while the machine continues to fill. This eliminates any
            chance of leaking, clogging or oxidization.
          </p>
        </div>
      </div>
    </div>
  );
}
export default PackagingDemo;
