import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import clientsRoutes from "./routes/clientsRoutes";
import servicesRoutes from "./routes/servicesRoutes";
import appointmentsRoutes from "./routes/appointmentsRoutes";
import swaggerDocument from "../swagger.json";

const app = express();
app.use(cors());
app.use(express.json()); // <- ESSENCIAL
app.use("/api/clients", clientsRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () =>
  console.log("Server running at http://localhost:3000/api-docs")
);
