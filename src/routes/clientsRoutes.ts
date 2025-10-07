import { Router } from "express";
import { getAllClients, getClient, createClient, updateClient, deleteClient } from "../controllers/clientsController";

const router = Router();

router.get("/", getAllClients);
router.get("/:id", getClient);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;
