import "../pages/homepage/index.ts"
import "../pages/chatselection/index.ts"
import "../pages/chat/index.ts"
import {Router} from "@vaadin/router"

import {listenRoom, createChatroom, writeMessages, removeParticipant, addParticipant, 
    listenToParticipants, publicParticipantsLoad, checkAndDeleteChatroom, listenMessages,
    getAllUsers, checkRooms}
from "./api.ts"

const listurl=window.location.pathname.split("/")
const idShort=listurl[listurl.length-1]

const initURL='/live-chat'
// const initURL=''

window.addEventListener('popstate', (event) => {
    console.log('The URL changed to: ', window.location.pathname);
    const listurl=window.location.pathname.split("/")
    const idShort=listurl[listurl.length-1]

    if (window.location.pathname.startsWith(initURL+"/chatrooms")) {
        publicParticipantsLoad(); 
        checkRooms();

    setInterval(() => {
        if (window.location.pathname.startsWith(initURL+"/chatrooms")){
            publicParticipantsLoad(); 
        }
    }, 3000);
    }
    if (window.location.pathname.startsWith(initURL+"/chat/"+idShort)) {
        window.addEventListener("DOMContentLoaded", () => {
            addParticipant(idShort);
        });
    }
    if (window.location.pathname.startsWith(initURL+"/chat/")) {
        listenMessages(idShort); 
    }
});

if (window.location.pathname.startsWith(initURL+"/chatrooms")) {
    const name=localStorage.getItem("name")
    const color=localStorage.getItem("color")
    if (!name&&!color){
        Router.go("/")
    }
    publicParticipantsLoad(); 
    checkRooms();
    
    setInterval(() => {
        if (window.location.pathname.startsWith(initURL+"/chatrooms")){
            publicParticipantsLoad(); 
        }
    }, 3000);
}
if (window.location.pathname.startsWith(initURL+"/chat/"+idShort)) {
    const name=localStorage.getItem("name")
    const color=localStorage.getItem("color")
    if (!name&&!color){
        Router.go("/")
    }


    window.addEventListener("DOMContentLoaded", () => {
        addParticipant(idShort);
    });
}


document.addEventListener("submit", async (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains("form-send-msg")) {
        event.preventDefault();
        const inputEl = document.querySelector(".input-send-msg") as HTMLInputElement
        const inputValue = inputEl.value;
        const username=localStorage.getItem("name")!
        writeMessages(username, inputValue)
        inputEl.value="";
    }
})   

document!.addEventListener("keydown", function (e) {
    const target = e.target as HTMLElement;

    if (target.classList.contains("input-send-msg")) {
        const textarea = document.querySelector(".input-send-msg") as HTMLInputElement
        const inputValue = textarea.value;
        const username=localStorage.getItem("name")
        if (username && e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); 
            writeMessages(username, inputValue)
            textarea.value="";
  }
}
});


if (window.location.pathname.startsWith(initURL+"/chat/")) {
    listenMessages(idShort); 
}

document.addEventListener("click", async (event) => {
    const target = event.target as HTMLElement;
    
    if (target.classList.contains("create_private")) {
        event.preventDefault();
        createChatroom();
    }
    else if (target.classList.contains("back-button")) {
        event.preventDefault();
        removeParticipant();
        Router.go(initURL+"/chatrooms")
    }
    else if (target.classList.contains("public_chat_1")) {
        event.preventDefault();
        const participantsText = document.querySelector(".pc1-participants")!;
        if (participantsText && participantsText.textContent) {
        const participantsCount = parseInt(participantsText.textContent, 10);
        if (!isNaN(participantsCount) && participantsCount <= 10) {
            const idShort="22338437"
            Router.go(initURL+"/chat/"+idShort);
            addParticipant(idShort);
        }}
      }
    else if (target.classList.contains("public_chat_2")) {
        event.preventDefault();
        const participantsText = document.querySelector(".pc2-participants")!;
        if (participantsText && participantsText.textContent) {
        const participantsCount = parseInt(participantsText.textContent, 10);
        if (!isNaN(participantsCount) && participantsCount <= 10) {
            const idShort="4f94d8d9"
            Router.go(initURL+"/chat/"+idShort);
            addParticipant(idShort);
        }}
      }
    else if (target.classList.contains("public_chat_3")) {
        event.preventDefault();
        const participantsText = document.querySelector(".pc3-participants")!;
        if (participantsText && participantsText.textContent) {
        const participantsCount = parseInt(participantsText.textContent, 10);
        if (!isNaN(participantsCount) && participantsCount <= 10) {
            const idShort="96479775"
            Router.go(initURL+"/chat/"+idShort);
            addParticipant(idShort);
        }}
      }
    else if (target.classList.contains("join_private")) {
        event.preventDefault();
        const popupJoinEl=document.querySelector(".popup-container")
        popupJoinEl!.innerHTML=`
        <div class="popup-join">
            <h2 class="insert-id">Insert ChatRoom ID to join</h2>
            <form class="join-form">
                <input class="id-input" placeholder="ID: 12345678">
                <div class="id-miss-alert"></div>
                <button class="button-join-chat">Enter ChatRoom </button>
            </form>
            <button type="submit" class="close-x">x</button>
        </div>
        `
      }
    else if (target.classList.contains("close-x")) {
        event.preventDefault();
        const popupJoinEl=document.querySelector(".popup-container")
        popupJoinEl!.innerHTML=``
      }
    else if (target.classList.contains("button-join-chat")) {
        event.preventDefault();
        const inputElement = document.querySelector(".id-input")! as HTMLInputElement
        const idShort=inputElement.value
        if (idShort.length!=8){
            const alertEl=document.querySelector(".id-miss-alert")
            alertEl!.innerHTML=`<p class="miss-alert-text">The ID must have 8 characters.</p>`
        }else{
            const test=await listenRoom(idShort)
            const numPart=test? Object.keys(test.chatroom.participants).length-1:0

            if (test!=null && numPart<1){ 
                // The room exists and it is not full
                console.log("you entered to the room with the idShort:" ,idShort)
                Router.go(initURL+"/chat/"+idShort);
                addParticipant(idShort);
            }else if (numPart ==1){
                const alertEl=document.querySelector(".id-miss-alert")
                alertEl!.innerHTML=`<p class="miss-alert-text">The room is full. Please try again later!</p>`
            }else{
                const alertEl=document.querySelector(".id-miss-alert")
                alertEl!.innerHTML=`<p class="miss-alert-text">The Chatroom does not exist!</p>`
            }
        }
      }
    ;}
  );

