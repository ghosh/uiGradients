import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const config = {
  apiKey: publicRuntimeConfig.FIREBASE_API_KEY,
  authDomain: publicRuntimeConfig.FIREBASE_AUTH_DOMAIN,
  databaseURL: publicRuntimeConfig.FIREBASE_DATABSE_URL,
  projectId: publicRuntimeConfig.FIREBASE_PROJECT_ID,
  storageBucket: publicRuntimeConfig.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: publicRuntimeConfig.FIREBASE_MESSAGING_SENDER_ID,
  appId: publicRuntimeConfig.FIREBASE_APP_ID
}

export default config
