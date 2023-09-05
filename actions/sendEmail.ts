"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.RESED_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength){
    return false;
  }
  return true;
}

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

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'uakcora97@gmail.com',
    subject: 'New message from ' + formData.get('senderEmail'),
    reply_to: email,
    text: message
  })
}