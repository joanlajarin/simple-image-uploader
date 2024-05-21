import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { config } from 'dotenv'
config()
//const serviceAccount = JSON.parse(readFileSync('./simple-image-uploader-1fa1e-firebase-adminsdk-jyxog-fbbb0939a8.json'));
const serviceAccount = {
  'type': 'service_account',
  'project_id': 'simple-image-uploader-1fa1e',
  'private_key_id': process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
  'private_key': (process.env.FIREBASE_ADMIN_PRIVATE_KEY).replace(/\\n/g, '\n'),
  'client_email': process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  'client_id': process.env.FIREBASE_ADMIN_CLIENT_ID,
  'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
  'token_uri': 'https://oauth2.googleapis.com/token',
  'auth_provider_x509_cert_url': process.env.FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
  'client_x509_cert_url': process.env.FIREBASE_ADMIN_CLIENT_X509_CERT_URL,
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://simple-image-uploader-1fa1e.appspot.com',
});


const bucket = admin.storage().bucket();

export { bucket };