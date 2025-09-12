import axios from "axios";

export default async (req, res) => {
  const body = req.body;
  const paymentBody = {
    card: {
      name: body.name,
      number: body.number,
      expiry_month: body.expiry_month,
      expiry_year: "23",
      cvd: body.cvd,
    },
    billing: {
      name: body.name,
      address_line1: body.address_line1,
      address_line2: body.address_line2,
      city: body.city,
      province: "bc",
      country: "ca",
      postal_code: body.postal_code,
    },
  };
  try {
    const response = await axios({
      url: `http://localhost:8000/payment/public/${body.public_ID}`,
      method: "post",
      data: paymentBody,
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
