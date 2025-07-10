import {Router} from "@vaadin/router"
import sendicon from "../../send-icon2.png"

class ChatPage extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.render();
        
    }
    render(){
    var idShort=window.location.pathname.split("/")[2]
    this.innerHTML=`
    <style>
        
    .chats-body{
        height:100vh;
        width: 100vw;
        background-color:rgba(114, 232, 222, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .back-button{
        position:absolute;
        margin-top:110px;
        left:20px;
        min-width:unset;
        width:60px;
        height:30px;
        background-color: rgba(43, 180, 198);
        color:rgb(0,0,0,0.7);
        border-radius:50px;
        border:solid 0.5px rgb(255,255,255,0.1);
        font-weight: bold;
        z-index:1000;
    }
    
    @media(width<600px){
        button.back-button{
            margin-top:25px;
            color:rgb(255,255,255);
        }
    }


    form.form-send-msg{
        display:flex;
        justify-content:center;
        position:absolute;
        bottom:20px;
        width:95vw;
        max-width:1800px;
        height:50px;
        gap:5px;
        padding-left:10px;
    }



    textarea.input-send-msg{
        flex-grow:1;
        height:45px;
        border-radius:50px;
        padding: 10px 3vw;
        margin-top:5px;
        max-width:1000px;
        overflow-y: auto;
        resize:none;
        white-space: pre-wrap;
        overflow-wrap: break-word;
    }

    button.button-send-msg{
        width:50px; 
        height:100%;
        border:none;
        background-color: transparent;
        cursor:pointer;
        bottom:30px;
        display:flex;
        align-items:center;
        justify-content:center;
    }
        
    img.img-send-msg{
        width: 40px;
        height: 40px;
        max-width: 50px ;
        max-height: 50px ;
        object-fit: contain;
        display: block;
    }

    h2.id{
        position:absolute;
        top:30px;
        right:5vw;
        min-width:100px;
        margin:0;
        padding:0;
        color: rgba(0, 140, 160);
        font-size:20px;
    }

    
    @media(width<600px){
        h2.id{
            font-size:14px;
            padding-left:10px;
        }
    }
        
    .messages-container{
        // border:solid 3px black;
        flex-grow:1;
        overflow-y:auto;
        width:70vw;
        max-width:900px;
        margin-bottom: 75px;
        display:flex;
        flex-direction:column;
    }
    .message{
        padding: 8px;
        border-radius: 10px;
        margin-bottom: 5px;
        margin-left: 10px;
        width: fit-content;
        height: fit-content;
        max-width: 80%;
        word-wrap: break-word;
        background:rgb(227, 253, 233);
        align-self: flex-end;
    }
    .message.user {
        background: #e3f2fd;
        align-self: flex-start;
    }

    .user-msg.admin{
        background:none;
        font-weight: bold;
        align-self: flex-end;
    }
    .user-msg{
        background:none;
        font-weight: bold;
        align-self: flex-start;
        padding-left:20px;
        padding-top:10px;
    }

    </style>

    <div class="chats-body">
        <header-comp></header-comp>
        <h2 class="id">ID: ${idShort}</h2>
        <div class="messages-container">
        </div>
        <button class="back-button">BACK </button>
        <form class="form-send-msg">
            <textarea  class="input-send-msg" type="text" placeholder="Write a message"></textarea>
            <button class="button-send-msg">
                <img class="img-send-msg" src="${sendicon}" >
            </button>
        </form>
    </div>

    `
        };
}
customElements.define("chats-page", ChatPage);
