
import {Router} from "@vaadin/router"
import "../router.ts"
// import {rtdb} from "../backend/db.ts"


const initURL='/live-chat'

// const API_BASE_URL = "http://localhost:3000";
const API_BASE_URL = "https://backend-live-chat.onrender.com";

// Check rooms and messages to delete
function checkRooms(){
  const username=localStorage.getItem("name")
  const color=localStorage.getItem("color")

  fetch(API_BASE_URL + "/checkrooms", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username: username, color: color}),

  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      
    });
}

// Get all users
function getAllUsers() {
  const username=localStorage.getItem("name")
  
  fetch(API_BASE_URL + "/getusers", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
      },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("All users in chats are:", data);
      
    });
  }

// Create a chatroom
function createChatroom() {
  const username=localStorage.getItem("name")
  const color=localStorage.getItem("color")
  
  fetch(API_BASE_URL + "/createchat", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify({name: username, color: color}),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Room created with ID:", data.idShort);
      Router.go(initURL+"/chat/"+data.idShort)
    });
}

// Add a participant to the db
async function addParticipant(idShort:string) {
  const username=localStorage.getItem("name")
  const color=localStorage.getItem("color")
  const data= await listenRoom(idShort)
  const fullid=data.idFull

  fetch(API_BASE_URL + "/chat/" + idShort +"/addparticipant", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify({name: username, color: color, idShort: idShort, fullid:fullid}),
  })
    .then((res) => res.json())
    .then((data) => {

      console.log("The room " + idShort + " added the participant:", username);
    });
}

// Remove a participant from the db
async function removeParticipant() {
  const username=localStorage.getItem("name")
  const idShort=window.location.pathname.split("/")[2]
  const data= await listenRoom(idShort)
  const fullid=data.idFull

  await fetch(API_BASE_URL + "/chat/"+ idShort +"/removeparticipant", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: username, idShort: idShort, fullid:fullid}),
    })

  console.log("The room " + idShort + " removed the participant:", username);
    
  await checkAndDeleteChatroom(idShort)
}

// Delete empty room
async function checkAndDeleteChatroom(idShort:string) {
  const dataRoom= await listenRoom(idShort)
  const numPart = dataRoom.chatroom.participants ? Object.keys(dataRoom.chatroom.participants).length : 0;
  const fullid=dataRoom.idFull
  if (numPart==1){
  fetch(API_BASE_URL + "/chat/"+ idShort +"/deletechatroom", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idShort: idShort, fullid:fullid}),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("The room " + idShort + " is deleted");
    });
}}

// Listen changes in a specific room
async function listenRoom(idShort: string) {
  try{
    const response = await fetch(API_BASE_URL + "/chat/" + idShort ,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    });
    if (!response.ok) throw new Error("Error en la solicitud")
      const data = await response.json();
    return data;
  }catch (error){
    console.log("ERROR at listening room")
    return null
  }
}

function publicParticipantsLoad(){
  listenToParticipants("22338437")
  listenToParticipants("4f94d8d9")
  listenToParticipants("96479775")
}  

  // Listen to change in participant numbers 
async function listenToParticipants(idShort:string) {
  const roomData= await listenRoom(idShort)
  const fullid=roomData.idFull
  
  const numPart=Object.keys(roomData.chatroom.participants).length-1
  
  if (idShort=="22338437"){
    const counterEl = document.querySelector(".pc1-participants");
    if (counterEl) counterEl.textContent = JSON.stringify(numPart)
  }else if (idShort=="4f94d8d9"){
    const counterEl = document.querySelector(".pc2-participants");
    if (counterEl) counterEl.textContent = JSON.stringify(numPart)
  }else if (idShort=="96479775"){
    const counterEl = document.querySelector(".pc3-participants");
    if (counterEl) counterEl.textContent = JSON.stringify(numPart)
  }
  return numPart
}  

// Write messages in the database
async function writeMessages(user: string, message: string) {
  const idShort=window.location.pathname.split("/")[2]
  const time=Date.now()
  const color= localStorage.getItem("color")

  const roomData= await listenRoom(idShort)
  const fullid=roomData.idFull

    fetch(API_BASE_URL + `/chat/${idShort}/writemessages`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idShort: idShort, fullid:fullid, user:user, message:message, timestamp:time, color:color}),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log("The message has been written.")
    }
    );
  }
  
// Listen messages on change
async function listenMessages(idShort: string) {
  const roomData = await listenRoom(idShort);
  const fullid = roomData.idFull;
  const username=localStorage.getItem("name")
  console.log("the username is:", username)
  

  const eventSource = new EventSource(`${API_BASE_URL}/chat/${idShort}/listenmessages?fullid=${fullid}`);

  eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (data.messages!=null){
        console.log("Messages updated:", data.messages); 
        renderMessages(data.messages);
      }
  };

  eventSource.onerror = (error) => {
      console.error("Error in the SSE:", error);
      eventSource.close();
  };
}


function renderMessages(messages: Record<string, {username:string, color:string, message:string, timeInDB: number}>) {
  const container = document.querySelector(".messages-container");
  container!.innerHTML = ""; 
  
  let previousUserMsg="";
  let n=0;
  Object.entries(messages).forEach(([idTime, msgData]) => {
    if (idTime!="0"){
      const messageEl = document.createElement("div");
      messageEl.classList.add("message");
      if (msgData.username==localStorage.getItem("name") && msgData.color==localStorage.getItem("color")){
        var userAdmin="admin"  
      }else{
        var userAdmin="user"  
        
      }
      messageEl.classList.add(`${userAdmin}`);
      messageEl.textContent = msgData.message;
      const userEl = document.createElement("p");
      userEl.classList.add("user-msg");
      userEl.classList.add(`${userAdmin}`);

      const colorUser=msgData.color;
      if(colorUser!=null){
        userEl.style.color=colorUser;
      }
      if (userAdmin=="user"&&previousUserMsg!=msgData.username){
        userEl.textContent = msgData.username;
      }

      container!.appendChild(userEl);
      container!.appendChild(messageEl);
      previousUserMsg=msgData.username
      n+=1
    }
  });
  if (container){
    container.scrollTop=container.scrollHeight
  }
}


export {listenRoom, createChatroom, writeMessages, removeParticipant, addParticipant, 
  listenToParticipants, publicParticipantsLoad, checkAndDeleteChatroom, listenMessages,
  getAllUsers, checkRooms}