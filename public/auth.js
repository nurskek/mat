

 const firebaseConfig = {
    apiKey: "AIzaSyDzcK3aMb6B_rIL2SEUiazfBJ-mUSa2vCU",
    authDomain: "nurseekfirebase.firebaseapp.com",
    projectId: "nurseekfirebase",
    storageBucket: "nurseekfirebase.appspot.com",
    messagingSenderId: "259890841758",
    appId: "1:259890841758:web:956661bb5e25f379f9d38f",
    measurementId: "G-DQNS17C30Q"
  };

  // Initialize Firebase
  // we can do that as we wrote the script in head section
  // we interact with database through 'db'
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });
//   const nursList = document.querySelector("#himan1"); //himan1 is id of <ul>
  const form = document.querySelector("#add-data"); // for creating data in firestore;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(formList.);
    const em = form.email.value;
    const passw = form.password.value;

    auth.createUserWithEmailAndPassword(em, passw).then((userCredential) => {
    // Signed in 
    console.log(userCredential);})
    })





// /* <a class="nav-link text-white " href="./pages/sign-up.html">
//     <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
//         <i class="material-icons opacity-10">assignment</i>
//     </div>
//     <span class="nav-link-text ms-1">Sign Up</span>

//     auth-button
// </a> */

// const firebaseConfig = {
//     apiKey: "AIzaSyDzcK3aMb6B_rIL2SEUiazfBJ-mUSa2vCU",
//     authDomain: "nurseekfirebase.firebaseapp.com",
//     projectId: "nurseekfirebase",
//     storageBucket: "nurseekfirebase.appspot.com",
//     messagingSenderId: "259890841758",
//     appId: "1:259890841758:web:956661bb5e25f379f9d38f",
//     measurementId: "G-DQNS17C30Q"
// };

//   // Initialize Firebase
//   // we can do that as we wrote the script in head section
//   // we interact with database through 'db'
//   firebase.initializeApp(firebaseConfig);
//   const auth = firebase.auth();
//   const db = firebase.firestore();

//   db.settings({ timestampsInSnapshots: true });

//   //setting maybe needed #4 lecture
//   const formList = document.querySelector("#ourForm");
//   formList.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // console.log(formList.);
//     const em = formList['ourEmail'].value;
//     const passw = formList['ourPass'].value;

    // auth.createUserWithEmailAndPassword(em, passw).then((userCredential) => {
    //     // Signed in 
    //     console.log(userCredential);})
    // })






