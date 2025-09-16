import axios from "axios";

export default async (req, res) => {
  const body = req.body;
  const { firstName, lastName, email, company, phone, source, build, leadSrc } =
    body;
  const buildDetails = await BuildCodesArray(build);
  const comments = buildDetails.join();
  let sendEmailToClient = false;
    let sendEmailToowner = false;
    let sendEmailToadmin = false;

  const products = buildDetails.map((entry) => entry.split(" ")[0]);

  const clientData = {
    first_name: firstName,
    last_name: lastName,
    company_name: company,
    email: email,
    phone_number: phone,
    source: source,
    lead_sdr: leadSrc,
    statement: comments,
    products: products,
    type: "builder",
  };
   const clientDataowner = {
    first_name: firstName,
    last_name: lastName,
    company_name: company,
    email: 'anisuldev@gmail.com',
    phone_number: phone,
    source: source,
    lead_sdr: leadSrc,
    statement: comments,
    products: products,
    type: "builder",
  };
 const clientDataadmin = {
    first_name: firstName,
    last_name: lastName,
    company_name: company,
    email: 'info@request.atgpharma.com',
    phone_number: phone,
    source: source,
    lead_sdr: leadSrc,
    statement: comments,
    products: products,
    type: "builder",
  };

  body.lat && (clientData.latitude = body.lat);
  body.long && (clientData.longitude = body.long);

  try {
    sendEmailToClient = await sendEmailMsg(clientData);
    sendEmailToowner = await sendEmailMsgOwner(clientDataowner);
        sendEmailToadmin = await sendEmailMsgadmin(clientDataadmin);


  } catch (err) {
    console.log("error", err);
  }

  if (sendEmailToClient) {
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

    if (fillStringArr.length === build.length) {
      resolve(fillStringArr);
    } else {
      reject("Did not work");
    }
  });
};
const sendEmailMsgOwner = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios({
        url: "https://atg-connect-api.herokuapp.com/atgWeb/quote/",
        method: "post",
        data: data,
        headers: {
          "X-CSRFToken":
            "JvrtqvaC9mWJdfavKMHrdWp9ZJrY4diiynLqD6j7hQOXbEYAcEdutIkqpjykum34",
          "content-type": "application/json",
          accept: "application/json",
        },
      });
      if (request.status === 200) {
        resolve(true);  
      } else {
        
        resolve(false);
        console.log("Error response: ", request);
      }
    } catch (error) {
      console.log("error response", error.toJSON());
      // console.log("error data:", error.data);
      resolve(false);
    }
  });
};
const sendEmailMsgadmin = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios({
        url: "https://atg-connect-api.herokuapp.com/atgWeb/quote/",
        method: "post",
        data: data,
        headers: {
          "X-CSRFToken":
            "JvrtqvaC9mWJdfavKMHrdWp9ZJrY4diiynLqD6j7hQOXbEYAcEdutIkqpjykum34",
          "content-type": "application/json",
          accept: "application/json",
        },
      });
      if (request.status === 200) {
        resolve(true);
      } else {
        
        resolve(false);
        console.log("Error response: ", request);
      }
    } catch (error) {
      console.log("error response", error.toJSON());
      // console.log("error data:", error.data);
      resolve(false);
    }
  });
};

const sendEmailMsg = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios({
        url: "https://atg-connect-api.herokuapp.com/atgWeb/quote/",
        method: "post",
        data: data,
        headers: {
          "X-CSRFToken":
            "JvrtqvaC9mWJdfavKMHrdWp9ZJrY4diiynLqD6j7hQOXbEYAcEdutIkqpjykum34",
          "content-type": "application/json",
          accept: "application/json",
        },
      });
      if (request.status === 200) {
        resolve(true);
      } else {
        
        resolve(false);
        console.log("Error response: ", request);
      }
    } catch (error) {
      console.log("error response", error.toJSON());
      // console.log("error data:", error.data);
      resolve(false);
    }
  });
};
