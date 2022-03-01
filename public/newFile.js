
//   const firebaseConfig = {
//   apiKey: "AIzaSyDzcK3aMb6B_rIL2SEUiazfBJ-mUSa2vCU",
//   authDomain: "nurseekfirebase.firebaseapp.com",
//   projectId: "nurseekfirebase",
//   storageBucket: "nurseekfirebase.appspot.com",
//   messagingSenderId: "259890841758",
//   appId: "1:259890841758:web:956661bb5e25f379f9d38f",
//   measurementId: "G-DQNS17C30Q"  
// }; 

//   // Initialize Firebase
//   // we can do that as we wrote the script in head section
//   // we interact with database through 'db'
//   firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
//   const nursList = document.querySelector("#himan1"); //himan1 is id of <ul>
//   const form = document.querySelector("#add-data"); // for creating data in firestore;
//   // add-data is id of form with two inputs

//   //getting data
//   // when part 'db.collection('courses').get()' is ready, we have data, and we pass
//   // parameter 'snapshot', which is what we receive back when
//   // 'db.collection('courses').get()' is ready, we have data, and we pass
//   // db.collection('courses').get().then((snapshot) => {
//   //   snapshot.docs.forEach((doc) => {
//   //     renderMachine(doc);
//   //   });
//   // }) // THIS WORKS, JUST WANT TO CHECK QUERY

//   // making queries for
//   // inside the  where parameters: the value of field, how we want to evaluate, what value we want to be equal
//   db.collection('courses').where('job', '==', 'magician').get().then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       renderMachine(doc);
//     });
//   })

//   //saving data, not real time
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     //add method takes object as parameter
//     db.collection('courses').add({
//       job : form.job.value,
//       professor : form.prof.value
//     })
//     form.job.value = '';
//     form.prof.value = '';
//   })

//   function renderMachine(doc) {
//     let li = document.createElement("li");
//     let name = document.createElement("span");
//     let cross = document.createElement('div');

//     cross.textContent = 'x';
//     name.textContent = doc.data().professor;

//     li.setAttribute('data-id', doc.id);
//     li.appendChild(name);
//     li.appendChild(cross);
//     nursList.appendChild(li);

//     //deleting data
//     cross.addEventListener('click', (e) => {
//       let id = e.target.parentElement.getAttribute('data-id');
//       db.collection('courses').doc(id).delete();
//     })
//   }