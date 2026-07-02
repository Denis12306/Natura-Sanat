const request = require("supertest");
const app = require("../app");

describe("Users API", () => {

  test("GET /api/users sans token", async () => {

    const res = await request(app)
      .get("/api/users");

    expect(res.statusCode).toBe(401);

  });

});
