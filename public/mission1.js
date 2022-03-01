const fbConfig = {
    apiKey: "AIzaSyDzcK3aMb6B_rIL2SEUiazfBJ-mUSa2vCU",
    authDomain: "nurseekfirebase.firebaseapp.com",
    projectId: "nurseekfirebase",
    storageBucket: "nurseekfirebase.appspot.com",
    messagingSenderId: "259890841758",
    appId: "1:259890841758:web:956661bb5e25f379f9d38f",
    measurementId: "G-DQNS17C30Q"  
  };


  firebase.initializeApp(fbConfig);
  const dbase = firebase.firestore();

// 1. Just simple existing field update - easy
dbase.collection("courses").doc("7UYKuv2qeIroslCwALV0").update({
    // professor: "Harry",
    job: "witch"
}).then(() => {
    console.log('Existing field update - Success');
}) .catch(err => {
    console.error("Error:", err);
});

// 2. New field update with merge option - easy
var courseRef = dbase.collection("courses").doc("7UYKuv2qeIroslCwALV0");

var setWithMerge = courseRef.set({
    // professor: "Harry",
    skill: "cast a spell"
}, {merge: true});

// 3. Make number field and increase field with transaction mode (This is used when many users are incrementing a specific field at the same time.) -medium
var numberFieldDoc = dbase.collection("courses").doc("3qwTCpv1fGz7JviwlHMj");

dbase.runTransaction((transaction) => {
    return transaction.get(numberFieldDoc).then((fieldDoc) => {
        if(!fieldDoc.exists) {
            throw "Document doesn't exist";
        }

        // incrementing by manu users
        var newFriend = fieldDoc.data().friends + 1;
        // do not modify inside trans functions
        transaction.update(numberFieldDoc,{friends : newFriend});
    });
}). then(() => {
    console.log("Transaction success!");
}).catch((err) => {
    console.log("Transaction fail!", err);
})

// 4. Batch Update
var batch = dbase.batch();

    // setting values
    var firstDoc = dbase.collection("courses").doc("epS6W4ixAfKQhwJNBzPT");
    batch.set(firstDoc, { professor: "Levi"});
    // updating the values
    var secondDoc = dbase.collection("courses").doc("eTeFlgNfvLoB3BWg2mX7");
    batch.update(secondDoc, { skill : "sharingan"});

    // delete the doc
    var thirdDoc = dbase.collection("courses").doc("XoSg3cBxT9eR9KEVUdTv");
    batch.delete(thirdDoc);

    //commit the Batch
    batch.commit().then(() => {
        console.log("Batch success");
    }).catch((err) => {
        console.log("Batch fail");
    })