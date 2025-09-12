import Head from "next/head";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

// COMPONENTS
import PageContainer from "../../components/pageContainer";

// DATA
import npsData from "../../data/nps";

function NPS() {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [invalidPageData, setInvalidPageData] = useState(null);
  const router = useRouter();
  const slug = router.query;
  useEffect(async () => {
    if (slug.uuid) {
      try {
        const res = await fetch("./api/npsValidation", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(slug.uuid),
        });
        if (res.status === 200) {
          setInvalidPageData(false);
          setIsPageLoading(false);
        } else {
          let message;
          switch (res.status) {
            case 410:
              message = "Survey Has Already Been Completed";
              break;
            case 404:
              message = "The Survey is not Found";
              break;
            default:
              message = "Please Try Again At a Later Time";
          }
          setInvalidPageData(message);
          setIsPageLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, [slug]);

  let renderedComponent;
  if (isPageLoading) {
    renderedComponent = (
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
    );
  } else {
    if (!invalidPageData) {
      renderedComponent = <Survey slug={slug.uuid} />;
    } else {
      renderedComponent = (
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-24 px-12">
          <div className="col-span-2 pr-0 lg:pr-24">
            <h1 className="tracking-tight text-atgBlue  pt-6 font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl">
              Hmm.
            </h1>
            <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-gray-900 text-left mb-6 py-2">
              {invalidPageData}
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
      );
    }
  }

  return (
    <div>
      <Head>
        <title>ATG | NPS</title>
        <link rel="icon" href="/Bottles_Blue.svg" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}');
          `,
          }}
        />
        <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.GA_TRACKING_ID}')
      `,
        }}
      />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.pipedriveLeadboosterConfig = {base: 'leadbooster-chat.pipedrive.com',companyId: 1043272,playbookUuid: 'a6b15bd7-bb54-465c-bbba-8ddcd7a18270',version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn('LeadBooster already exists');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: 'o', n: n, h: h });},trigger: function (n) {this.q.push({ t: 't', n: n });},};}})()`,
          }}
        />
        <script
          src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
          async
        ></script>
      </Head>
      <PageContainer>{renderedComponent} </PageContainer>
    </div>
  );
}

function Survey({ slug }) {
  const { data, scoreRange } = npsData;
  const { register, handleSubmit, errors, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedScore, setSelectedScore] = useState(null);

  async function setScore(index) {
    setValue("score", index);
    setSelectedScore(index - 1);
  }
  const scoreScale = scoreRange.map((entry, index) => {
    return (
      <div
        className={`flex items-center border-0 lg:border-2 flex-grow ${
          index != 0 ? "lg:border-l-0" : "rounded-tl-lg rounded-bl-lg"
        }  ${
          index === scoreRange.length - 1 && "rounded-tr-lg rounded-br-lg"
        } ${errors.score ? "border-red-600" : "border-blue-200"}`}
      >
        <button
          id="score"
          ref={register(entry.requirement)}
          name="score"
          type="button"
          onClick={() => setScore(entry.value)}
          className={`form-button w-full ${
            index != 0 ? "lg:border-l-0" : "rounded-tl-lg rounded-bl-lg"
          }  ${
            index === scoreRange.length - 1 && "rounded-tr-lg rounded-br-lg"
          } hover:bg-gray-100 ${
            selectedScore === index ? "bg-atgBlue text-white" : "bg-white"
          }`}
        >
          {entry.value}
        </button>
      </div>
    );
  });
  const FormInputs = data.map((entry, index) => {
    const { span, label, name, requirement, inputType, options } = entry;
    let input;
    if (inputType === "Text") {
      input = (
        <div className="relative mt-1">
          <input
            name={name}
            id={name}
            className={`shadow-sm p-2 py-6 block w-full sm:text-sm border-2 ${
              errors[name] ? "border-red-600" : "border-blue-200"
            } focus:outline-none focus:border-atgBlue rounded-xl`}
            ref={register(requirement)}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              className={`${
                errors[name] ? "visible" : "hidden"
              } h-5 w-5 text-red-500`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      );
    } else {
      input = options.map((entry, index) => {
        return (
          <div key={index} className="flex items-center py-0.5">
            <input
              id={name}
              name={name}
              ref={register(requirement)}
              type={inputType}
              value={entry.label}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label
              htmlFor={name}
              className="ml-3 block text-base font-medium text-gray-700"
            >
              {entry.label}
            </label>
          </div>
        );
      });
    }
    return (
      <div key={index} className={`col-span-1 lg:col-span-${span}`}>
        <label className="block text-lg font-semibold py-4 text-gray-700">
          {label}
        </label>
        {input}
        {errors[name] && (
          <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
            {errors[name].message}
          </p>
        )}
      </div>
    );
  });

  const npsSubmit = async (data) => {
    setIsLoading(true);
    const request_body = {
      calendly_uuid: slug,
      score: data.score,
      praise_answer: data.praise,
      improvement_answer: data.improvement,
      client_tenure: data.duration,
      product_csv: data.products.join(),
    };
    try {
      const res = await fetch("./api/npsSubmission", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request_body),
      });
      if (res.status === 200) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setIsSubmitted(true);
      } else {
        console.log("wrong email");
      }
      setIsLoading(false);
    } catch (err) {}
  };
  if (!isSubmitted) {
    return (
      <div className="px-8 xl:px-0 max-w-7xl mx-auto my-20">
        <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center">
          <span className="block xl:inline">
            ATG Pharma Customer Satisfaction
          </span>
        </h2>
        <p className="text-center py-2 text-base text-gray-600">
          Thank you for participating in this survey! Your feedback will help us
          better serve customers like you.
        </p>
        <form
          onSubmit={handleSubmit(npsSubmit)}
          className="space-y-8 max-w-2xl mx-auto"
        >
          <div className="mt-2 grid grid-cols-1 gap-y-2 gap-x-4 lg:grid-cols-2">
            <div className="col-span-1 lg:col-span-2">
              <label className="block text-lg font-semibold py-4 text-gray-700">
                1. How likely is it that you would recommend ATG Pharma
                Technical Support to a friend or colleague?
              </label>
              <div className="rounded-md shadow-none lg:shadow-sm w-full flex flex-col lg:flex-row justify-between">
                {scoreScale}
              </div>
              {errors.score && (
                <p className=" text-xs tracking-wide  pt-2 lg:pt-1` text-red-600">
                  {errors.score.message}
                </p>
              )}
            </div>
            {FormInputs}
          </div>
          <div className="flex justify-center">
            {!isLoading ? (
              <button
                type="submit"
                className="flex items-center justify-center px-10 py-3 md:py-4 border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-md font-medium text-white hover:text-atgBlue md:px-14"
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                className="flex items-center justify-center px-10 py-3 md:py-4 border-2 border-transparent rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue text-md font-medium text-white md:px-14"
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
  } else {
    return (
      <div className=" max-w-7xl mx-auto my-16">
        <h1 className="text-6xl text-gray-900 font-black tracking-wide text-center">
          Thank You!
        </h1>
        <h2 className="text-3xl text-gray-900 font-bold tracking-wide text-center py-2">
          We Received Your Submission
        </h2>
        <p className="text-lg text-gray-500 tracking-wide text-center pt-8 ">
          We appreciate your feedback.
        </p>
        <img
          src="/build/Check Icon-145.svg"
          alt="Picture of the author"
          className="h-48 w-auto mx-auto my-24"
        />
      </div>
    );
  }
}
export default NPS;
