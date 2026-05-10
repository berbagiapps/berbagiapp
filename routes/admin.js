const admin = require("firebase-admin");
const serviceAccount = require("../berbagi2025-firebase-adminsdk-fbsvc-8f42c0e49c.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin;