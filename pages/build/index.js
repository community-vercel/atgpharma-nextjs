import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

// CONTEXT
import { RoboCAPContext } from "../../context";

// COMPONENTS
import PageContainer from "../../components/pageContainer";
import BuildSelection from "../../components/RoboBuildPages";
import FinalizedBuild from "../../components/RoboBuildPages/finalizedPage";
import MobileBuild from "../../components/mobile/build";
import SEOHead from "../../components/seo";

function Build() {
  // const { register, handleSubmit, errors, setValue, clearErrors } = useForm();
  const [state, dispatch] = useContext(RoboCAPContext);
  const { isModalState, isBuildFinalized, imageRoot } = state;
  const [ROIModal, setROIModal] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["emailAlert"]);
  let currentPage;

  if (!isBuildFinalized) {
    currentPage = <BuildSelection />;
  } else {
    currentPage = <FinalizedBuild />;
  }
  useEffect(() => {}, [state]);

  useEffect(() => {
    if (cookies.emailAlert) {
      dispatch({
        type: "SET_MODAL_STATE",
        payload: false,
      });
    }
  }, [cookies]);

  const subscribe = async (data) => {
    setCookie("emailAlert", data.email, { path: "/" });
    try {
      const res = await fetch("./api/subscribe", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {}
    dispatch({
      type: "SET_MODAL_STATE",
      payload: false,
    });
  };

  if (!state.submitted) {
    return (
      <div>
        <SEOHead
          data={{
            title:
              "Build and Price | ATG Pharma Filling and Packaging Equipment",
            description:
              "ATG Pharma designs custom filling and packaging equipment for the pharmaceutical, cosmetic, cannabis industry.",
          }}
        />
        <MobileBuild />
        <div className="hidden lg:block">
          <PageContainer>
            <div className="w-full lg:grid grid-cols-12 gap-16  max-w-7xl mx-auto my-0 lg:my-10 px-4 sm:px-6 lg:py-16 lg:px-8 ">
              <aside className=" hidden lg:block  col-span-5">
                <div className="sticky top-6 py-4 space-y-4 flex flex-col  text-left">
                  <h1 className="text-left text-3xl  leading-8 font-bold tracking-tight text-atgBlue sm:text-4xl ">
                    Build Your Filler.
                  </h1>
                  <p className=" text-gray-500 text-sm text-left">
                    The all-in-one system built to scale to your business goals.
                  </p>
                  <Image
                    src={imageRoot}
                    alt="Picture of the author"
                    width={750}
                    height={650}
                    className="z-0"
                  />
                  <p className=" text-gray-500 text-xs text-center ">
                    Image shown for illustration purposes only. Robot may not be
                    as shown*
                  </p>
                  <div className="grid grid-cols-3 gap-3 w-full">
                    <div className="col-span-1 flex flex-col justify-center items-center">
                      <h4 className=" text-atgBlue text-md flex flex-row justify-center items-center">
                        {state.productType ? `$${state.savings}` : "$ -"}
                        <svg
                          onClick={() => setROIModal(true)}
                          className="h-4 w-4 text-atgBlue self-center transform -translate-y-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </h4>
                      <p className=" text-gray-500 text-xs">Savings Per Year</p>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-center border-r-2 border-l-2 border-gray-500">
                      <h4 className=" text-atgBlue text-md">6ft x 3ft</h4>
                      <p className=" text-gray-500 text-xs">Footprint</p>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-center">
                      <h4 className=" text-atgBlue text-md">
                        &#8764; {state.productType ? state.output : "-"}
                      </h4>
                      <p className=" text-gray-500 text-xs">Output/Hourly</p>
                    </div>
                  </div>
                </div>
              </aside>
              {currentPage}
              <div
                className={`${
                  ROIModal ? "visible" : "hidden"
                } fixed z-50  inset-0`}
              >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0`">
                  <div
                    className={`${
                      ROIModal ? "visible" : "hidden"
                    }  fixed inset-0  transition-opacity`}
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-gray-200 opacity-75" />
                  </div>
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <div
                    className={`${
                      ROIModal ? "visible" : "hidden"
                    } inline-block align-bottom bg-white rounded-3xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:py-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline`}
                  >
                    <div className="flex flex-col justify-between">
                      <button
                        onClick={() => setROIModal(false)}
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 self-end"
                      >
                        <span className="sr-only">Close menu</span>
                        <svg
                          className="h-5 w-5 text-atgBlue"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <div className="flex flex-col justify-center items-center px-4 ">
                        <h3 className="font-bold text-gray-800 text-lg">
                          Return On Investment Calculator
                        </h3>
                        <p className="text-center text-gray-400 py-4 text-sm">
                          Use our ROI Calculator to see how much money you could
                          save switching from Hand Filling to Automatic Filling
                        </p>
                        <a
                          href="/roi"
                          className="text-center mb-4 col-span-1 inline-flex justify-center w-1/2 px-4 py-4 rounded-3xl border border-transparent shadow-sm  bg-card text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                        >
                          LEARN MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </div>
      </div>
    );
  }
  return (
    <div>
      <PageContainer>
        <div className=" max-w-7xl mx-auto my-16">
          <h1 className="text-6xl text-gray-900 font-black tracking-wide text-center">
            Thank You!
          </h1>
          <h2 className="text-3xl text-gray-900 font-bold tracking-wide text-center py-2">
            We Received Your Request
          </h2>
          <p className="text-lg text-gray-500 tracking-wide text-center pt-8 ">
            You will receive the email from our sales representative within the
            next 48 hours.
          </p>
          <img
            src="/build/Check Icon-145.svg"
            alt="Picture of the author"
            className="h-48 w-auto mx-auto my-24"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12">
          <div className=" col-span-1 relative">
            <Image
              src="/contact/Banner_Left Side.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="z-0"
            />
            <main className="z-10 p-4 py-12 relative">
              <div className="px-6 sm:px-8 flex flex-col items-center justify-center">
                <h3 className="text-4xl pt-12 font-bold flex flex-col items-center justify-center text-center">
                  <span className="block text-white">Want to See Our</span>
                  <span className="block text-white">Equipment in Action?</span>
                </h3>
                <p className="text-md pt-8 pb-12 lg:pb-28 font-light text-white text-center">
                  <span className="inline lg:block pt-5">
                    Join us for free demos, and experience how we can help you
                  </span>
                  <span>
                    increase your production through-put and efficiency.
                  </span>
                </p>
                <div className="flex justify-center">
                  <a
                    href="booking/demo"
                    className=" mx-2 rounded-full flex items-center justify-center px-12 py-3 border-2 text-base md:py-4  border-transparent text-atgBlue bg-white hover:bg-atgBlue hover:text-white hover:border-atgBlue"
                  >
                    BOOK A DISCOVERY CALL
                  </a>
                </div>
              </div>
            </main>
          </div>
          <div className=" col-span-1 relative">
            <Image
              src="/contact/Banner_Right_Side.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="z-0"
            />
            <main className="z-10  p-4 py-12 relative">
              <div className="px-6 sm:px-8 flex flex-col items-center justify-center">
                <h3 className="text-4xl pt-12  font-bold flex flex-col items-center justify-center">
                  <span className="block text-white">Do You Need</span>
                  <span className="block text-white">Technical Support?</span>
                </h3>
                <p className="text-md pt-8  pb-12 lg:pb-28 font-light text-white text-center">
                  <span className="inline lg:block pt-5">
                    No matter what happens, our Tech Support team is here to
                    help.
                  </span>
                  <span className="inline">
                    We know how to build it and will help you to fix it.
                  </span>
                </p>
                <div className="flex justify-center">
                  <a
                    href="booking/support"
                    className=" mx-2 rounded-full flex items-center justify-center px-12 py-3 border-2 text-base md:py-4  border-transparent text-atgBlue bg-white hover:bg-atgBlue hover:text-white hover:border-atgBlue"
                  >
                    BOOK SUPPORT
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default Build;
