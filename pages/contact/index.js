import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PageContainer from "../../components/pageContainer";
import { useRouter } from "next/router";

// COOKIES
import { useCookies } from "react-cookie";

// DATA
import ContactInput from "../../data/contact/forminputs";

// COMPONENTS
import Credentials from "../../components/form/contactForm/credentials";
import QuoteRequest from "../../components/form/contactForm/quoteRequest";
import TextArea from "../../components/form/textarea";
import Source from "../../components/form/contactForm/source";
import SEOHead from "../../components/seo";

function Contact() {
  const { register, handleSubmit, errors, watch, unregister, setValue, clearErrors } = useForm({});
  const [isLoading, setIsLoading] = useState(false);
  const [cookies] = useCookies(["leadSrc"]);
  const router = useRouter();
  const [geo, setGeo] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setGeo(`${position.coords.latitude},${position.coords.longitude}`);
    });
  }, []);

  const contactSubmit = async (data) => {
    setIsLoading(true);
    let location = JSON.parse(JSON.stringify(geo));
    data.leadSrc = cookies.leadSrc ? cookies.leadSrc : "";
    data.lat = location?.split(",")[0] ?? null;
    data.long = location?.split(",")[1] ?? null;
    try {
      const res = await fetch("./api/contact", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        router.push("/thankyou");
      } else {
        console.log("wrong email");
      }
      setIsLoading(false);
    } catch (err) {}
  };

  return (
    <div>
      <SEOHead
        data={{
          title: "Contact Us | ATG Pharma",
          description:
            "Contact ATG Pharma for filling and packaging equipment quotes and information for all your filling and packaging automation needs.",
        }}
      />
      <PageContainer>
        <div className="container mt-16 my-4 py-4 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center mb-6">
            <span className="block xl:inline">We'd love to hear from you</span>
          </h2>
          <p className="text-xs lg:text-lg my-4 leading-6 text-gray-500 text-center">
            <span className="block">
              Fill out the form below to inquire about our equipment. One of our
              sales associates will reach out to you as soon as possible.
            </span>
          </p>
        </div>
        <div className="px-8 xl:px-0 max-w-7xl mx-auto my-2">
          <form
            onSubmit={handleSubmit(contactSubmit)}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <div className="space-y-8">
              <Credentials
                data={ContactInput.contact}
                register={register}
                errors={errors}
              />
              <QuoteRequest
                data={ContactInput.products}
                register={register}
                errors={errors}
                watch={watch}
                unregister={unregister}
              />
              <TextArea
                data={ContactInput.request}
                register={register}
                errors={errors}
                setFormValue={setValue}
                clearFormError={clearErrors}z
              />

              <Source
                data={ContactInput.source}
                register={register}
                errors={errors}
                setFormValue={setValue}
                clearFormError={clearErrors}
              />
            </div>
            <div className="pt-5">
              <div className="flex justify-center">
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
            </div>
          </form>
        </div>
        <div className="w-4/5 mx-auto my-10">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center my-6">
              <span className="block xl:inline">Contact Us</span>
            </h2>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/contact/Contact_Banner.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          />
          <div className="relative px-8 xl:px-0 max-w-7xl mx-auto ">
            <div className="grid grid-col-1 lg:grid-cols-4 gap-8 w-full">
              <div className="flex flex-col  justify-start items-center py-12">
                <Image
                  src="/contact/Cntact_Email.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                  className="self-center"
                />
                <h3 className="text-4xl pt-2 font-bold text-atgBlue">
                  Email Us
                </h3>
                <a
                  href="mailto:customersuccess@atgpharma.com "
                  className="text-sm font-base text-gray-800 underline hover:text-atgBlue hover:font-medium"
                >
                  customersuccess@atgpharma.com
                </a>
              </div>
              <div className="flex flex-col  justify-start items-center py-12">
                <Image
                  src="/contact/Contact_Location.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                  className="self-center"
                />
                <h3 className="text-4xl pt-2 font-bold text-atgBlue">
                  Address
                </h3>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/2730+Brighton+Rd+c1,+Oakville,+ON/@43.5126096,-79.6843192,17z/data=!3m1!4b1!4m5!3m4!1s0x882b4308f68bb11d:0xe2896dff437bc088!8m2!3d43.5126096!4d-79.6821305"
                  className="text-gray-800  hover:text-atgBlue hover:font-medium underline"
                >
                  <p className="text-sm font-base text-center ">
                  474 Iroquois Shore Rd
                  </p>
                  <p className="text-sm font-bas">Unit 2 Oakville, Ontario</p>
                </a>
              </div>
              <div className="flex flex-col  justify-start items-center py-12">
                <Image
                  src="/contact/Contact_Phone.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                  className="self-center"
                />
                <h3 className="text-4xl pt-2 font-bold text-atgBlue">
                  Call Us
                </h3>
                <a
                  href="tel:+18663095029"
                  className="text-sm font-base text-gray-800 underline hover:text-atgBlue hover:font-medium"
                >
                  1 (866) 309-5029
                </a>
              </div>
              <div className="flex flex-col  justify-start items-center py-12">
                <Image
                  src="/contact/Spare_Parts.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                  className="self-center"
                />
                <h3 className="text-4xl pt-2 font-bold text-atgBlue">
                  Spare Parts
                </h3>
                <a
                  href="parts@atgpharma.com"
                  className="text-sm font-base text-gray-800 underline hover:text-atgBlue hover:font-medium "
                >
                  parts@atgpharma.com
                </a>
                <a
                  href="tel:+18663095029"
                  className="text-sm font-base text-gray-800 underline hover:text-atgBlue hover:font-medium"
                >
                  1 (866) 309-5029
                </a>
              </div>
            </div>
          </div>
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
                    className="flex items-center justify-center px-10 py-3 md:py-4 border-2 hover:border-transparent border-atgBlue rounded-full shadow-sm bg-gradient-to-r hover:from-buttonStart hover:to-atgBlue from-white to-white text-md font-medium hover:text-white text-atgBlue md:px-14"
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
                    className="flex items-center justify-center px-10 py-3 md:py-4 border-2 hover:border-transparent border-atgBlue rounded-full shadow-sm bg-gradient-to-r hover:from-buttonStart hover:to-atgBlue from-white to-white text-md font-medium hover:text-white text-atgBlue md:px-14"
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
export default Contact;
