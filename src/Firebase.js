import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVb0NpbL9xO5jMlAFxq1oAPvKlZKutsIg",
  authDomain: "snapchat-clone-e6b94.firebaseapp.com",
  projectId: "snapchat-clone-e6b94",
  storageBucket: "snapchat-clone-e6b94.appspot.com",
  messagingSenderId: "892199488508",
  appId: "1:892199488508:web:23cb2b9089dff5b8934079",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "posts");
const auth = getAuth();
const storage = getStorage();
const storageRef = ref(storage);
const provider = new GoogleAuthProvider();
// const postsRef = ref(storage, "posts");

export { db, auth, provider, colRef, storage, storageRef };
