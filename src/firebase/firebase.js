import * as firebase from 'firebase'
// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//     measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyC3xjUIUAtFElYWrGPX-AjTaH8jdFPpgxE",
    authDomain: "expense-app-90f0a.firebaseapp.com",
    databaseURL: "https://expense-app-90f0a-default-rtdb.firebaseio.com",
    projectId: "expense-app-90f0a",
    storageBucket: "expense-app-90f0a.appspot.com",
    messagingSenderId: "740669853415",
    appId: "1:740669853415:web:275d4b927cf2ab2d309c42",
    measurementId: "G-BV3ZJN71GG"
};

firebase.initializeApp(firebaseConfig);


const database = firebase.database();

export { firebase, database as default };
// database.ref().set({
//     name: 'sumit nath',
//     age: 45,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Delhi',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('data is saved')
// }).catch((e) => {
//     console.log('This failed', e)
// })



// database.ref('age').set({
//     age: 46
// }).then(() => {
//     console.log('It worked')
// }).catch((e) => {
//     console.log(e, 'This failed')
// })
// database.ref('location/city').set('Jaipur')
// database.ref('attributes').set({
//     height: '166 cm',
//     weight: '67 kg'
// })

////// remove data
// database.ref('isSingle').remove()
//     .then(() => {
//         console.log("Remove succeeded.")
//     })
//     .catch((e) => {
//         console.log("Remove failed: ", e)
//     });

//////  update data
//// updating name, adding new data job, removing isSingle, updating nested object city
// database.ref().update({
//     name: 'Mike',
//     job: 'software engineer',
//     'location/city': 'agra',
//     isSingle: null
// })

////// change stress level to 9
////// change job company to amazon
////// change location city to New york
////// remove isSingle

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': ' New York',
//     isSingle: 'null'
// })

// ////// fetch data from databse
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log(e, 'Error in fatching data')
//     })
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })
// setTimeout(() => {
//     database.ref('age').set(27)
// }, 3000)
// setTimeout(() => {
//     database.ref('age').set(29)
// }, 4500)
// setTimeout(() => {
//     database.ref().off()
// }, 5000)

// setTimeout(() => {
//     database.ref('age').set(47)
// }, 6000)

// const onValueChange = (snapshot) => {
//     console.log(snapshot.val())
// }
// database.ref().on('value', onValueChange);

// setTimeout(() => {
//     database.ref('age').set(27)
// }, 3000)
// setTimeout(() => {
//     database.ref('age').set(29)
// }, 4500)
// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 5000)

// setTimeout(() => {
//     database.ref('age').set(47)
// }, 6000)

// setTimeout(() => {
//     database.ref('age').set(37)
// }, 7000)

//////// alternately we can write 

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e)
// });

// setTimeout(() => {
//     database.ref('age').set(27)
// }, 3000)
// setTimeout(() => {
//     database.ref('age').set(29)
// }, 4500)
// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 5000)

// setTimeout(() => {
//     database.ref('age').set(47)
// }, 6000)

// setTimeout(() => {
//     database.ref('age').set(17)
// }, 7000)

// ////// chanlange time 

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`)
// }, (e) => {
//     console.log('Error with data fatching', e)
// })

// database.ref('notes').push({
//     title: 'to do',
//     body: 'go to run'
// });


// database.ref('expenses').push({
//     description: 'rent',
//     notes: 'Tbhis mpont temt',
//     amount: '45201',
//     createdAt: '3586115471'
// });

///////////// generating random ids and setting the value

// database.ref('expenses').push({
//     description: 'food',
//     notes: 'Tbhis food  item',
//     amount: '5201',
//     createdAt: '37886115471'
// });
// database.ref('expenses').push({
//     description: 'play',
//     notes: ' team contribution',
//     amount: '45847',
//     createdAt: '9586115471'
// });
// database.ref('expenses').push({
//     description: 'Movie',
//     notes: 'Amblfptemt',
//     amount: '41',
//     createdAt: '98586115471'
// });



///////////////// how to fetch data from firebase in array format
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapShot) => {
//             expenses.push({
//                 id: childSnapShot.key,
//                 ...childSnapShot.val()
//             })
//         })
//         console.log(expenses)
//     })

// //////////////// challenge time setup subscription to expenses, when ever data changes we should get an arry on the screen
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapShot) => {
//         expenses.push({
//             id: childSnapShot.key,
//             ...childSnapShot.val()
//         })  
//     })
//     console.log(expenses)
// })

// // // ////////// triggers when some data is removed in database
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // // ////////// triggers when some data is changed/ updated in database
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })