import axios from "axios";

export default async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const response = await axios({
      url: `http://connectapi.castleclock.com/nps/survey/${body}`,
      method: "get",
      headers: {
        "X-CSRFToken":
          "tf7guFRhdSioNWU5FhKlGXH9gQCci2XqAEdJ3epMpfcZYFfvC36dqiVZLPozHsTN",
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    res.statusCode = response.status;
  } catch (error) {
    console.log(error);
    res.statusCode = error.response.status;
  }
  res.end();
};
