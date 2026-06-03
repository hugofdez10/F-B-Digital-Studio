import { NextResponse } from "next/server";

const toEmail = process.env.CONTACT_TO_EMAIL || "digitalstudiosfb@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "F&B Digital Studio <onboarding@resend.dev>";

type ContactPayload = {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "El envío directo todavía no está configurado." },
      { status: 503 },
    );
  }

  const payload = (await request.json()) as ContactPayload;
  const name = clean(payload.name);
  const business = clean(payload.business);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const message = clean(payload.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Faltan nombre, email o mensaje." },
      { status: 400 },
    );
  }

  const subject = `Contacto web - ${business || name}`;
  const text = [
    "Nueva consulta desde la web de F&B Digital Studio",
    "",
    `Nombre: ${name}`,
    `Empresa: ${business || "No indicada"}`,
    `Email: ${email}`,
    `Teléfono: ${phone || "No indicado"}`,
    "",
    "Mensaje:",
    message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
