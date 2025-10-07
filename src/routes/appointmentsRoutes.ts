import { Router } from "express";
import { getAllAppointments, getAppointment, createAppointment, updateAppointment, deleteAppointment } from "../controllers/appointmentsController";

const router = Router();

router.get("/", getAllAppointments);
router.get("/:id", getAppointment);
router.post("/", createAppointment);
router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);

export default router;
