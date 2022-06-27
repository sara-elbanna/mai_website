import firebase from 'firebase/compat/app';
const firebaseConfig = {
    apiKey: "AIzaSyD-vC-JspcGn8u8FECjlFgg4w2Q2Ofamno",
    authDomain: "mai-apps.firebaseapp.com",
    projectId: "mai-apps",
    storageBucket: "mai-apps.appspot.com",
    messagingSenderId: "691204581642",
    appId: "1:691204581642:web:0992b3e95cb79bd55972f3",
    measurementId: "G-MSSLTZHXNM"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig)

// try {
//   addDoc(collection(db, "users"), {
//     first: "sara",
//     last: "banna",
//     born: 1815
//   }).then(docRef => {
//     console.log("Document written with ID: ", docRef.id);

//   });
// } catch (e) {
//   console.error("Error adding document: ", e);
// }



// const querySnapshot = getDocs(collection(db, "users")).then(querySnapshot=>{
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//       });
// })
