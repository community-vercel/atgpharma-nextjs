import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

// DATA
import roiData from "../../data/roi";
import Script from "next/script";

// COMPONENTS
import PageContainer from "../../components/pageContainer";
import ROIForm from "../../components/form/roiform";
import ROIModal from "../../components/modal/roi";
import ThankYou from "../../components/thankYou";

function ROI() {
  const [openModal, setOpenModal] = useState(false);
  const [profitMargin, setProfitMargin] = useState(0.5);
  const [modalType, setModalType] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const { register, handleSubmit, errors, getValues } = useForm();
  const {
    conferenceGrid,
    ContainerOutputs,
    ContainerPricing,
    manualRate,
    autoRate,
  } = roiData;
  const [desiredOutput, setDesiredOutput] = useState(
    ContainerOutputs[conferenceGrid[1].context]
  );
  const [hourlyRate, setHourlyRate] = useState({});
  const [labourCost, setLabourCost] = useState({});
  const [profits, setProfits] = useState({});
  const [monthlyOutput, setMonthlyOutput] = useState(40);
  const [selectedOutput, setSelectedOutput] = useState(
    ContainerOutputs[conferenceGrid[1].context][1]
  );
  const [productPricing, setProductPricing] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(
    conferenceGrid[1].context
  );
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  async function setParams(data) {
    setProductPricing(ContainerPricing[selectedProduct]);
    let revenue = selectedOutput * 1000 * data.price;
    let autoHour = Math.round(
      (selectedOutput * 1000) / autoRate[selectedProduct]
    );
    let manualHour = Math.round(
      (selectedOutput * 1000) / manualRate[selectedProduct]
    );

    setHourlyRate({
      auto: autoHour,
      manual: manualHour,
    });
    setLabourCost({
      auto: autoHour * parseFloat(data.hourly),
      manual: manualHour * parseFloat(data.hourly),
    });
    setProfits({
      auto: Math.round(
        ((revenue - autoHour * parseFloat(data.hourly)) / revenue) * 100
      ),
      manual: Math.round(
        ((revenue - manualHour * parseFloat(data.hourly)) / revenue) * 100
      ),
    });
    await setShowResults(true);
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  }

  async function submitReport() {
    setIsLoading(true);
    let data = getValues();
    let units = (productPricing / (data.price * profitMargin))
      .toFixed(0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let productionOut = (monthlyOutput * 1000)
      .toFixed(0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let revenue = (selectedOutput * 1000 * data.price)
      .toFixed(0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let body = {
      production_output: productionOut,
      units_to_sell: units,
      price_estimate: productPricing
        .toFixed(0)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      revenue: revenue,
      email: data.email,
      manual_profits: profits.manual.toString(),
      atg_profits: profits.auto.toString(),
      manual_hours: hourlyRate.manual.toString(),
      atg_hours: hourlyRate.auto.toString(),
      manual_labour: labourCost.manual.toString(),
      atg_labour: labourCost.auto.toString(),
    };
    try {
      const res = await fetch("/api/roi", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      setIsLoading(false);
      setSubmitted(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <Head>
        <title>ATG | ROI</title>
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
      <ROIModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalType={modalType}
        profitMargin={profitMargin}
        setProfitMargin={setProfitMargin}
      />
      {!submitted ? (
        <PageContainer>
          <div className="container mt-14 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center mb-1">
              <span className="block xl:inline">ROI Calculator</span>
            </h2>
            <p className="text-base lg:text-lg my-2 leading-6 text-gray-500 text-center">
              <span className="block">
                Here’s how quickly your investment in ATG’s automation will pay
                for itself:
              </span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(setParams)}
            className="container my-10 px-8 xl:px-0 flex flex-col items-center max-w-6xl mx-auto"
          >
            <h3 className="text-2xl lg:text-4xl  font-semibold text-atgBlue text-center mb-8">
              Describe Your Production
            </h3>
            <ROIForm
              roiData={roiData}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              monthlyOutput={monthlyOutput}
              setMonthlyOutput={setMonthlyOutput}
              register={register}
              errors={errors}
              desiredOutput={desiredOutput}
              setDesiredOutput={setDesiredOutput}
              selectedOutput={selectedOutput}
              setSelectedOutput={setSelectedOutput}
            />
            <button
              type="submit"
              className="w-52 mt-8 inline-flex justify-center py-4 px-8  border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-md font-semibold text-white hover:text-atgBlue focus:outline-none "
            >
              SUBMIT
            </button>
          </form>
          <div
            className={`${
              showResults ? "flex" : "hidden"
            } container my-12 px-8 xl:px-0  flex-col items-center max-w-7xl mx-auto border-t`}
          >
            <h3 className="text-2xl lg:text-4xl tracking-tight font-bold text-gray-900 text-center mb-1 pt-8">
              ROI RESULTS
            </h3>
            <div className="w-full mt-12 mb-4  flex flex-row items-center  justify-center gap-x-4 lg:gap-x-32">
              <div className="w-full md:w-3/4  grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-6 lg:gap-y-0">
                <div className="flex flex-col justify-start ">
                  <h4 className="mb-3 pb-2 font-bold text-atgBlue border-b-2 border-gray-900 text-3xl">
                    USD $
                    {(selectedOutput * 1000 * getValues("price"))
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h4>
                  <h4 className="font-semibold text-2xl flex flex-row">
                    Monthly Revenue{" "}
                    <QuestionMarkCircleIcon
                      onClick={() => {
                        setOpenModal(true);
                        setModalType("revenue");
                      }}
                      className="h-5 w-5 ml-2 text-atgBlue hover:text-gray-700"
                      aria-hidden="true"
                    />
                  </h4>
                </div>
                <div className="flex flex-col justify-start ">
                  <h4 className="mb-3 pb-2 font-bold text-atgBlue border-b-2 border-gray-900 text-3xl">
                    {(productPricing / (getValues("price") * profitMargin))
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    units
                  </h4>
                  <h4 className="font-semibold text-2xl flex flex-row">
                    Units to Sell for ROI
                    <QuestionMarkCircleIcon
                      onClick={() => {
                        setOpenModal(true);
                        setModalType("units");
                      }}
                      className="h-5 w-5 ml-2 text-atgBlue hover:text-gray-700"
                      aria-hidden="true"
                    />
                  </h4>
                </div>
              </div>
            </div>
            <h3 className="pt-8 text-4xl tracking-wide font-semibold">
              Hand Filling vs RoboCAP Filling
            </h3>
            <div className="w-full flex flex-col justify-start items-start">
              <div className="block lg:hidden  col-span-4 py-12">
                <button
                  type="button"
                  onClick={() => setSelectedType("robo")}
                  className="text-lg flex flex-row items-center gap-1 rounded-full pb-2 hover:text-atgLightBlue focus:outline-none"
                >
                  <div className="bg-atgLightBlue p-1.5"> </div>
                  <span className={`${selectedType === "robo" && "font-bold"}`}>
                    RoboCAP Filling
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedType("manual")}
                  className="text-lg flex flex-row items-center gap-1 hover:text-yellow-400 focus:outline-none"
                >
                  <div className="bg-yellow-400 p-1.5"> </div>
                  <span
                    className={`${selectedType === "manual" && "font-bold"}`}
                  >
                    Manual Filling
                  </span>
                </button>
              </div>
              <div className="col-span-4 lg:col-span-3 lg:w-2/3 mx-auto">
                <div className="pt-3">
                  <h4 className="flex flex-row">
                    Filling Hours{" "}
                    <QuestionMarkCircleIcon
                      onClick={() => {
                        setOpenModal(true);
                        setModalType("hours");
                      }}
                      className="h-5 w-5 ml-2 text-atgBlue hover:text-gray-700"
                      aria-hidden="true"
                    />
                  </h4>
                  <button
                    className={`${
                      selectedType === "robo" ? "bg-gray-300" : "bg-yellow-400"
                    } text-sm lg:text-base rounded-full font-medium  text-white  w-full flex flex-row justify-start items-center `}
                  >
                    <button
                      className={`${
                        selectedType === "manual"
                          ? "bg-gray-300"
                          : "bg-atgLightBlue"
                      } rounded-full font-medium  text-white pl-4 pr-28 py-1.5`}
                    >
                      {hourlyRate.auto} Man Hours
                    </button>
                    <span className="pl-4 pr-4 lg:pr-0">
                      {hourlyRate.manual} Man Hours
                    </span>
                  </button>
                </div>
                <div className="pt-3">
                  <h4 className="flex flex-row">
                    Labour Costs{" "}
                    <QuestionMarkCircleIcon
                      onClick={() => {
                        setOpenModal(true);
                        setModalType("costs");
                      }}
                      className="h-5 w-5 ml-2 text-atgBlue hover:text-gray-700"
                      aria-hidden="true"
                    />{" "}
                  </h4>{" "}
                  <button
                    className={`${
                      selectedType === "robo" ? "bg-gray-300" : "bg-yellow-400"
                    } text-sm lg:text-base rounded-full font-medium  text-white  w-full flex flex-row justify-start items-center`}
                  >
                    <button
                      className={`${
                        selectedType === "manual"
                          ? "bg-gray-300"
                          : "bg-atgLightBlue"
                      } rounded-full  font-medium  text-white pl-4 pr-28 py-1.5`}
                    >
                      $
                      {labourCost.auto &&
                        labourCost.auto
                          .toFixed(0)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </button>
                    <span className="pl-4 ">
                      $
                      {labourCost.manual &&
                        labourCost.manual
                          .toFixed(0)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </button>
                </div>
                <div className="pt-3">
                  <h4 className="flex flex-row">
                    Production Profits{" "}
                    <QuestionMarkCircleIcon
                      onClick={() => {
                        setOpenModal(true);
                        setModalType("profits");
                      }}
                      className="h-5 w-5 ml-2 text-atgBlue hover:text-gray-700"
                      aria-hidden="true"
                    />{" "}
                  </h4>{" "}
                  <button
                    className={`${
                      selectedType === "manual"
                        ? "bg-gray-300"
                        : "bg-atgLightBlue"
                    } text-sm lg:text-base rounded-full font-medium  text-white  w-full flex flex-row justify-start items-center`}
                  >
                    <button
                      className={` ${
                        selectedType === "robo"
                          ? "bg-gray-300"
                          : "bg-yellow-400"
                      } rounded-full font-medium  text-white pl-4 pr-28 py-1.5`}
                    >
                      {profits.manual}%
                    </button>
                    <span className="pl-4  ">{profits.auto}%</span>
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex flex-row justify-center w-full gap-4  items-center py-4">
                <button
                  type="button"
                  onClick={() => setSelectedType("robo")}
                  className="text-lg flex flex-row items-center gap-1 rounded-full hover:text-atgLightBlue focus:outline-none"
                >
                  <div className="bg-atgLightBlue p-1.5"> </div>
                  <span className={`${selectedType === "robo" && "font-bold"}`}>
                    RoboCAP Filling
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedType("manual")}
                  className="text-lg flex flex-row items-center gap-1 hover:text-yellow-400 focus:outline-none"
                >
                  <div className="bg-yellow-400 p-1.5"> </div>
                  <span
                    className={`${selectedType === "manual" && "font-bold"}`}
                  >
                    Manual Filling
                  </span>
                </button>
              </div>
            </div>
            {!isLoading ? (
              <button
                type="button"
                onClick={submitReport}
                className="w-52 mt-48 md:mt-28 lg:mt-8 inline-flex font-semibold justify-center py-4 px-8  border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-md text-white hover:text-atgBlue focus:outline-none "
              >
                Get ROI Report
              </button>
            ) : (
              <button
                type="button"
                className="w-52 mt-48 md:mt-28 lg:mt-8 inline-flex font-semibold justify-center items-center py-4 px-8  border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-md text-white hover:text-atgBlue focus:outline-none "
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
            <a
              href="booking/demo"
              className="w-52 mt-1.5 flex flex-row justify-center items-center text-atgBlue hover:text-blue-800 underline"
            >
              BOOK A DISCOVERY CALL{" "}
              <ChevronRightIcon className="h-4 w-4 " aria-hidden="true" />
            </a>
          </div>
        </PageContainer>
      ) : (
        <ThankYou />
      )}
    </div>
  );
}

export default ROI;
