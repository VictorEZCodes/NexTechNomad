import nodemailer from "nodemailer";
import handlebars from "handlebars";
import { contactTemplate } from "@/templates/contactForm";

interface Icontactss {
  from: string | undefined;
  to: string | undefined;
  subject: string;
  html: string;
}
export async function sendMail(data: FormData, file: any) {
  const { SMTP_EMAIL, SMTP_PASSWORD, TO_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const emailOptions: Icontactss = {
      from: SMTP_EMAIL,
      to: TO_EMAIL,
      subject: "Contact form",
      html: compileContactTemplate(
        data.get("name"),
        data.get("email"),
        data.get("masage")
      ),
    };
    const sendResult = await transport.sendMail(emailOptions);
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

function compileContactTemplate(name: any, email: any, masage: any) {
  const template = handlebars.compile(contactTemplate);
  const htmlBody = template({
    name,
    email,
    masage,
  });
  return htmlBody;
}
