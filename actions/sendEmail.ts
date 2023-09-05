"use server"

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESED_API_KEY);
const emailTo = process.env.EMAIL_TO;

export const sendEmail = async (formData: FormData) => {
  const email = formData.get('senderEmail');
  const message = formData.get('senderMessage');

  // simple validation
  if (!validateString(email, 500)){
    return{
      error: 'Invalid email address'
    }
  }

  if (!validateString(message, 5000)){
    return{
      error: 'Invalid message'
    }
  }

  try {
      await resend.emails.send({
        from: 'Contact Form <onboarding@resend.com>',
        to: emailTo as string,
        subject: 'New message from ' + formData.get('senderEmail'),
        reply_to: email as string,
        text: message as string
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }
}