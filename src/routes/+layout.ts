// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { isSignedIn } from './stores';

// dev config
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCXmqQzGkCY4qk0uIrYrpe3745LaFUPsuo',
	authDomain: 'workflow-314a4.firebaseapp.com',
	projectId: 'workflow-314a4',
	storageBucket: 'workflow-314a4.appspot.com',
	messagingSenderId: '382224156988',
	appId: '1:382224156988:web:f7391884d097e4b985b639'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.onAuthStateChanged((user) => {
	console.log(`Auth state changed ${user?.email}`)
  if (user) {
    isSignedIn.set(true);
  }
})
