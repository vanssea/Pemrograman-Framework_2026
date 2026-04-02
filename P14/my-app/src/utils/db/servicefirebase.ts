import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function getData(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));

  const data = snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  }));

  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) {
  try {
    const docRef = doc(db, collectionName, id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      return null;
    }

    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  } catch (error) {
    console.error("Error get data by ID:", error);
    return null;
  }
}