import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Script from "next/script";

// DATA
import roiData from "../../data/roi";

// COMPONENTS
import PageContainer from "../../components/pageContainer";

function ROI() {
  const [activeHover, setActiveHover] = useState(false);
  const [monthlyOutput, setMonthlyOutput] = useState(48);
  const { automaticGrid, TypeOutput } = roiData;
  const [handFilling, setHandFilling] = useState({
    numOfEmployees: 5,
    wage: 15,
    outputPerEmployee: 60,
    maximumMonthlyHoursPerEmployee: 160,
  });
  const [roboCapFilling, setRoboCapFilling] = useState({
    product: automaticGrid[0].context,
    numOfRoboCaps: 1,
    numOfEmployees: 2,
    wage: 15,
    leasingCost: 800,
    outputPerRoboCap: 1200,
  });

  // CALCULATION
  const hoursForRoboCAP =
    (monthlyOutput * 1000) / roboCapFilling.outputPerRoboCap;
  const costToOperateRoboCapPerHour =
    roboCapFilling.numOfEmployees * roboCapFilling.wage;
  const roboCapMonthlyCost =
    roboCapFilling.leasingCost * roboCapFilling.numOfRoboCaps +
    costToOperateRoboCapPerHour * hoursForRoboCAP;

  const hoursForHandFill = (monthlyOutput * 1000) / 60;
  const handFillMonthlyCost = handFilling.wage * Math.round(hoursForHandFill);
  const difference = createCommaNumber(
    handFillMonthlyCost - roboCapMonthlyCost
  );

  let table = [
    {
      title: null,
      manual: "Manual",
      automatic: "Automatic",
    },
    {
      title: "Employees",
      manual: handFilling.numOfEmployees,
      automatic: roboCapFilling.numOfEmployees * roboCapFilling.numOfRoboCaps,
    },
    {
      title: "Payable Hours",
      manual: Math.round(hoursForHandFill),
      automatic: Math.round(hoursForRoboCAP),
    },
    {
      title: "Wage / Lease",
      manual: `$${handFilling.wage}/Hour`,
      automatic: `$${Math.round(hoursForRoboCAP)}/Robot/Month`,
    },
    {
      title: "Monthly Cost",
      manual: createCommaNumber(handFillMonthlyCost),
      automatic: createCommaNumber(roboCapMonthlyCost),
    },
  ];

  const updateMonthlyOutput = async (event) => {
    const employeesRequired =
      hoursForHandFill / handFilling.maximumMonthlyHoursPerEmployee;
    await setMonthlyOutput(event.target.value);
    employeesRequired > 4 &&
      setHandFilling({
        ...handFilling,
        numOfEmployees: Math.ceil(employeesRequired),
      });
  };

  const products = automaticGrid.map((product, index) => {
    const { bg, bgAct, iconAct, icon, title, context } = product;
    return (
      <li
        onMouseOver={() => setActiveHover(index)}
        onMouseOut={() => setActiveHover(null)}
        onClick={() =>
          setRoboCapFilling({
            ...roboCapFilling,
            outputPerRoboCap: TypeOutput[context],
            product: context,
          })
        }
        key={index}
        className="min-w-xs max-w-xs flex flex-col justify-end"
      >
        <div
          className={`relative rounded-2xl border-2 border-${
            activeHover === index || roboCapFilling.product === context
              ? "atgBlue"
              : "transparent"
          }`}
        >
          <Image
            src={
              activeHover === index || roboCapFilling.product === context
                ? bgAct
                : bg
            }
            alt="Picture of the author"
            layout="fill"
            className="object-center object-cover pointer-events-none rounded-2xl"
          />
          <div className="relative z-10 flex flex-col items-center">
            <Image
              src={
                activeHover === index || roboCapFilling.product === context
                  ? iconAct
                  : icon
              }
              alt="Picture of the author"
              width={85}
              height={85}
              className="h-8 w-auto sm:h-10"
            />
            <p
              className={`text-${
                activeHover === index || roboCapFilling.product === context
                  ? "atgBlue"
                  : "white"
              } text-xs font-semibold tracking-tight pb-3 lg:pb-6`}
            >
              {title}
            </p>
          </div>
        </div>
      </li>
    );
  });
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
      <PageContainer>
        <div className="container mt-20 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-atgBlue text-center mb-6">
            <span className="block xl:inline">
              Return On Investment Calculator
            </span>
          </h2>
          <p className="text-base lg:text-lg my-4 leading-6 text-gray-500 text-center">
            <span className="block">
              Use our ROI Calculator to see how much money you could save
              switching from Hand Filling to Automatic Filling
            </span>
          </p>
        </div>
        <div className="container my-14 px-8  flex flex-col items-center max-w-7xl mx-auto">
          <div className="w-full lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center lg:col-span-6 lg:text-left flex items-center flex-col justify-between">
              <h3 className="text-xl text-atgBlue font-bold leading-2 tracking-wide py-4">
                Your Production
              </h3>
              <ul className="w-full space-y-6 grid grid-cols-2 gap-x-6 gay-y-1 sm:gap-y-6 sm:space-y-0 lg:grid-cols-3 ">
                {products}
              </ul>
              <div className="w-full py-4">
                <h4 className="text-lg">
                  <span className="font-bold">Monthly Output: </span>
                  <span>{monthlyOutput},000</span>
                </h4>
                <input
                  className="w-full"
                  type="range"
                  min="4"
                  max="250"
                  value={monthlyOutput}
                  onChange={updateMonthlyOutput}
                />
                <div className="flex flex-row justify-between font-medium">
                  <span>4,000</span>
                  <span>250,000</span>
                </div>
              </div>
            </div>
            <div className="sm:text-center lg:col-span-6 lg:text-left flex items-center flex-col justify-start">
              <h3 className="text-xl text-atgBlue font-bold leading-2 tracking-wide py-4">
                Your Returns
              </h3>
              <table className="w-full table-auto">
                <tbody>
                  {table.map((entry, index) => (
                    <tr key={index}>
                      <td className="text-sm lg:text-xl font-medium py-3.5">
                        {entry.title}
                      </td>
                      <td className="text-sm lg:text-lg text-gray-400 text-center">
                        {entry.manual}
                      </td>
                      <td className="text-sm lg:text-lg text-atgBlue text-center">
                        {entry.automatic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 className="py-8 text-2xl font-medium text-atgBlue text-center">
                <span>A RoboCAP saves you </span>
                <span className="font-black">${difference}</span>
                <span> monthly</span>
              </h3>
              <a
                href="/build"
                className="w-52 inline-flex justify-center py-4 px-8  border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-md font-medium text-white hover:text-atgBlue "
              >
                BUILD &#38; PRICE
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default ROI;

const createCommaNumber = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
