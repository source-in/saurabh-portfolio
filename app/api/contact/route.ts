import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail", // You can also use "Outlook", "Yahoo", etc.
    auth: {
      user: "dev.saurabh365@gmail.com", // Your Gmail address
      pass: "Hell0itsme5", // Your App Password
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "dev.saurabh365@gmail.com", // Your email to receive messages
    subject: `Contact Form Submission: ${subject}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Subject:</strong> ${subject}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
