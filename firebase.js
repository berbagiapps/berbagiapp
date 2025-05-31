const admin = require("firebase-admin");
const serviceAccount = require("./berbagi2025-firebase-adminsdk-fbsvc-4b3384a3c8.json"); // Download from Firebase Console

// Prevent multiple initializations
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();
module.exports = db;
