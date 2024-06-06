const Mailgun = require("mailgun-js");
import { NextRequest, NextResponse } from "next/server";
const mgKey = process.env.MAILGUN_API_KEY;
const DOMAIN = "mail.bluehutsolutions.ca";
const mg = Mailgun({
  apiKey: mgKey,
  domain: DOMAIN,
});

export function POST(req: NextRequest, res: NextResponse) {
  let data = req.body;
  console.log(data, "data", req.url);
  const deets = {
    from: "Mailgun Sandbox <postmaster@mail.bluehutsolutions.ca>",
    to: "ydglitch@gmail.com",
    subject: "Hello",
    text: `$`,
    html: `<h1>$</h1>`,
  };
  mg.messages().send(deets, function (error: any, body: any) {
    console.log(body);
    res = body;

    if (error) {
      console.log(error);
    }
    return error;
  });

  return Response.json(res);
}
