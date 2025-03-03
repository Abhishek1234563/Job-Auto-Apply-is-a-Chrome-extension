
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR4yovLewStBOsQgp4MTBOr_Erhp6TbeI",
  authDomain: "sign-ip-5d29a.firebaseapp.com",
  projectId: "sign-ip-5d29a",
  storageBucket: "sign-ip-5d29a.appspot.com",
  messagingSenderId: "997289414831",
  appId: "1:997289414831:web:4ca3e6fca101749cdb845a",
  measurementId: "G-KDV3SDCDLN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
