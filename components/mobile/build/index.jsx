import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

import Credentials from "../../form/contactForm/credentials";
import Source from "../../form/contactForm/source";

// DATA
import ContactData from "../../RoboBuildPages/formInputs";

const CONTAINERS = {
  Cartridges: {
    src: "products/carts.png",
    robo: "/build/carts/Cartridge_1G_H_2.jpg",
    batch: {
      "1 Litre": { src: "batches/1L.png" },
      "1 Gallon": { src: "batches/1G.png" },
      "3 Gallon": { src: "batches/3G.png" },
      "5 Gallon": { src: "batches/5G.png" },
      "10 Gallon": { src: "batches/10G.png" },
    },
    outputs: {
      "7,200 Per Day": { src: "output/7200.png" },
      "10,800 Per Day": { src: "output/10800.png" },
    },
  },
  Bottles: {
    src: "products/bottles.png",
    robo: "/build/bottles/Bottles_2.jpg",
    outputs: {
      "8,400 Per Day": { src: "output/8400.png" },
      "12,600 Per Day": { src: "output/12600.png" },
      "17,500 Per Day": { src: "output/17500.png" },
      "21,000 Per Day": { src: "output/21000.png" },
    },
  },
  Capsules: {
    src: "products/capsules.png",
    robo: "/build/caps/Capsule_1G_H_1.jpg",
    batch: {
      "1 Litre": { src: "batches/1L.png" },
      "1 Gallon": { src: "batches/1G.png" },
      "3 Gallon": { src: "batches/3G.png" },
      "5 Gallon": { src: "batches/5G.png" },
      "10 Gallon": { src: "batches/10G.png" },
    },
    outputs: {
      "12,000 Per Day": { src: "output/12000.png" },
      "24,000 Per Day": { src: "output/24000.png" },
      "36,000 Per Day": { src: "output/36000.png" },
      "48,000 Per Day": { src: "output/48000.png" },
    },
  },
  Gummies: {
    src: "products/gummies.png",
    robo: "/build/gummies/Gummy_1G_H_2.jpg",
    batch: {
      "1 Litre": { src: "batches/1L.png" },
      "1 Gallon": { src: "batches/1G.png" },
      "3 Gallon": { src: "batches/3G.png" },
      "5 Gallon": { src: "batches/5G.png" },
      "10 Gallon": { src: "batches/10G.png" },
    },
    outputs: {
      "10,500 Per Day": { src: "output/10500.png" },
      "15,000 Per Day": { src: "output/15000.png" },
      "20,000 Per Day": { src: "output/20000.png" },
      "25,000 Per Day": { src: "output/25000.png" },
    },
  },
  Balms: {
    src: "products/balms.png",
    robo: "/build/balms/Balm_1G_H_2.jpg",
    batch: {
      "1 Litre": { src: "batches/1L.png" },
      "1 Gallon": { src: "batches/1G.png" },
      "3 Gallon": { src: "batches/3G.png" },
      "5 Gallon": { src: "batches/5G.png" },
      "10 Gallon": { src: "batches/10G.png" },
    },
    outputs: {
      "7,200 Per Day": { src: "output/7200.png" },
      "10,800 Per Day": { src: "output/10800.png" },
    },
  },
  Creams: {
    src: "products/creams.png",
    robo: "/build/creams/Cream_1G_2.jpg",
    batch: {
      "1 Litre": { src: "batches/1L.png" },
      "1 Gallon": { src: "batches/1G.png" },
      "3 Gallon": { src: "batches/3G.png" },
      "5 Gallon": { src: "batches/5G.png" },
      "10 Gallon": { src: "batches/10G.png" },
    },
    outputs: {
      "8,400 Per Day": { src: "output/8400.png" },
      "12,600 Per Day": { src: "output/12600.png" },
      "17,500 Per Day": { src: "output/17500.png" },
      "21,000 Per Day": { src: "output/21000.png" },
    },
  },
};

