import serviceAccount from "./fire-base-secrets.json" assert { type: "json" };

import admin, { ServiceAccount } from "firebase-admin";

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });
}

export default admin;
