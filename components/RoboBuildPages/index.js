import Image from 'next/image';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

// HOOKS
import useRobotContext from '../../hooks/useRobotContext';

// COMPONENTS
import Header from './header';

// DATA
import BuildInputs from './buildInputs';

function RoboBuildSelection() {
  const [activeHover, setActiveHover] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['emailAlert']);
  const {
    setProductType, setBuildReviewState, setBackToReviewState, setVessel, setHeating, setNozzle, buildDetails,
  } = useRobotContext();
  const { productType, machines } = buildDetails;
  const { productSelection } = BuildInputs;

  const ReviewState = async () => {
    setBuildReviewState(true);
    const data = {
      email: cookies.emailAlert,
      build: machines,
    }
    try {
      const res = await fetch('./api/subscribe', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (err) { }
  };

  const ProductInputs = productSelection.map((entry, index) => {
    const {
      bg, bgAct, title, icon, iconAct, context, baseUrl, recomVessel, recommHeating, recommNozzle, output, savings
    } = entry;
    return (
      <li
        key={index}
        onMouseOver={() => setActiveHover(index)}
        onMouseOut={() => setActiveHover(null)}
        onClick={() => setProductType(context, baseUrl, recomVessel, recommHeating, recommNozzle, output, savings)}
        className=" min-w-xs max-w-xs flex flex-col justify-end"
      >
        <div className={`relative rounded-2xl border-2 border-${(activeHover === index || productType === context) ? 'atgBlue' : 'transparent'}`}>
          <Image
            src={(activeHover === index || productType === context) ? bgAct : bg}
            alt="Picture of the author"
            layout="fill"
            className="object-center object-cover pointer-events-none rounded-2xl"
          />
          <div className="relative z-10 flex flex-col items-center">
            <Image
              src={(activeHover === index || productType === context) ? iconAct : icon}
              alt="Picture of the author"
              width={85}
              height={85}
              className="h-8 w-auto sm:h-10"
            />
            <p className={`${(activeHover === index || productType === context) ? 'text-atgBlue' : 'text-white'} text-xs font-semibold tracking-tight pb-3 lg:pb-6 `}>{title}</p>
          </div>
        </div>
      </li>
    );
  });

  return (
    <main className=" w-full  lg:col-span-7">
      <Header />
      <div className="py-12 lg:py-12 w-full">
        <h3 className="text-lg leading-6 self-start font-bold text-gray-900">1. Select Your Product</h3>
        <p className=" text-gray-500 text-xs self-start py-2">Lets start the build by selecting one of your products.</p>
        <ul className="w-full space-y-6 grid grid-cols-2 gap-x-6 gay-y-1 sm:gap-y-6 sm:space-y-0 lg:grid-cols-3 ">
          {ProductInputs}
        </ul>
      </div>
      <InputCollection />
      <div className={`${productType ? 'flex' : 'hidden'} flex flex-col items-center px-4 py-12`}>
        <h3 className="text-3xl font-bold text-gray-900">Everything is Set</h3>
        <p className=" text-gray-500 self-center text-sm py-2">
          Click “Review Set-Up” button to complete your build
          and review Your Robot components.
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:justify-around w-4/5 mx-auto ">
          <button
            onClick={() => setBackToReviewState(true)}
            className={`${machines.length > 0 ? 'visible' : 'hidden'} mt-4 w-52 mx-1 px-8 py-3 border-2 border-transparent hover:border-atgBlue rounded-full text-base bg-gradient-to-r  from-buttonStart to-atgBlue text-white hover:text-atgBlue hover:from-white hover:to-white `}
          >
            BACK
          </button>

          <button
            onClick={ReviewState}
            className="mt-4 w-52 mx-1 px-8 py-3 border-2 border-transparent hover:border-atgBlue rounded-full text-base bg-gradient-to-r  from-buttonStart to-atgBlue text-white hover:text-atgBlue hover:from-white hover:to-white "
          >
            REVIEW SET-UP
          </button>
        </div>
      </div>
    </main>
  );
}
export default RoboBuildSelection;

const InputCollection = () => {
  const { setVessel, setHeating, setNozzle, buildDetails } = useRobotContext();
  const { productType, vesselSize } = buildDetails;
  let vesselInput; let HeatInput; let
    NozzleInput;
  const currentProduct = BuildInputs[productType];
  if (currentProduct) {
    const { vessels, heating, nozzles } = currentProduct;

    if (vessels) vesselInput = <VesselInputs setVessel={setVessel} data={currentProduct} vesselSize={vesselSize} />;
    if (heating) HeatInput = <HeatInputs setHeating={setHeating} data={currentProduct} heating={buildDetails.heating} />;
    if (nozzles) NozzleInput = <NozzleInputs setNozzle={setNozzle} data={currentProduct} nozzle={buildDetails.nozzle} />;
    return (
      <>
        {vesselInput}
        {HeatInput}
        {NozzleInput}
      </>
    );
  }
  return null;
};
const VesselInputs = ({ data, setVessel, vesselSize }) => {
  let Inputs;
  if (data && data.vessels) {
    const { baseUrl } = data;
    Inputs = data.vessels.data.map((entry, index) => {
      const { title, context, recommended } = entry;
      const style = vesselSize === context ? 'border-atgBlue from-white to-white text-atgBlue' : 'border-transparent from-buttonStart to-atgBlue text-white';
      return (
        <div key={index} className="col-span-3 md:col-span-2 lg:col-span-1 flex flex-col items-center">
          <button
            onClick={() => setVessel(context, baseUrl)}
            className={`w-1/2 md:w-1/4 lg:w-full self-center inline-flex justify-center py-3 px-8 rounded-3xl focus:outline-none shadow-sm border-2  text-sm font-medium bg-gradient-to-r hover:border-atgBlue hover:from-white hover:to-white hover:text-atgBlue ${style}`}
          >
            {title}
          </button>
          <p className={`${recommended ? 'block' : 'hidden'} text-red-400 text-xs tracking-wide  pt-2 lg:pt-1`}>Recommended</p>
        </div>
      );
    });
    return (
      <div className="flex-col items-start px-4 py-2 text-center lg:text-left">
        <h3 className="text-lg leading-6 self-start font-bold text-gray-900">{data.vessels.header}</h3>
        <p className=" text-gray-500 text-xs self-start py-2">{data.vessels.subTitle}</p>
        <div className="mt-6 grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {Inputs}
        </div>
      </div>
    );
  }
  return null;
};

const HeatInputs = ({ data, setHeating, heating }) => {
  let Inputs;
  if (data && data.heating) {
    const { baseUrl } = data;
    Inputs = data.heating.data.map((entry, index) => {
      const { title, context, recommended } = entry;
      const style = heating === context ? 'border-atgBlue from-white to-white text-atgBlue' : 'border-transparent from-buttonStart to-atgBlue text-white';
      return (
        <div key={index} className="col-span-3 md:col-span-2 lg:col-span-1 flex flex-col items-center">
          <button
            onClick={() => setHeating(context, baseUrl)}
            className={`focus:outline-none self-center inline-flex justify-center py-3 px-16 rounded-3xl shadow-sm border-2  text-sm font-medium bg-gradient-to-r hover:border-atgBlue hover:from-white hover:to-white hover:text-atgBlue ${style}`}
          >
            {title}
          </button>
          <p className={`${recommended ? 'block' : 'hidden'} text-red-400 text-xs tracking-wide  pt-2 lg:pt-1`}>Recommended</p>
        </div>
      );
    });

    return (
      <div className="flex-col items-start px-4 py-2">
        <h3 className="text-lg leading-6 self-start font-bold text-gray-900">{data.heating.header}</h3>
        <p className=" text-gray-500 text-xs self-start py-2">{data.heating.subTitle}</p>
        <div className="mt-6 grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {Inputs}
        </div>
      </div>
    );
  }
  return null;
};

const NozzleInputs = ({ data, setNozzle, nozzle }) => {
  let Inputs;
  if (data && data.nozzles) {
    const { baseUrl } = data;
    Inputs = data.nozzles.data.map((entry, index) => {
      const { title, context, recommended, output, savings } = entry;
      const style = nozzle === context ? 'border-atgBlue from-white to-white text-atgBlue' : 'border-transparent from-buttonStart to-atgBlue text-white';
      return (
        <div key={index} className="col-span-3 md:col-span-2 lg:col-span-1 justify-self-center lg:justify-self-start flex flex-col items-center">
          <button
            onClick={() => setNozzle(context, baseUrl , output, savings)}
            className={`focus:outline-none self-center inline-flex justify-center py-3 px-8 rounded-3xl shadow-sm border-2  text-sm font-medium bg-gradient-to-r hover:border-atgBlue hover:from-white hover:to-white hover:text-atgBlue ${style}`}
          >
            {title}
          </button>
          <p className={`${recommended ? 'block' : 'hidden'} text-red-400 text-xs tracking-wide pt-2 lg:pt-1`}>Recommended</p>
        </div>
      );
    });

    return (
      <div className="flex-col items-start px-4 py-2">
        <h3 className="text-lg leading-6 self-start font-bold text-gray-900">{data.nozzles.header}</h3>
        <p className=" text-gray-500 text-xs self-start py-2">{data.nozzles.subTitle}</p>
        <div className="mt-6 flex flex-col lg:flex-row flex-wrap gap-3">
          {Inputs}
        </div>
      </div>
    );
  }
  return null;
};
