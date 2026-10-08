import { z } from "zod";

export const bookingSchema = z.object({
  type: z.enum(["PACKAGE", "HOTEL", "CAR"]),
  itemId: z.string().min(1, "Please select an option"),
  itemName: z.string().min(1),
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number"),
  startDate: z.string().min(1, "Please select a date"),
  endDate: z.string().optional(),
  guests: z.coerce.number().min(1).max(50),
  notes: z.string().max(500).optional().default(""),
});

export type BookingFormValues = z.input<typeof bookingSchema>;
export type BookingInput = z.output<typeof bookingSchema>;

export const reviewSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  location: z.string().max(80).optional().default(""),
  rating: z.coerce.number().min(1).max(5),
  tourType: z.string().max(120).optional().default(""),
  comment: z.string().min(10, "Please share a bit more detail").max(800),
});

export type ReviewFormValues = z.input<typeof reviewSchema>;
export type ReviewInput = z.output<typeof reviewSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().max(20).optional().default(""),
  subject: z.string().max(150).optional().default(""),
  message: z.string().min(10, "Please write a longer message").max(1000),
});

export type ContactFormValues = z.input<typeof contactSchema>;
export type ContactInput = z.output<typeof contactSchema>;
