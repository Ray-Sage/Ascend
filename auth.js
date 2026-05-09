import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    doc,
    getDocs,
    setDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYbc5UMPjL5Ov9HIsOi2yYz6EH2HiM1dc",
  authDomain: "ascendx-2992d.firebaseapp.com",
  projectId: "ascendx-2992d",
  storageBucket: "ascendx-2992d.appspot.com",
  messagingSenderId: "190104997680",
  appId: "1:190104997680:web:5ed91efc9e17fc059942f5",
  measurementId: "G-19XTLCD45V"
} 

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



// Firebase tools

async function renderCourses() {
   
       const container = document.getElementById("coursesCard");
       const data = await getDocs(collection(db, "courses"));
    


   await onSnapshot(collection(db, "courses"), snapshot => {
     let html = "";
     snapshot.forEach(doc => {
        const course = doc.data();
        
        html += `
        <div class="courseCard"> 
            <h3> ${course.name}</h3>
            <p> ${course.category}</p>
            <small> ${course.description}</small>
        `;
    })
    container.innerHTML = html;
        console.log("Data loaded successfuly");
})


}

renderCourses();