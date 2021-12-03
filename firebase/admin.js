const admin = require('firebase-admin');

const serviceAccount = require('./adminKey.json');

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://aboutme-cards.firebaseio.com',
  });
} catch (e) {}

export const firestore = admin.firestore();
