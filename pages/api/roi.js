import axios from "axios";

export default async (req, res) => {
  const body = req.body;
  let sendEmailToClient = false;
  try {
    sendEmailToClient = await sendEmailMsg(body);
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
      const request = await axios({
        url: "http://connectapi.castleclock.com/quote/roi/",
        method: "post",
        data: data,
        headers: {
          "X-CSRFToken":
            "JvrtqvaC9mWJdfavKMHrdWp9ZJrY4diiynLqD6j7hQOXbEYAcEdutIkqpjykum34",
          "content-type": "application/json",
          accept: "application/json",
        },
      });
      console.log(request);
      if (request.status === 201) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      console.log(error);
      console.log("error", error.status);
      resolve(false);
    }
  });
};
