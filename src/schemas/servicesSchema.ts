import { z } from "zod";

export const serviceSchema = z.object({
  name: z.string().min(2),
  price: z.number().positive()
});
