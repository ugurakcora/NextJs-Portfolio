"use server"

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

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

  let data;

  try {
       data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: emailTo as string,
        subject: 'New message from ' + formData.get('senderEmail'),
        reply_to: email as string,
        react: React.createElement(ContactFormEmail, { 
          message: message as string, 
          email: email as string
        })
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data
  }
}