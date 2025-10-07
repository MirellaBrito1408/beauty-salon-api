import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { serviceSchema } from "../schemas/servicesSchema";

const prisma = new PrismaClient();

export const getAllServices = async (req: Request, res: Response) => {
  const services = await prisma.service.findMany();
  res.json(services);
};

export const getService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const service = await prisma.service.findUnique({
    where: { id: Number(id) },
    include: { appointments: true },
  });
  res.json(service);
};

export const createService = async (req: Request, res: Response) => {
  const parsed = serviceSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  const service = await prisma.service.create({ data: parsed.data });
  res.status(201).json(service);
};

export const updateService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const parsed = serviceSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  const service = await prisma.service.update({
    where: { id: Number(id) },
    data: parsed.data,
  });
  res.json(service);
};

export const deleteService = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.service.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
