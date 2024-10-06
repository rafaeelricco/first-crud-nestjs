import * as z from 'zod';

export const createNoteSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(255)
});

export type CreateNoteSchema = z.infer<typeof createNoteSchema>;
