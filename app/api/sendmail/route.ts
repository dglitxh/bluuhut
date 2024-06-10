const Mailgun = require("mailgun-js");
import { send } from "@emailjs/browser";
import type { NextRequest, NextResponse } from "next/server";
const mgKey = process.env.MAILGUN_API_KEY;
const DOMAIN = "mail.bluehutsolutions.ca";
const mg = Mailgun({
  apiKey: mgKey,
  domain: DOMAIN,
});

export async function POST(req: NextRequest, res: NextResponse) {
  let data = await req.json();
  let resp;
  let n_err: boolean = false;
  console.log(data);

  const deets = {
    from: "Bluehut App <postmaster@mail.bluehutsolutions.ca>",
    to: "ydglitch@gmail.com",
    subject: `Message from ${data.email} on BlueHut app`,
    text: `${data.message}`,
    html: `<h1>${data.message}</h1>`,
  };

  try {
    const status = mg.messages().send(deets, function (error: any, body: any) {
      console.log("sending.......");

      if (error) {
        console.log(error)
        return;
      }
      console.log(body);
      return body;
    });
    if (!status) throw new Error("message not sent");
    else return Response.json({ msg: "email sent succesfully" });
  } catch (e) {
    console.log(e, "not sent");
    return new Response("error", { status: 500 });
  }
}
