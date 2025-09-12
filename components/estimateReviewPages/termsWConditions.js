/* eslint-disable react/jsx-filename-extension */
import React, { useContext, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";

// CONTEXT
import { EstimateContext } from "../../context/estimateContext";

// COMPONENTS
import PageContainer from "../pageContainer";

const TermsWConditions = ({ pageOrder, setPageOrder }) => {
  const [showSignature, setShowSignature] = useState(false);
  const { register, handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, dispatch] = useContext(EstimateContext);
  let date = new Date().toLocaleString() + "";

  const acceptTerms = async (data) => {
    setIsSubmitting(true);
    let body = Object.assign(state, data);
    try {
      const res = await fetch("/api/orderSubmission", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        let page = pageOrder + 1;
        setPageOrder(page);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PageContainer>
      <Transition.Root show={showSignature} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          open={showSignature}
          onClose={setShowSignature}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className={`inline-block ${
                  isSubmitting && "opacity-90"
                } align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full`}
              >
                <form onSubmit={handleSubmit(acceptTerms)}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="grid grid-cols-7">
                      <div className="col-span-1 flex-shrink-0 flex items-center justify-center rounded-full mt-1 bg-green-100 sm:mx-0 sm:h-12 sm:w-12">
                        <ExclamationIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3  col-span-5  text-center sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900"
                        >
                          Electronic Signature
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 text-justify ">
                            By Printing your name in the outlined field, you are
                            indicating you have the authorization to agree for
                            the terms of serviced provided on behalf of the
                            organization.
                          </p>
                          <div className="flex flex-col gap-4 w-full items-start mt-4">
                            <div className="w-full flex flex-row items-center justify-start gap-4">
                              <h3 className="text-atgBlue">{date}</h3>
                            </div>
                            <div className="relative w-full border border-gray-300 rounded-md p-3 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600">
                              <label
                                htmlFor="name"
                                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                              >
                                Full Name
                              </label>
                              <input
                                type="text"
                                name="accepted_by"
                                ref={register({
                                  required: "A signature is required",
                                })}
                                id="accepted_by"
                                className="block uppercase w-full border-0 p-0 text-gray-900 placeholder-gray-300 focus:ring-0 sm:text-sm focus:outline-none"
                                placeholder="Jane Doe"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-atgBlue text-base font-medium text-white hover:bg-blue-800 focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      {isSubmitting && (
                        <svg
                          className="animate-spin h-5 w-5 text-white self-center mr-2"
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
                      )}
                      Sign
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setShowSignature(false)}
                    >
                      Return
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="px-8 xl:px-0 max-w-7xl mx-auto mt-20 mb-8">
        <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center">
          <span className="block xl:inline">ATG Pharma Terms of Service</span>
        </h2>
        <p className="text-center py-4 max-w-5xl mx-auto text-base text-gray-600">
          To move forward with your selection it is required that you review the
          following terms of service prior to placing a deposit
        </p>
      </div>
      <div className="max-w-5xl p-8 my-16  mx-auto border rounded-xl border-gray-300 shadow-sm h-96 overflow-auto">
        <h1 className="my-2 block text-xl text-left leading-8 font-semibold tracking-tight text-gray-900 sm:text-lg">
          Purchase Agreement:
        </h1>
        <p className="ml-4 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            This Purchase Agreement is an electronic contract that sets out the
            legally binding terms for your order. This Agreement may be modified
            by Advanced Integrated Robotics Inc. (“AIR”), and the version of
            this Purchase Agreement that you agree to at the time your order is
            placed will be the version that governs the transaction.
          </span>
          <span className="block my-1 text-justify">
            As such, you should review these terms when each order is placed as
            each order will be subject to the most current version of this
            Purchase Agreement. By clicking ‘I agree’ you confirm that you have
            read this Purchase Agreement and that you agree to be bound by all
            of the terms, conditions and notices contained or referenced herein.
          </span>
          <span className="block my-1 text-justify">
            Further, by clicking ‘I agree’ you consented to receive this
            Purchase Agreement in electronic form. Please print a copy of this
            Agreement for your records for each order.
          </span>
          <span className="block my-1 text-justify">
            By clicking ‘I agree’, you represent and warrant that you have the
            right, authority and capacity to enter into this Purchase Agreement
            and to abide by all of the terms and conditions of this Purchase
            Agreement, and agree that this Purchase Agreement is legally binding
            and enforceable in accordance with its terms.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">1. Deposits:</h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            A deposit in the amount of fifty percent (50%) of the total Purchase
            Order value is required upon placing a purchase order. Orders will
            not be processed until the deposit is received by AIR.
          </span>
          <span className="block my-1 text-justify">
            Deposits may be paid by cheque, wire transfer or credit card. Please
            note, there is approximately a five-business day delay for cheques
            being received and processed.
          </span>
          <span className="block my-1 text-justify">
            Purchase orders must be paid for in full, before they will be
            shipped.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">
          2. Credit Card Processing:
        </h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            AIR accepts payment from MasterCard and Visa.  A processing fee of
            three percent (3%) will be added to any credit card payments.
          </span>
          <span className="block my-1 text-justify">
            AIR does not accept payment from Amex or any other credit card.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">3. Shipping Fees:</h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            Shipping fees cannot be determined at the time an order is placed.
            You will be notified of the shipping charges at least five (5)
            business days prior to the order shipping and the shipping fees will
            be included in the final invoice.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">
          4. Delivery Lead Times:
        </h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            ATG aims to have orders ready to ship within eight (8) to ten (10)
            weeks from the date it receives the deposit and any sample products
            for that a specific order.
          </span>
          <span className="block my-1 text-justify">
            However, lead times may vary depending on the volume of orders being
            processed at any time. AIR will provide updated estimated lead times
            when an order is placed if an order is expected to take longer than
            twelve (12) weeks to be completed.
          </span>
          <span className="block my-1 text-justify">
            Electrical Certifications, such as, TUV, and ESA on orders will
            increase the lead times.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">
          5. Equipment Delivery Process:
        </h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            Upon driver's arrival for the delivery of equipment, the client must
            inspect the condition of the crate prior to signing and
            documentation provided by the driver. If there are any noticeable
            damages to the crate you are to refuse the crate and call ATG Pharma
            Inc’ customer service team at 1-866-309-5029 immediately. ATG Pharma
            will not be held liable for any cost occurred from damages if the
            client accepts a damaged crate.
          </span>
          <span className="block my-1 text-justify">
            A. The client has up to 10 business days to uncreate and inspect for
            missing or damage components or equipment and must be submitted by
            email. If the order is uncrated and inspected after the 10-business
            day period, the client will be responsible for all shipping charges.
          </span>
          <span className="block my-1 text-justify">
            B. If there are missing components, please send an email to Client
            Success with the item number, description or name.
          </span>
          <span className="block my-1 text-justify">
            c. If a component or a piece of equipment is damaged, please take a
            digital photo and send it in an email to customer service.
          </span>
          <span className="block my-1 text-justify">
            Customer pick up requires the customer and ATG warehouse manager to
            confirm the order will be prepared for pick up 24 hours prior to
            your arrival at our facility. Large orders that require crate
            packaging are not available for customer pick up and will be
            delivered with our selected shipping and logistics company.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">
          6. Sample Requirement & Manufacture Drawings:
        </h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            To customize product filling trays for your products, ATG requires
            10-20 product units of each product you intend to use with the
            RoboCAP Filling Systems, along with the manufacture drawings of the
            product. The sample products and drawings are necessary for the
            design and fabrication of customized holding trays, delays of over
            two weeks following payment being received to samples arriving at
            our facility can result in the promised lead time of 8-10 weeks
            being delayed.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">7. Quotes:</h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            Order quotes are valid for sixty (60) days from the date of the
            Order Quote and pricing is subject to change if a deposit for an
            order is not received within that time period.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">
          8. Order Cancellations:
        </h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            In the event that an order is cancelled after it has been processed,
            AIR will refund the deposit, less any costs to customize equipment,
            and less an order processing fee equal to ten percent (10%) of the
            equipment price. Order cancellation must be made in written form
            either by email, or company letter head.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">9. Storage Fees:</h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            ATG will notify customers five days before an order is to be
            completed of the final invoice, including shipping fees. Final
            payment is due within five (5) days of receiving notice. If payment
            is not received after five (5) business days from completion of
            order, customers will be charged a storage fee equal of two percent
            (2%) of the cost of the order, each month, prorated to weekly
            payments.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">
          10. Set-Up and Training:
        </h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            ATG provides free training for each order, at ATG’s headquarters, or
            training center as well in-depth training videos. The training
            videos are intended to provide customers with sufficient training to
            properly operate the equipment.
          </span>
          <span className="block my-1 text-justify">
            ATG also offers video training sessions at the rate of $100hr and
            off-site training with an ATG Technical Staff member at the rate of
            $1000/day, plus the cost of travel expenses.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">
          11. Exclusive Sales Representative of ATG Pharma Inc.:
        </h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            AIR is the exclusive sales representative of ATG Pharma Inc. (“ATG”)
            All order processing, including invoice and payment is done by AIR.
          </span>
          <span className="block my-1 text-justify">
            All warranty claims are serviced by ATG as further set out below.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">12. Warranty:</h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            Customers are provided with ATG’s standard product warranty. The
            warranty period commences on the date an order is shipped.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">
          13. Post-Order Servicing:
        </h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            Any malfunctions or faulty parts that are covered by ATG’s warranty
            will be repaired or replaced at ATG’s costs. ATG will determine, in
            sole and absolute discretion whether a part should be repaired or
            replaced, or whether the entire product / unit should be replaced.
          </span>
          <span className="block my-1 text-justify">
            Any malfunctions or other problems that are outside the scope of
            ATG’s warranty, may be shipped to ATG for repair or for the
            replacement of a part(s) at the customer’s expense. Upon receiving
            the product, ATG will provide an estimate for the cost of the repair
            or replacement, for the customer’s authorization. If a repair or
            replacement is not authorized by the customer, the equipment may be
            shipped back to the customer at the customer’s expense, if so
            authorized by the customer. If a customer prefers, ATG will provide
            on-site support and servicing, at the customer’s expense.
          </span>
        </p>
        <h2 className="ml-4 my-2 font-medium text-lg">14. Returns:</h2>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            Customers may return products within thirty (30) days of receipt
            without a re-stocking fee. All returns are subject to ATG inspection
            of equipment upon receipt. The refund will be issued once the
            equipment is returned, and first inspected by ATG. If equipment has
            been damaged, ATG may reduce the amount of the refund, in its sole
            discretion. Customers are responsible for all shipping costs to ATG.
          </span>
          <span className="block my-1 text-justify">
            After 30 days of receipt, the equipment is deemed non-refundable,
            even if the equipment has not been used.
          </span>
          <span className="block my-1 text-justify">
            Customers may not return items to ATG without a return authorization
            ID number from ATG. Any returns shipped without a return
            authorization ID number will be refused
          </span>
          <span className="block my-1 text-justify">
            ATG will not provide any refunds for any product contact parts and
            customized products: nozzles, syringes, product tubing, custom
            trays, pressure vessels (product vessels).
          </span>
        </p>
        <h2 className="ml-4 mt-6 my-2 font-medium text-lg">
          ATG Pharma Inc. Warranty Part 1.
        </h2>
        <p className="ml-6 text-gray-600 text-justify">
          The following is the Limited Warranty for the ATG Pharma Inc. RoboCAP
          Filling Systems:
        </p>
        <p className="ml-8 text-gray-600  font-medium text-base">
          <span className="block my-1 italic text-justify">
            We warrant to you, the original purchaser, that all our parts are
            free of defects in material and workmanship. “Defects” as used in
            this warranty, are defined as any imperfection(s), which impair the
            common use of this product. Our warranty is expressly limited to the
            replacement of parts or components, for a thirty-six (36) month
            period, from the date of shipment.
          </span>
        </p>
        <p className="ml-6 text-gray-600 text-justify">
          This limited warranty applies under conditions of normal use. The
          warranty does not cover:
        </p>
        <p className="ml-12 text-gray-600  font-medium text-base">
          <div className="flex flex-row items-start gap-4 justify-start">
            <span className="block my-1 text-justify">1.</span>
            <span className="block my-1 text-justify">
              We warrant to you, the original purchaser, that all our parts are
              free of defects in material and workmanship. “Defects” as used in
              this warranty, are defined as any imperfection(s), which impair
              the common use of this product. Our warranty is expressly limited
              to the replacement of parts or components, for a thirty-six (36)
              month period, from the date of shipment.
            </span>
          </div>
          <div className="flex flex-row items-start gap-4 justify-start">
            <span className="block my-1 text-justify">2.</span>
            <span className="block my-1 text-justify">
              Defects occurring after purchase due to customer modification,
              improper repair, intentional damage, accident, misuse, abuse or
              negligence.
            </span>
          </div>
          <div className="flex flex-row items-start gap-4 justify-start">
            <span className="block my-1 text-justify">3.</span>
            <span className="block my-1 text-justify">
              External or cosmetic damage.
            </span>
          </div>
          <div className="flex flex-row items-start gap-4 justify-start">
            <span className="block my-1 text-justify">4.</span>
            <span className="block my-1 text-justify">
              Wear and tear from use.
            </span>
          </div>
        </p>
        <h2 className="ml-4 mt-6 my-2 font-medium text-lg">
          ATG Pharma Inc. Warranty Part 2.
        </h2>
        <p className="ml-6 text-gray-600 text-justify">
          The following is the Limited Warranty for the ATG Pharma Inc.
          Packaging Equipment:
        </p>
        <p className="ml-8 text-gray-600  font-medium text-base">
          <span className="block my-1 italic text-justify">
            We warrant to you, the original purchaser, that all our parts are
            free of defects in material and workmanship. “Defects” as used in
            this warranty, are defined as any imperfection(s), which impair the
            common use of this product. Our warranty is expressly limited to the
            replacement of parts or components, for a 12-month period, after the
            date of shipment.
          </span>
        </p>
        <p className="ml-6 text-gray-600 text-justify">
          This limited warranty applies under conditions of normal use. The
          warranty does not cover:
        </p>
        <p className="ml-12 text-gray-600  font-medium text-base">
          <div className="flex flex-row items-start gap-4 justify-start">
            <span className="block my-1 text-justify">1.</span>
            <span className="block my-1 text-justify">
              Machine malfunctions caused by improper customer installation,
              product spillage, or wash down damage. This equipment is not
              considered wash down grade.
            </span>
          </div>
          <div className="flex flex-row items-start gap-4 justify-start">
            <span className="block my-1 text-justify">2.</span>
            <span className="block my-1 text-justify">
              Defects occurring after purchase due to customer modification,
              improper repair, intentional damage, accident, misuse, abuse or
              negligence.
            </span>
          </div>
          <div className="flex flex-row items-start gap-4 justify-start">
            <span className="block my-1 text-justify">3.</span>
            <span className="block my-1 text-justify">
              External or cosmetic damage.
            </span>
          </div>
          <div className="flex flex-row items-start gap-4 justify-start">
            <span className="block my-1 text-justify">4.</span>
            <span className="block my-1 text-justify">
              Wear and tear from use.
            </span>
          </div>
        </p>
        <p className="ml-6 text-gray-600 text-base">
          <span className="block my-1 text-justify">
            All factory repairs are to be made only at locations designated by
            ATG Pharma Inc. To receive replacement or missing parts under this
            warranty, call your ATG Pharma Inc., representatives. Please have
            model number, date of purchase and name of selling dealer. All
            warranty replacements are subject to factory approval. Customer may
            return defective parts for credit to ATG Pharma Inc., along with
            proof of machine purchase. Warranty replacement parts are shipped
            out immediately subject to availability.
          </span>
        </p>
        <h3 className="ml-4 my-2 font-medium text-lg">
          By selecting 'I Agree' you are accepting the terms of service provided
          thereof; therefore I have read the entirety of this purchase agreement
          and understand the terms of the purchase.
        </h3>
        <div className="w-full flex flex-row gap-4 justify-end items-end">
          <button
            type="button"
            onClick={() => setPageOrder(pageOrder - 1)}
            className="flex items-center justify-center px-5 md:px-6 py-3 focus:outline-none bg-white hover:bg-atgBlue rounded-xl shadow-md text-md font-medium text-atgBlue hover:text-white"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => setShowSignature(true)}
            className="flex items-center justify-center px-5 md:px-6 py-3 focus:outline-none bg-atgBlue hover:bg-blue-900 rounded-xl shadow-md text-md font-medium text-white"
          >
            I Agree
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export default TermsWConditions;
