import { initializeApp } from "firebase/app";

//firebase configuration
const app = initializeApp({
    // ei function tar moddhe shob kichu pass kore dilei .. ashole amar app ta initialize hoye jay
    // ekta firebase app initialize hoye jay ..

    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,

    apiKey: "AIzaSyD95PvVlZ_5aF1N3ftBpOVfYtrXyI3xrzY",
    authDomain: "quiz-cf20e.firebaseapp.com",
    projectId: "quiz-cf20e",
    storageBucket: "quiz-cf20e.appspot.com",
    messagingSenderId: "880956751026",
    appId: "1:880956751026:web:b69c3c3047c49ae148ddab",
    measurementId: "G-KX731Y7FM2",
});

export default app;
