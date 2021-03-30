const admin = require("firebase-admin");
const serviceAccount = require("../../contacts-app-39271-firebase-adminsdk-r378j-192d88a8f2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://contacts-app-39271-default-rtdb.firebaseio.com",
});

const firebaseDB = admin.firestore();

module.exports = firebaseDB;
