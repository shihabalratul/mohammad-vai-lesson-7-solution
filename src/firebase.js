import { initializeApp } from "firebase/app";

//firebase configuration
const app = initializeApp({
    // ei function tar moddhe shob kichu pass kore dilei .. ashole amar app ta initialize hoye jay
    // ekta firebase app initialize hoye jay ..

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
});

export default app;
