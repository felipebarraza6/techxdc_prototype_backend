import request from "supertest";
import app from "../../app";

describe("Client API", () => {
  let server: any;

  beforeAll((done) => {
    server = app.listen(4002, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  describe("POST /api/clients", () => {
    it("debería crear un cliente", async () => {
      // TODO: Completar datos de prueba
      const res = await request(server).post("/api/clients").send({
        name: "Cliente Test",
        email: "cliente@test.com",
        phone: "123456789",
        address: "Dirección Test",
      });
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("client");
    });
  });

  describe("GET /api/clients", () => {
    it("debería obtener la lista de clientes", async () => {
      const res = await request(server).get("/api/clients");
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  // Puedes agregar más tests para PUT y DELETE aquí
});
