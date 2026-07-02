const request = require("supertest");
const app = require("../app");

describe("Professionals API", () => {

  test("GET /api/professionals", async () => {

    const res = await request(app)
      .get("/api/professionals");

    expect(res.statusCode).toBe(200);

  });

});
