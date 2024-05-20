import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('./simple-image-uploader-1fa1e-firebase-adminsdk-jyxog-fbbb0939a8.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://simple-image-uploader-1fa1e.appspot.com',
});


const bucket = admin.storage().bucket();

export { bucket };