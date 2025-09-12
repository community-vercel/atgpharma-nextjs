import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// COMPONENTS
import Carousel from "react-multi-carousel";
import { useCookies } from "react-cookie";
import Header from "./header";

// HOOKS
import useRobotContext from "../../hooks/useRobotContext";

// COMPONENTS
import "react-multi-carousel/lib/styles.css";
import Credentials from "../form/contactForm/credentials";
import Source from "../form/contactForm/source";

// DATA
import ContactData from "./formInputs";

function FinalizedPage() {
  const { register, handleSubmit, errors, setValue, clearErrors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const {
    setImageRoot,
    addBuild,
    editBuild,
    submit,
    deleteBuild,
    buildDetails,
  } = useRobotContext();
  const { machines, index } = buildDetails;
  const [currentIndex, setCurrentIndex] = useState(index);
  const [geo, setGeo] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(
    machines[machines.length - 1].productType
  );
  const [cookies, setCookie, removeCookie] = useCookies(["machines"]);
  useEffect(() => {
    setCookie("machines", machines, { path: "/" });
  }, [machines]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setGeo(`${position.coords.latitude},${position.coords.longitude}`);
    });
  }, []);

  const contactSubmit = async (data) => {
    let location = JSON.parse(JSON.stringify(geo));
    data.build = machines;
    data.leadSrc = cookies.leadSrc ? cookies.leadSrc : "";
    data.lat = location?.split(",")[0] ?? null;
    data.long = location?.split(",")[1] ?? null;
    setIsLoading(true);
    try {
      const res = await fetch("./api/build", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        submit();
      } else {
        console.log("wrong email");
      }
      setIsLoading(false);
    } catch (err) {}
  };

  return (
    <main className="w-full lg:col-span-7">
      <Header />
      <div className=" flex flex-col items-center justify-center lg:w-4/5 mx-auto">
        <div className="mt-24 mb-4 w-full flex px-1 lg:px-0 self-center flex-col text-center bg-card rounded-3xl shadow">
          <div className="flex flex-row justify-around items-center">
            <img
              src={`/build/${currentProduct}.svg`}
              alt="Picture of the author"
              width={120}
              height={120}
              className="transform -translate-y-2/4	self-center"
            />
          </div>
          <div className=" -mt-9 flex flex-col pb-8">
            <h3 className="text-3xl text-white font-bold">
              YOUR BUILD SUMMARY:
            </h3>
            <CarouselMachines
              machines={machines}
              setImageRoot={setImageRoot}
              setCurrentIndex={setCurrentIndex}
              setCurrentProduct={setCurrentProduct}
            />
          </div>
        </div>
        <div className="flex flex-row justify-around items-start w-full">
          <div className="flex flex-col justify center">
            <button
              onClick={() => editBuild(currentIndex)}
              className="text-center col-span-1 inline-flex items-center justify-center  px-8 py-2 border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-md font-medium text-white hover:text-atgBlue underline"
            >
              <span className="pr-2">EDIT</span>
              <svg
                className="h-5 w-5 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button
              onClick={() => deleteBuild(currentIndex)}
              className="text-atgBlue underline text-xs pt-1 hover:text-gray-500"
            >
              {" "}
              REMOVE
            </button>
          </div>
          <button
            onClick={() => addBuild()}
            className="text-center col-span-1 inline-flex items-center justify-center  px-8 py-2 border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-md font-medium text-white hover:text-atgBlue underline"
          >
            <span className="pr-2">ADD-SET-UP</span>
            <svg
              className="h-5 w-5 self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center my-8 text-center">
          <h3 className="text-gray-800 text-2xl font-bold tracking-wide">
            Would You Like to Add Another Setup?
          </h3>
          <p className="text-gray-500 text-md self-center w-4/5 py-2">
            <span>
              The RoboCAP can be adjusted for multiple setups. Use one Robot to
              fill multiple products.
            </span>
            <span className="block">
              Control your production the way you want it.
            </span>
          </p>
        </div>
        <h2 className="text-gray-800 text-4xl font-bold tracking-wide text-center">
          We are almost done
        </h2>
        <div className="flex flex-col justify-start w-full py-8">
          <h4 className="text-gray-800 text-xl font-bold ml-6">
            5. Your Build Summary
          </h4>
          <p className="leading-6 py-4 text-gray-500 text-sm ml-6">
            <span className="block">Build information is being analyzed,</span>
            <span className="block">
              please provide company information for a quotation.
            </span>
          </p>
          <form onSubmit={handleSubmit(contactSubmit)} className="px-4">
            <Credentials
              data={ContactData.contact}
              register={register}
              errors={errors}
            />
            <div className="my-3">
              <Source
                data={ContactData.source}
                register={register}
                errors={errors}
                setFormValue={setValue}
                clearFormError={clearErrors}
              />
            </div>
            <div className="flex justify-center pt-4">
              {!isLoading ? (
                <button
                  type="submit"
                  className="flex items-center justify-center px-10 py-3 md:py-4 border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-md font-medium text-white hover:text-atgBlue md:px-14"
                >
                  Submit Request
                </button>
              ) : (
                <button
                  type="button"
                  className="flex items-center justify-center px-10 py-3 md:py-4 border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-md font-medium text-white hover:text-atgBlue md:px-14"
                  disabled
                >
                  <svg
                    className="animate-spin h-8 w-8 text-white self-center mr-4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    enableBackground="new 0 0 40 40"
                    xml="preserve"
                  >
                    <path
                      opacity="0.2"
                      d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                    />
                    <path d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z" />
                  </svg>
                  Processing
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

function CarouselMachines({
  machines,
  setImageRoot,
  setCurrentIndex,
  setCurrentProduct,
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselProducts = machines
    .slice(0)
    .reverse()
    .map((entry, index) => {
      const { productType, vesselSize, heating, nozzle } = entry;
      return (
        <>
          <h4 className="text-xl text-white font-bold py-2">
            {productType === "Candies" ? "Gummies" : productType} Filling Set-up
            Includes:
          </h4>
          <ul className="text-white text-left pl-20 lg:pl-24 py-4 list-disc">
            <li>{vesselSize} Pressure Vessel</li>
            <li>8000D pressure controller</li>
            <li>12 psi Point of Use Filter regulator</li>
            {heating && <li>Heating Jacket and tubing wraps</li>}
            {heating && <li>Heating controllers</li>}
            <li>{nozzle} Dispense Nozzle Setups</li>
          </ul>
        </>
      );
    });
  return (
    <Carousel
      responsive={responsive}
      ssr
      arrows
      showDots
      afterChange={(previousSlide, { currentSlide, onMove }) => {
        setImageRoot(currentSlide);
        setCurrentIndex(currentSlide);
        const length = machines.length - 1;
        const index = Math.abs(currentSlide - length);
        setCurrentProduct(machines[index].productType);
      }}
    >
      {carouselProducts}
    </Carousel>
  );
}

export default FinalizedPage;
