import Image from 'next/image';
import { Fragment, useState } from 'react';

// HOOKS
import useRobotContext from '../../hooks/useRobotContext';

function MobileBanner() {
  const { buildDetails } = useRobotContext();
  const {
    productType, vesselSize, heating, nozzle, imageRoot,
  } = buildDetails;

  const [isModalState, setIsModalState] = useState(false);
  const mobilImageRoot = imageRoot.replace(/.jpg/g, '_mb.jpg');
  return (
    <>
      <div className={`grid-cols-${productType ? '2 md:grid-cols-3' : '1'}  grid lg:hidden w-full bg-atgLightBlue p-4 sticky top-20 z-40`}>
        <div className="divide-y-2 divide-white w-4/5 md:col-span-2">
          <h4 className="text-white text-sm font-bold py-2">
            <span className={`${productType ? 'block' : ''}`}>RoboCAP </span>
            <span>
              {productType}
              Filling
            </span>
          </h4>
          <p className="text-white text-xs font-light py-2">
            <span className="block py-0.5">A RoboCAP Saves You</span>
            <span className="font-bold">$16,480 monthly</span>
          </p>
        </div>
        <div className={`${productType ? 'visible' : 'hidden'} relative border-2 border-atgBlue rounded-xl mt-2 max-w-lg`} onClick={() => setIsModalState(true)}>
          <Image
            src={mobilImageRoot}
            alt="Picture of the author"
            layout="fill"
            // objectFit="cover"
            // objectPosition="center"
            className="z-0 rounded-xl"
            // width={170}
            // height={140}
            // className="z-0 border-2 border-gray-500 "
          />
        </div>
      </div>
      <div className={`${isModalState ? 'visible' : 'hidden'} fixed z-50  inset-0`}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0`">
          <div className={`${isModalState ? 'visible' : 'hidden'}  fixed inset-0  transition-opacity`} aria-hidden="true">
            <div className="absolute inset-0 bg-gray-200 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-top sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className={`${isModalState ? 'visible' : 'hidden'} inline-block align-bottom bg-white rounded-3xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:py-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline`}>
            <div className="flex flex-col justify-between">
              <button onClick={() => setIsModalState(false)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 self-end">
                <span className="sr-only">Close menu</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={imageRoot}
                alt="Picture of the author"
                width={370}
                height={340}
                className="z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileBanner;
