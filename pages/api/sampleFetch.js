import axios from "axios";

export default async (req, res) => {
  const body = req.body;
  try {
    const response = await axios({
      url: `http://localhost:8000/sales/public/samples/${body}`,
      method: "get",
      headers: {
        "X-CSRFToken":
          "tf7guFRhdSioNWU5FhKlGXH9gQCci2XqAEdJ3epMpfcZYFfvC36dqiVZLPozHsTN",
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    res.status(response.status).json(response.data);
    res.end();
  } catch (error) {
    console.log(error);
    res.status(error.response.status).json(error.response.data);
    res.end();
  }
};
