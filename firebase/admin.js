const admin = require('firebase-admin');

const serviceAccount = require('./aboutme-cards-firebase-adminsdk-d34cf-a9e352a416.json');

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://aboutme-cards.firebaseio.com',
  });
} catch (e) {}

export const firestore = admin.firestore();
