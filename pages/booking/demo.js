// COMPONENTS
import { useState } from "react";
import PageContainer from "../../components/pageContainer";
import SeoHead from "../../components/seo";

import { useForm } from "react-hook-form";

import bookDiscoveryInputs from "../../data/BookDiscoveryCall";

import Credentials from "../../components/form/contactForm/credentials";
import Source from "../../components/form/contactForm/source";
import TextArea from "../../components/form/textarea";

import { useRouter } from "next/router";
const seo = {
  title: "BOOK A DISCOVERY CALL | ATG Pharma",
  description:
    "BOOK A DISCOVERY CALL of ATG  Pharma's production equiptment. Our machines automate the cannabis, cosmetic, and pharmaceutical industry.",
};

function Booking() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors, watch, unregister, setValue, clearErrors } = useForm({});

  const router = useRouter();

  const handleDemoSubmit = async (data) => {
    try {
      console.log("submitting....");
      setIsLoading(true);
      const res = await fetch("/api/bookDemo", {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await res.json();
      router.push("/thankyou");
    } catch(error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <SeoHead data={seo} />
      <PageContainer>
        <div className="container mt-16 my-4 py-4 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center mb-6">
            <span className="block xl:inline">BOOK A DISCOVERY CALL</span>
          </h2>
          <p className="text-xs lg:text-lg my-4 leading-6 text-gray-500 text-center">
            <span className="block">
              Complete below form and a member of our team will reach out to you to schedule a live demo.
            </span>
          </p>
        </div>
        <div className="px-8 xl:px-0 max-w-7xl mx-auto my-2 mb-9">
          <form
            onSubmit={handleSubmit(handleDemoSubmit)}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <div className="space-y-8">
            <Credentials
                data={bookDiscoveryInputs.contact}
                register={register}
                errors={errors}
              />
              {/* <QuoteRequest
                data={bookDiscoveryInputs.products}
                register={register}
                errors={errors}
                watch={watch}
                unregister={unregister}
              /> */}
              <TextArea 
                register={register}
                errors={errors}
                data={bookDiscoveryInputs.products}
                setFormValue={setValue}
                clearFormError={clearErrors}
              />
              <Source
                data={bookDiscoveryInputs.preferredDay}
                register={register}
                errors={errors}
                setFormValue={setValue}
                clearFormError={clearErrors}
              />
              <Source
                data={bookDiscoveryInputs.preferredTime}
                register={register}
                errors={errors}
                setFormValue={setValue}
                clearFormError={clearErrors}
              />

              <TextArea 
                data={bookDiscoveryInputs.additionalNotes}
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
                  disabled={isLoading}
                    type="submit"
                    className="flex items-center justify-center px-10 py-3 md:py-4 border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-md font-medium text-white hover:text-atgBlue md:px-14"
                  >
                    Book
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
        {/* <div className="container overflow-visible my-16 max-w-7xl mx-auto h-screen">
          <iframe
            title="scheduling ATG appointments"
            src="https://calendly.com/virtualdemo"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div> */}
      </PageContainer>
    </div>
  );
}

export default Booking;
