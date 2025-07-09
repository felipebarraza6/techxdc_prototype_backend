import request from "supertest";
import app from "../../app";

describe("Auth API", () => {
  let server: any;

  beforeAll((done) => {
    server = app.listen(4001, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  describe("POST /register", () => {
    it("debería registrar un usuario nuevo", async () => {
      const res = await request(server).post("/register").send({
        username: "nuevo_usuario",
        email: "nuevo@correo.com",
        password: "password123",
      });
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("user");
      expect(res.body.user).toHaveProperty("id");
    });
  });

  describe("POST /login", () => {
    it("debería autenticar y devolver un token", async () => {
      const res = await request(server).post("/login").send({
        email: "nuevo@correo.com",
        password: "password123",
      });
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("token");
    });
  });

  describe("GET /me", () => {
    it("debería devolver datos del usuario autenticado", async () => {
      // Primero logueamos para obtener el token
      const login = await request(server).post("/login").send({
        email: "nuevo@correo.com",
        password: "password123",
      });
      const token = login.body.token;
      const res = await request(server)
        .get("/me")
        .set("Authorization", `Bearer ${token}`);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("user");
      expect(res.body.user.email).toBe("nuevo@correo.com");
    });
  });
});
