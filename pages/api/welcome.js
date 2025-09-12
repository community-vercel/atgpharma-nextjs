/* eslint-disable object-shorthand */
/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
import axios from "axios";

export default async (req, res) => {
  const body = req.body;
  const { name, email } = body;

  let sendEmailToClient = false;
  const indexOfSpace = name.indexOf(" ");
  const clientData = {
    first_name: name.split(" ")[0],
    last_name: indexOfSpace !== -1 ? name.substring(indexOfSpace + 1) : " ",
    email: email,
    phone_number: "",
    statement: "",
    company_name: "",
    source: "",
    lead_sdr: "",
    type: "funnel",
  };

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
        url: "https://atg-connect-api.herokuapp.com/atgWeb/funnel/",
        method: "post",
        data: data,
        headers: {
          "X-CSRFToken":
            "JvrtqvaC9mWJdfavKMHrdWp9ZJrY4diiynLqD6j7hQOXbEYAcEdutIkqpjykum34",
          "content-type": "application/json",
          accept: "application/json",
        },
      });
      if (response.status === 201) {
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
