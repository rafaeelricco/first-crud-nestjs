import * as z from 'zod';

export const updateNoteSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  isCompleted: z.boolean().optional()
});

export type UpdateNoteSchema = z.infer<typeof updateNoteSchema>;
