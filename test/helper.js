const db = require("../firebase");
const chai = require("chai");
const expect = chai.expect;

async function clearCollection(collectionPath, batchSize = 500) {
  const MAX_BATCH = 500;
  const safeBatchSize = Math.min(batchSize, MAX_BATCH);
  const collectionRef = db.collection(collectionPath); // auto prefix in test path in firebase.js

  while (true) {
    const snapshot = await collectionRef.limit(safeBatchSize).get();
    if (snapshot.empty) {
      console.log(`Collection "${collectionPath}" is empty.`);
      break;
    }
    const batch = db.batch();
    snapshot.docs.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
  }
}

function expectSuccess(res) {
  if (res.status < 200 || res.status > 299) {
    console.error("❌ Response status:", res.status);
    console.error("❌ Response body:", res.body);
  }
  expect(res.status).to.be.within(200, 299);
}

module.exports = {
  clearCollection,
  expectSuccess,
};
