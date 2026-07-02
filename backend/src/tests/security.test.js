const request = require("supertest");
const app = require("../app");

describe("Security", () => {

  test("Accès refusé sans authentification", async () => {

    const res = await request(app)
      .get("/api/users");

    expect(res.statusCode).toBe(401);

  });

  test("Route inexistante", async () => {

    const res = await request(app)
      .get("/api/route-inexistante");

    expect(res.statusCode).toBe(404);

  });

});
