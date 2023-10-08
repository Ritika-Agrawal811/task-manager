import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMxeUnISqM5YEh2Y49qP77oFeyB96z5oQ",
  authDomain: "task-manager-fe0f6.firebaseapp.com",
  databaseURL: "https://task-manager-fe0f6-default-rtdb.firebaseio.com",
  projectId: "task-manager-fe0f6",
  storageBucket: "task-manager-fe0f6.appspot.com",
  messagingSenderId: "741188709496",
  appId: "1:741188709496:web:0c5a77aa5481558598518d",
  measurementId: "G-CXXV9YY1FE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
