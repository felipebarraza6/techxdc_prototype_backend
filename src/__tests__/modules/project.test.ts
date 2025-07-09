import request from "supertest";
import app from "../../app";

describe("Project API", () => {
  let server: any;

  beforeAll((done) => {
    server = app.listen(4003, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  describe("POST /api/projects", () => {
    it("debería crear un proyecto", async () => {
      // TODO: Completar datos de prueba
      const res = await request(server).post("/api/projects").send({
        name: "Proyecto Test",
        description: "Descripción de prueba",
      });
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("project");
    });
  });

  describe("GET /api/projects", () => {
    it("debería obtener la lista de proyectos", async () => {
      const res = await request(server).get("/api/projects");
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  // Puedes agregar más tests para PUT y DELETE aquí
});
