const request = require("supertest");
const app = require("../app");

/* Installer les dépendances : npm install --save-dev jest supertest */
/* Dans package.json :
{
  "scripts": {
    "test": "jest --runInBand"
  }
}
*/

describe("Natura Sanat API", () => {

  describe("Health Check", () => {

    test("GET /api/health", async () => {

      const response = await request(app)
        .get("/api/health");

      expect(response.statusCode).toBe(200);
      expect(response.body.status).toBe("success");

    });

  });

  describe("Authentification", () => {

    test("POST /api/auth/login sans données", async () => {

      const response = await request(app)
        .post("/api/auth/login")
        .send({});

      expect(response.statusCode).toBeGreaterThanOrEqual(400);

    });

    test("POST /api/auth/register sans données", async () => {

      const response = await request(app)
        .post("/api/auth/register")
        .send({});

      expect(response.statusCode).toBeGreaterThanOrEqual(400);

    });

  });

  describe("Articles", () => {

    test("GET /api/articles", async () => {

      const response = await request(app)
        .get("/api/articles");

      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);

    });

  });

  describe("Cours", () => {

    test("GET /api/courses", async () => {

      const response = await request(app)
        .get("/api/courses");

      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);

    });

  });

  describe("Professionnels", () => {

    test("GET /api/professionals", async () => {

      const response = await request(app)
        .get("/api/professionals");

      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);

    });

  });

});
