import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { appointmentSchema } from "../schemas/appointmentsSchema";

const prisma = new PrismaClient();

export const getAllAppointments = async (req: Request, res: Response) => {
  const appointments = await prisma.appointment.findMany({
    include: { client: true, service: true },
  });
  res.json(appointments);
};

export const getAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const appointment = await prisma.appointment.findUnique({
    where: { id: Number(id) },
    include: { client: true, service: true },
  });
  res.json(appointment);
};

export const createAppointment = async (req: Request, res: Response) => {
  const parsed = appointmentSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  const appointment = await prisma.appointment.create({ data: parsed.data });
  res.status(201).json(appointment);
};

export const updateAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const parsed = appointmentSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  const appointment = await prisma.appointment.update({
    where: { id: Number(id) },
    data: parsed.data,
  });
  res.json(appointment);
};

export const deleteAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.appointment.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
