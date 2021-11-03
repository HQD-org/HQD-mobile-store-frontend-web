import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCl10gs2BVS1ferRNjmER8mtbDUk0IEpek",
  authDomain: "hqdmobilestore.firebaseapp.com",
  projectId: "hqdmobilestore",
  storageBucket: "hqdmobilestore.appspot.com",
  messagingSenderId: "308451194191",
  appId: "1:308451194191:web:e30166f6c4cf9f9fa6013a",
  measurementId: "G-RXRHT20HQ3",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
