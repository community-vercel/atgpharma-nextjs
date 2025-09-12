/* eslint-disable object-shorthand */
/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
import axios from "axios";

export default async (req, res) => {
  const body = req.body;
  const { firstName, lastName, email, company, phone, helpRequired, leadSrc } =
    body;

  let sendEmailToClient = false;
  const clientData = {
    first_name: firstName,
    last_name: lastName,
    company_name: company,
    email: email,
    phone_number: phone,
    source: "None",
    lead_sdr: leadSrc,
    statement: helpRequired,
    products: body.interest,
    type: "rfq",
  };

  body.lat && (clientData.latitude = body.lat);
  body.long && (clientData.longitude = body.long);

  try {
    sendEmailToClient = await sendEmailMsg(clientData);
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

const sendEmailMsg = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
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
      if (response.status === 200) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      console.log("error", error);
      console.log();
      resolve(false);
    }
  });
};
