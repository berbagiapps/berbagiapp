const admin = require("firebase-admin");
const serviceAccount = require("./berbagi2025-firebase-adminsdk-fbsvc-8f42c0e49c.json"); // Download from Firebase Console

// Prevent multiple initializations
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  console.log("Firebase initialized successfully");
}

const db = admin.firestore();

const IS_TEST = process.env.MOCHA_TEST === "true";
const TEST_ROOT = "test/testDoc";

// Patch .collection() to auto-prefix in test mode
if (IS_TEST) {
  const originalCollection = db.collection.bind(db);

  db.collection = (path) => {
    const fullPath = path.startsWith(TEST_ROOT) ? path : `${TEST_ROOT}/${path}`;
    return originalCollection(fullPath);
  };
}

module.exports = db;
