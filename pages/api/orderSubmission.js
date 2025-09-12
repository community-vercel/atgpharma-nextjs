import axios from "axios";

export default async (req, res) => {
  const body = req.body;
  try {
    const response = await axios({
      url: `http://localhost:8000/sales/public/order/${body.public_ID}`,
      method: "patch",
      data: body,
      headers: {
        "X-CSRFToken":
          "tf7guFRhdSioNWU5FhKlGXH9gQCci2XqAEdJ3epMpfcZYFfvC36dqiVZLPozHsTN",
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};
