const request = require("supertest");
const app = require("../app");

describe("Articles API", () => {

  test("GET /api/articles", async () => {

    const res = await request(app)
      .get("/api/articles");

    expect(res.statusCode).toBe(200);

  });

});
