// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgddQDBNqY977HswVHqjuHNrv_Mz7jKhY",
    authDomain: "mywhats-b474d.firebaseapp.com",
    databaseURL: "https://mywhats-b474d.firebaseio.com",
    projectId: "mywhats-b474d",
    storageBucket: "mywhats-b474d.appspot.com",
    messagingSenderId: "693216203373",
    appId: "1:693216203373:web:20d4b8d2ad2519bd07a564",
    measurementId: "G-X7GHFD9QEX"
  };

  const firebaseapp = firebase.initializeApp
  (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth
  GoogleAuthProvider();

  export { auth, provider };
  export default db;