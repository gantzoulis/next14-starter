import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsISo2xieTMPxYlsEodGcrAg7LzBUNKdA",
  authDomain: "dojang-ba678.firebaseapp.com",
  projectId: "dojang-ba678",
  storageBucket: "dojang-ba678.appspot.com",
  messagingSenderId: "317197632825",
  appId: "1:317197632825:web:d62ad8eda4987b9efd54e8"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);