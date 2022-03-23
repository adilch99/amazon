import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9ujMIYsPb9y2ls__8jCf7MEiRgMqqNeE",
  authDomain: "e-clone-587e9.firebaseapp.com",
  projectId: "e-clone-587e9",
  storageBucket: "e-clone-587e9.appspot.com",
  messagingSenderId: "138322973181",
  appId: "1:138322973181:web:6c27a42d1194fd18784994",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
