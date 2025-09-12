import axios from "axios";

export default async (req, res) => {
  const body = req.body;
  const { email, build } = body;
  let buildDetails;
  let request;
  if (build) {
    buildDetails = await BuildCodesArray(build);
    request = buildDetails.join();
  } else {
    request = "No Builds Made";
  }
  let addCart = false;

  const cartData = {
    email: email,
    statement: request,
  };

  try {
    addCart = await addCartToDB(cartData);
  } catch (err) {
    console.log("error", err);
  }

  if (addCart) {
    res.statusCode = 200;
    res.end();
  } else {
    res.statusCode = 400;
    res.end();
  }
};

const BuildCodesArray = (build) => {
  return new Promise((resolve, reject) => {
    let fillStringArr = build.map((setup) => {
      const { productType, vesselSize, heating, nozzle } = setup;
      let setUpString = `${productType} system with ${nozzle} nozzle(s) ${
        vesselSize ? `combined with ${vesselSize} pressure vessel,` : ""
      } ${heating ? `and heating accessories` : ""}`;
      return setUpString;
    });

    if ((fillStringArr.length = build.length)) {
      resolve(fillStringArr);
    } else {
      reject("Did not work");
    }
  });
};

const addCartToDB = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios({
        url: "https://atg-connect-api.herokuapp.com/atgWeb/pending_quote/",
        method: "post",
        data: data,
        headers: {
          "X-CSRFToken":
            "3cwqTKEgQKSzs4YUAo6MeDoGlMTPqb9nRZU5izPjL9soakkEIH3HeHIPM3p6JAmi",
          "content-type": "application/json",
          accept: "application/json",
        },
      });
      if (request.status === 200) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      console.log("error", error);
      resolve(false);
    }
  });
};
