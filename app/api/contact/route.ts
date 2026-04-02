import { NextRequest, NextResponse } from "next/server";

// TODO: Connect to Resend with client's email at launch
// Install: npm install resend
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, intent, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Uncomment and configure when Resend API key is ready
    /*
    await resend.emails.send({
      from: "Chelsey Fanning Website <noreply@chelseyfanning.com>",
      to: ["chelsea@chelseyfanning.com"], // TODO: confirm client email
      subject: `New contact from ${name} — ${intent || "general inquiry"}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "not provided"}
        Intent: ${intent || "not specified"}
        Message: ${message}
      `,
      replyTo: email,
    });
    */

    // Placeholder: log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission:", { name, email, phone, intent, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
