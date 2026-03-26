import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/lib/firebase/firebase-config";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

const clientApp = initializeApp(firebaseConfig);

const clientAuth = getAuth(clientApp);

const clientDb = getFirestore(clientApp);

export { clientApp, clientAuth, clientDb };
