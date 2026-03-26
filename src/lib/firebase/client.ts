import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/lib/firebase/firebase-config";
import { getAuth } from "@firebase/auth";

const clientApp = initializeApp(firebaseConfig);

const clientAuth = getAuth(clientApp);

export { clientApp, clientAuth };
