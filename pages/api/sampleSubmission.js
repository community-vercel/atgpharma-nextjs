/* eslint-disable prefer-arrow-callback */
import formidable from "formidable";
import axios from "axios";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    let body = { ...fields, ...files };

    try {
      const response = await axios({
        url: `http://localhost:8000/sales/public/samples/${body.public_ID}`,
        method: "patch",
        data: body,
        headers: {
          "X-CSRFToken":
            "tf7guFRhdSioNWU5FhKlGXH9gQCci2XqAEdJ3epMpfcZYFfvC36dqiVZLPozHsTN",
          "Content-Type": "multipart/form-data",
          accept: "application/json",
        },
      });
      res.status(200).end();
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
  });
};
