import Image from "next/image";
import ButtonPairs from "../buttons/pairedButtons";

function ProductHeaderCTA({ data }) {
  const {
    title,
    subTitle,
    actionButtonPair,
    imageRoot,
    descriptionP1,
    descriptionP2,
    mixerLogo,
  } = data;
  return (
    <div className="grid grid-cols-1 gap-8  lg:grid-cols-2 ">
      <div className="col-span-1 text-left flex flex-col items-center lg:items-start">
        <h3 className="mt-12 text-5xl tracking-normal flex flex-row gap-4  items-end font-extrabold text-atgBlue text-center lg:text-left">
          <span className="block xl:inline">{title}</span>
          {mixerLogo && (
            <img
              src={mixerLogo}
              alt="Icons"
              width={150}
              height={150}
              className="self-center"
            />
          )}
        </h3>
        <p className="mt-2 pb-6 text-xl tracking-wider font-bold text-gray-900 flex flex-col items-center">
          <span className="block xl:inline">{subTitle}</span>
        </p>
        <div className="flex lg:hidden col-span-1 flex-col justify-end items-end">
          <img
            src={imageRoot}
            alt="Picture of the author"
            className="z-0 w-full md:w-2/3 mx-auto"
          />
        </div>
        <p className="text-sm lg:text-base pt-6 font-light tracking-wider py-5 text-gray-500 self-start">
          <span className=" block">{descriptionP1}</span>
          <span className="py-4 block">{descriptionP2}</span>
        </p>
        <ButtonPairs data={actionButtonPair} />
      </div>
      <div className="hidden sm:text-center col-span-1 text-left lg:flex items-center justify-center">
        <img
          src={imageRoot}
          alt="Picture of the author"
          className="z-0 w-full mx-auto"
        />
      </div>
    </div>
  );
}

export default ProductHeaderCTA;
