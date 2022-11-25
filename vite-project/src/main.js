import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdllxrpFyIVHnG9u_uyXEHQfm-UdhXEFo",
  authDomain: "original-site01.firebaseapp.com",
  projectId: "original-site01",
  storageBucket: "original-site01.appspot.com",
  messagingSenderId: "38992800880",
  appId: "1:38992800880:web:b80a93dc93e830c43b58b5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(App).use(VueRouter).mount("#app");
