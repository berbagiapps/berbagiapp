const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../app"); // adjust path if needed
const { clearCollection, expectSuccess } = require("./helper");
const db = require("../firebase");

before(async () => {
  // auto prefix in test path in firebase.js
  await clearCollection("users", 20);
  await clearCollection("tokens", 100);
});

describe("POST /auth/register", () => {
  it("should return success for register", async () => {
    const res = await request(app).post("/auth/register").send({
      name: "Recipient User",
      email: "user@example.com",
      password: "correct_password",
      role: "recipient",
    });
    expectSuccess(res);
  });
});

describe("POST /auth/login", () => {
  it("should error when not activated yet", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({ email: "user@example.com", password: "correct_password" });

    expect(res.status).to.equal(403);
    expect(res.body).to.have.property(
      "message",
      "Account is not active. Please check your email for activation."
    );
  });

  it("should error when email not found", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({ email: "random@example.com", password: "correct_password" });
    expect(res.status).to.equal(404);
  });

  it("should error when wrong password", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({ email: "user@example.com", password: "wrong_password" });

    expect(res.status).to.equal(401);
    expect(res.body).to.have.property("message", "Invalid password");
  });

  it("[Backdoor] activate user", async () => {
    // ✅ Backdoor logic: activate the user in Firestore
    const usersCollection = db.collection("users"); // auto prefix in test path in firebase.js
    const snapshot = await usersCollection
      .where("email", "==", "user@example.com")
      .get();

    if (!snapshot.empty) {
      const userRef = snapshot.docs[0].ref;
      await userRef.update({ isActive: true }); // Example activation flag
    }
  });

  it("should return a success status (2xx) after activated", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({ email: "user@example.com", password: "correct_password" });
    expectSuccess(res);
  });
});

describe("POST /auth/register(2)", () => {
  // it should error when email already exists after activated
  it("should error when email already exists after activated", async () => {
    const res = await request(app).post("/auth/register").send({
      name: "Recipient User",
      email: "user@example.com",
      password: "correct_password",
      role: "recipient",
    });
    expect(res.status).to.equal(400);
  });
});

describe("POST /auth/forget-password", () => {
  it("should success", async () => {
    const res = await request(app)
      .post("/auth/forget-password")
      .send({ email: "user@example.com" });
    expectSuccess(res);
  });

  it("should error when email not found", async () => {
    const res = await request(app)
      .post("/auth/forget-password")
      .send({ email: "random@example.com" });
    expect(res.status).to.equal(404);
  });
});
