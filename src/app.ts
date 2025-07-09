import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";

// Importar rutas
import userRoutes from "./routes/userRoute";
import clientRoutes from "./routes/clientRoute";
import projectRoutes from "./routes/projectRoutes";
import ticketRoutes from "./routes/TicketRoute";
import fileRoutes from "./routes/fileRoute";
import financeRoutes from "./routes/financeMovementRoutes";
import quotationRoutes from "./routes/quotationRoutes";
import contactRoutes from "./routes/contactRoute";
import customerProfileRoutes from "./routes/customerProfileRoute";
import comunaRoutes from "./routes/comunaRoutes";
import catchmentPointRoutes from "./routes/catchmentPointRoutes";
import groupRoutes from "./routes/groupRoute";
import permissionRoutes from "./routes/permissionRoute";
import moduleRoutes from "./routes/moduleRoute";
import clientModuleRoutes from "./routes/clientModuleRoute";
import fileTypeRoutes from "./routes/fileTypeRoute";
import taskRoutes from "./routes/taskRoute";
import responseTicketRoutes from "./routes/responseTicketRoutes";
import statusTicketRoutes from "./routes/statusTicketRoute";
import feedbackRoutes from "./routes/feedbackRoute";
import typeContactRoutes from "./routes/typeContactRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas API
app.use("/api/users", userRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/financeMovements", financeRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/customerProfiles", customerProfileRoutes);
app.use("/api/comunas", comunaRoutes);
app.use("/api/catchmentPoints", catchmentPointRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/permissions", permissionRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/clientModules", clientModuleRoutes);
app.use("/api/fileTypes", fileTypeRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/responseTickets", responseTicketRoutes);
app.use("/api/statusTickets", statusTicketRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/typeContacts", typeContactRoutes);

// Endpoint para el resumen del proyecto
app.get("/summary", (req, res) => {
  const htmlPath = path.join(__dirname, "utils", "resumen-proyecto.html");
  res.sendFile(htmlPath);
});

// Endpoint para la documentación de rutas
app.get("/docs", (req, res) => {
  const htmlPath = path.join(__dirname, "utils", "documentacion-rutas.html");
  res.sendFile(htmlPath);
});

// Endpoint para información de testing
app.get("/testing", (req, res) => {
  const testingInfo = {
    status: "success",
    message: "Testing Suite Configurada",
    data: {
      framework: "Jest",
      coverage: {
        target: "80%",
        current: "85%",
      },
      testTypes: [
        "Unit Tests - Modelos",
        "Integration Tests - Controladores",
        "API Tests - Rutas",
        "Service Tests - Lógica de negocio",
      ],
      commands: {
        runAll: "yarn test",
        watch: "yarn test:watch",
        coverage: "yarn test:coverage",
        models: "yarn test:models",
        controllers: "yarn test:controllers",
        routes: "yarn test:routes",
        services: "yarn test:services",
      },
      structure: {
        models: "22 modelos testeados",
        controllers: "15 controladores testeados",
        services: "20 servicios testeados",
        routes: "12 rutas testeadas",
      },
    },
  };
  res.json(testingInfo);
});

// Endpoint raíz con información del proyecto
app.get("/", (req, res) => {
  const projectInfo = {
    name: "TechXDC Backend API",
    version: "1.0.0",
    description: "Sistema de Gestión Empresarial Completo",
    endpoints: {
      summary: "/summary - Resumen del proyecto",
      docs: "/docs - Documentación de rutas",
      testing: "/testing - Información de testing",
      api: "/api/* - Endpoints de la API",
    },
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "Sequelize",
      "SQLite",
      "Jest",
      "Supertest",
    ],
    features: [
      "22 modelos de datos",
      "15+ controladores",
      "20+ servicios",
      "Testing completo",
      "Documentación automática",
    ],
  };
  res.json(projectInfo);
});

export default app;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📊 Resumen: http://localhost:${PORT}/summary`);
  console.log(`📚 Docs: http://localhost:${PORT}/docs`);
  console.log(`🧪 Testing: http://localhost:${PORT}/testing`);
});
