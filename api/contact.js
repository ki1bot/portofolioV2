import nodemailer from "nodemailer";

export const runtime = "nodejs";

function clean(value, maxLength) {
  return String(value || "")
    .trim()
    .slice(0, maxLength);
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");

    return response.status(405).json({
      message: "Method not allowed",
    });
  }

  const name = clean(request.body?.name, 80);

  const email = clean(request.body?.email, 120);

  const message = clean(request.body?.message, 2000);

  if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || message.length < 5) {
    return response.status(400).json({
      message: "Data form tidak valid.",
    });
  }

  const gmailUser = process.env.GMAIL_USER;

  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  const receiver = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

  if (!gmailUser || !gmailPassword || !receiver) {
    return response.status(503).json({
      message: "Email service belum dikonfigurasi.",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `Portofolio Rifqi <${gmailUser}>`,
      to: receiver,
      replyTo: email,
      subject: `Pesan Portofolio dari ${name}`,
      text: `Nama: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return response.status(200).json({
      message: "Pesan berhasil dikirim.",
    });
  } catch {
    return response.status(500).json({
      message: "Pesan gagal dikirim.",
    });
  }
}
