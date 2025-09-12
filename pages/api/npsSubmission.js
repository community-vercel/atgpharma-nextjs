import axios from "axios";

export default async (req, res) => {
  const body = req.body;
  const response = await axios({
    url: `http://connectapi.castleclock.com/nps/survey/${body.calendly_uuid}`,
    method: "patch",
    data: body,
    headers: {
      "X-CSRFToken":
        "tf7guFRhdSioNWU5FhKlGXH9gQCci2XqAEdJ3epMpfcZYFfvC36dqiVZLPozHsTN",
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  console.log(response)
  res.statusCode = 200;
  res.end();
};
