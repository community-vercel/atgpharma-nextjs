import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// COMPONENTS
import PageContainer from "../../components/pageContainer";
import EstimateReviewPages from "../../components/estimateReviewPages";

const Estimate = () => {
  const [loaded, setLoaded] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [invalid, setInvalid] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/orderValidation", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(id),
        });
        setLoaded(true);
        if (res.status === 200) {
          res.json().then((value) => setResponseData(value));
        } else {
          res.json().then((value) => {
            console.log(value.message);
            setInvalid(value.message ? value.message : "Not Found!");
          });
        }
      } catch (err) {
        setLoaded(true);
      }
    }
    !responseData && setInvalid("Invalid Request");

    if (id) fetchData();
  }, [id]);
  let renderedComponent;
  if (loaded && responseData) {
    renderedComponent = <EstimateReviewPages data={responseData} />;
  } else if (loaded && !responseData) {
    renderedComponent = (
      <PageContainer>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-24 px-12">
          <div className="col-span-2 pr-0 lg:pr-24">
            <h1 className="tracking-tight text-atgBlue  pt-6 font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl">
              Hmm.
            </h1>
            <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-gray-900 text-left mb-6 py-2">
              {invalid}
            </h2>
            <p className="text-atgBlue text-xl w-4/5 md:mx-0 mx-auto py-6 text-center lg:text-left">
              It seems like the page you are looking for can’t be found. Let us
              help guide you out and Get you back on the home.
            </p>
            <a
              href="/"
              className="w-4/5 mx-auto lg:w-1/3 mt-2 lg:mt-0 lg:mx-2 flex items-center justify-center px-12 py-3 md:py-4 border-2 border-transparent rounded-full shadow-sm bg-card text-sm  text-white hover:bg-gray-50"
            >
              HOME PAGE
            </a>
          </div>
          <img
            src="/404.png"
            alt="Picture of the author"
            className="z-0 w-full mx-auto"
          />
        </div>
      </PageContainer>
    );
  } else {
    renderedComponent = (
      <PageContainer>
        <div className="w-full text-center flex justify-center py-32">
          <svg
            className=" text-center animate-spin h-60  w-60 text-atgBlue self-center mr-4"
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
        </div>
      </PageContainer>
    );
  }
  return (
    <div>
      <Head>
        <title>ATG | Review Estimate</title>
        <link rel="icon" href="/Bottles_Blue.svg" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
      </Head>
      {renderedComponent}
    </div>
  );
};

export default Estimate;
