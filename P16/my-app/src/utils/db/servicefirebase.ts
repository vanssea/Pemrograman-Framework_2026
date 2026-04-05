import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  addDoc,
  where,
  updateDoc,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);
const USERS_COLLECTION = "users";

type UserRecord = {
  id: string;
  [key: string]: any;
};

function mapSnapshotDocs(snapshot: any): UserRecord[] {
  return snapshot.docs.map((item: any) => ({
    id: item.id,
    ...item.data(),
  }));
}

async function getUsersByEmail(email: string): Promise<UserRecord[]> {
  const q = query(collection(db, USERS_COLLECTION), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return mapSnapshotDocs(querySnapshot);
}


export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = mapSnapshotDocs(snapshot);
  return data;
}

export async function getData(collectionName: string) {
  return retrieveProducts(collectionName);
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(email: string) {
  const data = await getUsersByEmail(email);
  if (data.length > 0) {
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: Function,
) {
  const data = await getUsersByEmail(userData.email);
  // console.log("Query result:", data);

  if (data.length === 0) {
    // user belum ada -> boleh daftar
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = userData.role || "member";
    await addDoc(collection(db, USERS_COLLECTION), userData)
      .then(() => {
        callback({
          status: "success",
          message: "User registered successfully",
        });
      })
      .catch((error) => {
        callback({
          status: "error",
          message: error.message,
        });
      });
  } else {
    callback({
      status: "error",
      message: "User already exists",
    });
  }
}

export async function signInWithGoogle(
  userData: any,
  callback: any,
) {
  try {
    const data = await getUsersByEmail(userData.email);

    if (data.length > 0) {
      // User sudah ada, update data
      userData.role = data[0].role;
      await updateDoc(doc(db, USERS_COLLECTION, data[0].id), userData);
      callback({
        status: true,
        message: "User registered and logged in with Google",
        data: userData,
      });
    } else {
      // User baru, tambah data
      userData.role = "member";
      await addDoc(collection(db, USERS_COLLECTION), userData);
      callback({
        status: true,
        message: "User registered and logged in with Google",
        data: userData,
      });
    }
  } catch (error: any) {
    // Tangani error di sini
    callback({
      status: false,
      message: "Failed to register user with Google",
    });
  }
}