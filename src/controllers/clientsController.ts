import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { clientSchema } from "../schemas/clientsSchema";

const prisma = new PrismaClient();

export const getAllClients = async (req: Request, res: Response) => {
  const clients = await prisma.client.findMany();
  res.json(clients);
};

export const getClient = async (req: Request, res: Response) => {
  const { id } = req.params;
  const client = await prisma.client.findUnique({
    where: { id: Number(id) },
    include: { appointments: true },
  });
  res.json(client);
};

export const createClient = async (req: Request, res: Response) => {
  const parsed = clientSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  const client = await prisma.client.create({ data: parsed.data });
  res.status(201).json(client);
};

export const updateClient = async (req: Request, res: Response) => {
  const { id } = req.params;
  const parsed = clientSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  const client = await prisma.client.update({
    where: { id: Number(id) },
    data: parsed.data,
  });
  res.json(client);
};

export const deleteClient = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.client.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
