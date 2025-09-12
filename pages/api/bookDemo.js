import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
    console.log("method " + req.method );
    let { additionalNotes, company, email, firstName, lastName, phone, preferredDay, preferredTime, products } = req.body;
    products = products.split(",");
    products = products.join(" ");
    console.log({ additionalNotes, company, email, firstName, lastName, phone, preferredDay, preferredTime, products });
    try {
        console.log("process.env.DEMO_BOOKING_SG_FROM_EMAIL: " + process.env.DEMO_BOOKING_SG_FROM_EMAIL);
        const emailObj = {
            from: {
                email: process.env.DEMO_BOOKING_SG_FROM_EMAIL
            },
            "personalizations": [
                {
                    "to": [
                        {
                            "email": process.env.DEMO_BOOKING_SG_TO_EMAIL
                        }
                    ],
                    "dynamic_template_data": { additionalNotes, company, email, firstName, lastName, phone, preferredDay, preferredTime, products }
                }
            ],
            "template_id": process.env.DEMO_BOOKING_SG_TEMPLATE,
            subject: `ATG Pharma Demo booking ${products}`
        }

        const response = await sgMail.send(emailObj);

        res.status(200).json(response);
        res.end();

        // return sgMail.send(emailObj)
        //     .then((response) => {
        //         console.log(response[0].statusCode)
        //         console.log(response[0].headers);
        //         res.status(200).json({ response })
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         res.status(500).json({error});
        //     })
    } catch (err) {
        console.error("error: ", err);
        res.status(500).json({error: err});
    }
}


