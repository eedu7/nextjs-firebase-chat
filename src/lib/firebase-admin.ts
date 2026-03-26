import serviceAccount from "./fire-base-secrets.json" assert { type: "json" };

import admin, { ServiceAccount } from "firebase-admin";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
});
