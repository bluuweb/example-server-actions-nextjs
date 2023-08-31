import { z } from "zod";

export const TodoZodSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, {
      message: "El titulo min 1 caracter",
    })
    .max(100, {
      message: "El titulo max 100 caracteres",
    })
    .nonempty({
      message: "El titulo es requerido",
    }),
});
