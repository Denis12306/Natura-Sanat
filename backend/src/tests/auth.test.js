const request = require("supertest");
const app = require("../app");

describe("Auth API", () => {

  test("GET /api/health", async () => {

    const res = await request(app).get("/api/health");

    expect(res.statusCode).toBe(200);

  });

  test("POST /api/auth/login sans données", async () => {

    const res = await request(app)
      .post("/api/auth/login")
      .send({});

    expect(res.statusCode).toBeGreaterThanOrEqual(400);

  });

});
