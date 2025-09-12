import Image from "next/image";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";

function Footer() {
  const [alertState, setAlertState] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["cookieAlert"]);

  useEffect(() => {
    if (cookies.cookieAlert) {
      setAlertState(false);
    }
  }, [cookies]);

  return (
    <>
      <div
        className={`${
          alertState ? "visible" : "hidden"
        } rounded-md bg-blue-200 p-4 z-50 sticky bottom-0`}
      >
        <div className="flex items-center max-w-7xl mx-auto pr-8 md:px-8">
          <div className="block md:hidden mr-auto pr-3">
            <div className="-mx-1.5 -my-1.5 ">
              <button
                onClick={() => setCookie("cookieAlert", "false", { path: "/" })}
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="h-6 w-6 text-white"
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
            </div>
          </div>
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">
              We use Cookies to enhance your experience
              <a
                href="https://atgpharma.com/privacy-policy/"
                className="whitespace-nowrap font-medium px-4 text-blue-700 hover:text-blue-600"
              >
                Details
                <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
          <div className="hidden md:block ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5 ">
              <button
                onClick={() => setCookie("cookieAlert", "false", { path: "/" })}
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="h-6 w-6 text-white"
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
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-card" aria-labelledby="footerHeading">
        <span id="footerHeading" className="sr-only">
          Footer
        </span>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Image
                src="/Logo_White.svg"
                alt="Picture of the author"
                width={100}
                height={40}
                className="h-8 w-auto sm:h-10"
              />
              <p className="text-white text-base">
                North American manufacturer of high-quality bench-top filling
                and packaging automation equipment designed for a broad range of
                products such as vape cartridges, capsules, bottles, balms and
                more.
              </p>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/company/atgpharma"
                  className="text-white hover:text-white"
                >
                  <span className="sr-only">Linkedin</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/atgpharma/"
                  className="text-white hover:text-white"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/channel/UCh8H7mM8shlahDe4sIibIAQ"
                  className="text-white hover:text-white"
                >
                  <span className="sr-only">Youtube</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/atgpharma"
                  className="text-white hover:text-white"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.twitter.com/atg_pharma"
                  className="text-white hover:text-white"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <p className="text-sm font-semibold text-white tracking-wider uppercase">
                    Solutions
                  </p>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="https://atgpharma.com/cartridges/"
                        className="text-base text-white hover:text-gray-900"
                      >
                        Automatic
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://atgpharma.com/atg-products/the-a1-semi-automatic-filling-system/"
                        className="text-base text-white hover:text-gray-900"
                      >
                        Semi-Automatic
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://atgpharma.com/atg-products/act-100-capper/"
                        className="text-base text-white hover:text-gray-900"
                      >
                        Packaging
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <p className="text-sm font-semibold text-white tracking-wider uppercase">
                    Resources
                  </p>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="https://atgpharma.com/support/"
                        className="text-base text-white hover:text-gray-900"
                      >
                        Support
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://atgpharma.com/request-a-quote/"
                        className="text-base text-white hover:text-gray-900"
                      >
                        Contact
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://atgpharma.com/blog/"
                        className="text-base text-white hover:text-gray-900"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://atgpharma.com/"
                        className="text-base text-white hover:text-gray-900"
                      >
                        ROI
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="https://www.atgconnect.io/spare-parts-forms"
                        target="_blank"
                        className="text-base text-white hover:text-gray-900"
                      >
                        Spare Part Forms
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        href="https://www.customer.onesupply.co/support"
                        target="_blank"
                        className="text-base text-white hover:text-gray-900"
                      >
                        Create Support Ticket
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <p className="text-sm font-semibold text-white tracking-wider uppercase">
                    Company
                  </p>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="https://atgpharma.com/about/"
                        className="text-base text-white hover:text-gray-900"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://atgpharma.com/faq/"
                        className="text-base text-white hover:text-gray-900"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <p className="text-sm font-semibold text-white tracking-wider uppercase">
                    Legal
                  </p>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="https://atgpharma.com/privacy-policy/"
                        className="text-base text-white hover:text-gray-900"
                      >
                        Privacy &#38; Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-white xl:text-center">
              &copy; {new Date().getFullYear()} Powered by{" "} ATG Pharma
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