const OPTIONS = {
  container: {
    h1: "What are",
    h1Span: "You Filling?",
    p: "Lets start the build by selecting",
    pSpan: "one of your products.",
  },
  batch: {
    h1: "What is your",
    h1Span: "Production",
    h1Extra: "Batch Size?",
    p: "5 Vessels Available for this Product.",
  },
  output: {
    h1: "What is",
    h1Span: "your desired",
    h1Extra: "daily ouput?",
    p: "Daily output is determined by the amount of dispense product you would like to achieve with one machine operated for 8 hours.",
  },
};

function Build() {
  const [page, setPage] = useState(0);
  const [container, setContainer] = useState(Object.entries(CONTAINERS)[0]);
  const [batch, setBatch] = useState(1);
  const [output, setOutput] = useState(1);

  const map = {
    0: <Home />,
    1: (
      <Selection
        data={OPTIONS.container}
        state={container}
        setState={setContainer}
        options={Object.entries(CONTAINERS)}
      />
    ),
    2: (
      <Selection
        data={OPTIONS.batch}
        state={
          container[1]?.batch
            ? Object.entries(container[1]?.batch)[batch]
            : null
        }
        setState={(e) =>
          setBatch(
            Object.entries(container[1]?.batch).findIndex((v) => v[0] === e[0])
          )
        }
        options={Object.entries(CONTAINERS[container[0]]?.batch ?? {})}
      />
    ),
    3: (
      <Selection
        data={OPTIONS.output}
        state={Object.entries(container[1]?.outputs)[output]}
        setState={setOutput}
        setState={(e) =>
          setOutput(
            Object.entries(container[1]?.outputs).findIndex(
              (v) => v[0] === e[0]
            )
          )
        }
        options={Object.entries(CONTAINERS[container[0]]?.outputs ?? {})}
      />
    ),
    4: <Confirm container={container} />,
    5: <Checkout container={container} />,
  };
  if (!container[1]?.batch && page === 2) setPage(3);
  return (
    <div className="lg:hidden my-6">
      <div className="flex flex-row justify-between items-center px-6">
        <a href="/">
          <img
            src="/Logo_Coloured.svg"
            alt="Picture of the author"
            className="w-28 h-20 mx-auto "
          />
        </a>
        <p className="font-semibold text-sm">Fill Confident.</p>
      </div>
      {map[page]}
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

function Home({ setPage }) {
  return (
    <div className="lg:hidden">
      <img
        src="/build/mobile/base.png"
        alt="Picture of the author"
        className="w-2/3 h-auto mx-auto "
      />
      <div className="px-12 ">
        <h1 className="text-5xl text-atgBlue tracking-tight font-copy font-medium leading-12">
          <span className="block">Build</span>
          <span className="block">Your</span>
          <span className="block">Machine.</span>
        </h1>
        <p className="my-2 text-lg tracking-tighter font-copy font-medium">
          The all-in-one system built
          <span className="block">to scale to your business goals.</span>
        </p>
      </div>
    </div>
  );
}

function Selection({ data, options, state, setState }) {
  if (!data) return;
  const { h1, h1Span, h1Extra, p, pSpan } = data;
  return (
    <div className="lg:hidden">
      <div className="px-6 ">
        <h1 className="text-4xl text-atgBlue font-copy font-medium mt-2 tracking-tight leading-9">
          <span className="block">{h1}</span>
          {h1Span && <span className="block">{h1Span}</span>}
          {h1Extra && <span className="block">{h1Extra}</span>}
        </h1>
        <p className="my-2 text tracking-tighter font-copy font-medium">
          {p}
          {pSpan && <span className="block">{pSpan}</span>}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col justify-center gap-3">
            {options.map((c, index) => (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => {
                    setState(options[index]);
                  }}
                  className={`${
                    state[0] === c[0]
                      ? "bg-atgBlue text-white"
                      : " border border-gray-300"
                  } rounded-3xl w-full py-3 text-sm flex items-center justify-between px-6`}
                >
                  {c[0]}
                  {state[0] === c[0] ? (
                    <CheckCircleIcon
                      className="text-white h-6 w-6 "
                      aria-hidden="true"
                    />
                  ) : (
                    <div className="p-2 border border-gray-300 rounded-full" />
                  )}
                </button>
              </div>
            ))}
          </div>
          <img
            src={`/build/mobile/${state[1].src}`}
            alt="Picture of the author"
            className="w-full h-auto mx-auto mt-auto "
          />
        </div>
      </div>
    </div>
  );
}

function Navigation({ page, setPage }) {
  if (page === 5) return <></>;
  return (
    <div className="flex flex-row justify-between px-6 my-4">
      {page > 0 ? (
        <div className="flex flex-row justify-end items-center gap-3">
          <button
            type="button"
            onClick={() => setPage(page - 1)}
            className="flex flex-row justify-end items-center gap-3 "
          >
            <div className="rounded-full border border-gray-400 px-3 py-2 text-2xl  text-gray-400 font-light">
              &larr;
            </div>
            <p className="text-lg tracking-tighter font-copy font-medium text-gray-400">
              Back.
            </p>
          </button>
        </div>
      ) : (
        <div />
      )}
      <div>
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          className="flex flex-row justify-end items-center gap-3 "
        >
          <p className="text-lg tracking-tighter font-copy font-medium">
            {!page ? "Get Started." : "Next."}
          </p>
          <div className="rounded-full bg-atgBlue px-3 py-2 text-2xl  text-white font-light">
            &rarr;
          </div>
        </button>
      </div>
    </div>
  );
}
export default Build;

function Confirm({ container }) {
  return (
    <div className="lg:hidden">
      <div className="px-6 ">
        <h3 className="text-3xl text-atgBlue font-copy font-medium text-center pt-4 leading">
          Your Build Summary
        </h3>
        <h3 className="text-3xl text-black cont-copy font-semibold text-center pt-0.5">
          {container[0]} Filling Setup Includes:
        </h3>
        <ul className="text-black font-semibold text-left max-w-xs  mx-auto pt-4 list-disc text-sm ">
          <li className="grid grid-cols-5 gap-2 items-center pb-1">
            <div className="p-1 bg-atgBlue w-max rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <span className="col-span-4">Pressure Vessel</span>
          </li>
          <li className="grid grid-cols-5 gap-2 items-center pb-1">
            <div className="p-1 bg-atgBlue w-max rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <span className="col-span-4">8000D pressure controller</span>
          </li>
          <li className="grid grid-cols-5 gap-2 items-center pb-1">
            <div className="p-1 bg-atgBlue w-max rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <span className="col-span-4">
              12 psi Point of Use Filter regulator
            </span>
          </li>
          <li className="grid grid-cols-5 gap-2 items-center pb-1">
            <div className="p-1 bg-atgBlue w-max rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <span className="col-span-4">Dispense Nozzle Setups</span>
          </li>
        </ul>
        <img
          src={`${container[1].robo}`}
          alt="Picture of the author"
          width={350}
          height={350}
          className="self-center mx-auto "
        />
        <p className="text-xxs font-copy font-light text-black text-center pt-1">
          *Image shown for illustration purposes only. Robot may not be as
          shown*
        </p>
        <p className="font-copy font-semibold text-sm text-center pb-2">
          <span className="font-bold">Please note*</span> The RoboCAP can be
          adjusted for multiple setups. Use one Robot to fill{" "}
          <span className="underline">multiple</span> products. Control your
          production the way you want it.
        </p>
      </div>
    </div>
  );
}

function Checkout({ container }) {
  const router = useRouter();
  const { register, handleSubmit, errors, setError, setValue, clearErrors } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const contactSubmit = async (data) => {
    data.build = [{ productType: container[0] }];
    data.leadSrc = "";
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
        router.push("/thankyou");
      } else {
        console.log("wrong email");
      }
      setIsLoading(false);
    } catch (err) {}
  };

  return (
    <div className="flex flex-col justify-start w-full py-8 px-6">
      <h2 className="text-atgBlue text-4xl font-copy font-medium tracking-wide text-center">
        We are almost done
      </h2>
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
  );
}
