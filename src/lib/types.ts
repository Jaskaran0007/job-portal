import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = loginSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const jobSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  location: z.string(),
  salary: z.string(),
  type: z.enum(['full-time', 'part-time', 'contract', 'internship']),
  category: z.string(),
  description: z.string(),
  requirements: z.array(z.string()),
  postedAt: z.date(),
});

export type Job = z.infer<typeof jobSchema>;

export const applicationSchema = z.object({
  jobId: z.string(),
  userId: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  coverLetter: z.string(),
  resumeUrl: z.string().url(),
  status: z.enum(['pending', 'reviewing', 'accepted', 'rejected']),
  appliedAt: z.date(),
});

export type Application = z.infer<typeof applicationSchema>;