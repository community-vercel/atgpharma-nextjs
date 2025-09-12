import React, { useState } from "react";

// COMPONENTS
import EstimateSelector from "./estimateSelector";
import TermsWConditions from "./termsWConditions";
import SamplesForm from "./samplesForm";
import DepositForm from "./depositForm";
import UnderRevision from "./underRevision";
import UpdateAddress from "./updateAddress";
import SetAddress from "./setAddress";

const EstimateReviewPages = ({ data }) => {
  const [pageOrder, setPageOrder] = useState(
    data?.status === "SELECTED" ? 3 : 0
  );
  // const [pageOrder, setPageOrder] = useState(2);
  const renderedComponent = {
    0: (
      <EstimateSelector
        data={data}
        pageOrder={pageOrder}
        setPageOrder={setPageOrder}
      />
    ),
    1: <TermsWConditions pageOrder={pageOrder} setPageOrder={setPageOrder} />,
    2: <SetAddress pageOrder={pageOrder} setPageOrder={setPageOrder} />,
    3: <SamplesForm pageOrder={pageOrder} setPageOrder={setPageOrder} />,
    // 4: <DepositForm pageOrder={pageOrder} setPageOrder={setPageOrder} />,
    4: (
      <UpdateAddress
        data={data}
        pageOrder={pageOrder}
        setPageOrder={setPageOrder}
      />
    ),
    revision: (
      <UnderRevision pageOrder={pageOrder} setPageOrder={setPageOrder} />
    ),
  };
  return <>{renderedComponent[pageOrder]}</>;
};

export default EstimateReviewPages;
