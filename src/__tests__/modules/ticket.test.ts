import request from "supertest";
import app from "../../app";

describe("Ticket API", () => {
  let server: any;

  beforeAll((done) => {
    server = app.listen(4004, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  describe("POST /api/tickets", () => {
    it("debería crear un ticket", async () => {
      // TODO: Completar datos de prueba
      const res = await request(server).post("/api/tickets").send({
        title: "Ticket Test",
        description: "Descripción de ticket",
      });
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("ticket");
    });
  });

  describe("GET /api/tickets", () => {
    it("debería obtener la lista de tickets", async () => {
      const res = await request(server).get("/api/tickets");
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  // Puedes agregar más tests para PUT y DELETE aquí
});
