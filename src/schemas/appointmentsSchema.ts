import { z } from "zod";

export const appointmentSchema = z.object({
  date: z.string(),
  clientId: z.number().int(),
  serviceId: z.number().int()
});
