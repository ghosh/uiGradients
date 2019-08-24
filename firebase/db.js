import { db } from './firebase'

const gradients = async () => {
  const snapshot = await db.collection('gradients').get()
  return snapshot.docs.map(doc => doc.data())
}

const store = {
  gradients: gradients
}

export {
  store
}
