import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDfwaoPrdOGqp20pWcSliPpQDYPnl_WMgY",
  authDomain: "goalcoach-749f6.firebaseapp.com",
  databaseURL: "https://goalcoach-749f6.firebaseio.com",
  projectId: "goalcoach-749f6",
  storageBucket: "goalcoach-749f6.appspot.com",
  messagingSenderId: "436303891140",
  appId: "1:436303891140:web:cdb87be91be650c7895791",
  measurementId: "G-2BPF0G64PD"
};
export const firebaseApp = firebase.initializeApp(config);
