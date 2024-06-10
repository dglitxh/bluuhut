const Mailgun = require("mailgun-js");
import { NextRequest, NextResponse } from "next/server";
const mgKey = process.env.MAILGUN_API_KEY;
const DOMAIN = "mail.bluehutsolutions.ca";
const mg = Mailgun({
  apiKey: mgKey,
  domain: DOMAIN,
});

export function POST(req: NextRequest, res: NextResponse) {
  let data = req.json();
  console.log(data);

  const deets = {
    from: "Bluehut App <postmaster@mail.bluehutsolutions.ca>",
    to: "ydglitch@gmail.com",
    subject: "Hello",
    text: `$`,
    html: `<h1>$</h1>`,
  };
  try {
    mg.messages().send(deets, function (error: any, body: any) {
      console.log(body);
      res = body;

      if (error) {
        let e = new Error(String(error));
        throw e;
      }
    });
  } catch (err) {
    console.log(err);
    return err;
  }

  return Response.json(res);
}
