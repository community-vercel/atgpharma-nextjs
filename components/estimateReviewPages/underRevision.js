/* eslint-disable react/jsx-filename-extension */
import React from "react";

// COMPONENTS
import PageContainer from "../pageContainer";

const UnderRevision = () => {
  return (
    <PageContainer>
      <div className="px-8 xl:px-0 max-w-7xl mx-auto my-20">
        <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center">
          <span className="block xl:inline">Estimate Revisions</span>
        </h2>
        <p className="text-center py-4 max-w-5xl mx-auto text-base text-gray-600">
          ATG's sales representative will adjust estimate to fit the revision
          comments you have provided!
          <span class="block">We will be in touch shortly.</span>
        </p>
        <img
          src="/build/Check Icon-145.svg"
          alt="Picture of the author"
          className="h-48 w-auto mx-auto my-20"
        />
      </div>
    </PageContainer>
  );
};

export default UnderRevision;
