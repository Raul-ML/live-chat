import {Router} from "@vaadin/router"
import personIcon from "../../person-icon.png"

class Chatrooms extends HTMLElement{
    constructor(){
        super();

    }
connectedCallback(){
    this.render();

}
render(){
    const initURL='/live-chat'

    this.innerHTML=`
    <style>
    
    .private-buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:10px;
        padding-top: 5px;
        width:80vw;
    }

    .public-buttons{
            
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 5px;
        width:80vw;
    }
    .pc-counts{
        display:flex;
        flex-direction:column;
        gap:30px;   
    }
    @media(width>980px){
        .pc-counts{
            gap:22px;   
        }
    }
    .chatselection-body{
        height:100vh;
        width: 100vw;
        background:linear-gradient(to bottom,rgba(114, 232, 222, 0.87) , rgb(12, 129, 74,0.3));
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        margin-top: 60px;
        color: rgb(255, 255, 255);
        text-align: center;
        -webkit-text-stroke: 0.1px rgb(0,0,0,0.5);
    }

    h3{
        margin-top: 8px;
        color: white;
        text-align: center;
        font-size: 25px;

    }

    @media(width>980px){
        .chatselection-body{
            
        }
        h1{
            font-size:40px;
            margin-top:30px;
        }
        h3{
            font-size:30px;
        }
    }


    button{
        min-width:unset;
        height:50px;
        width:180px;
        color:rgb(0,0,0,0.7);
        background-color: rgba(43, 180, 198, 0.62);
        border-radius:50px;
        border:solid 2px rgb(255,255,255,0.5);
        font-weight: bold;
        font-size: 18px;
        flex-shrink: 0;
    }
    @media(width>980px){
        button{
            font-size:22px;
            height:55px;
            width:220px;
        }
    }
    .back-home-button{
        position:absolute;
        margin-top:110px;
        left:20px;
        min-width:unset;
        width:60px;
        height:30px;
        background-color: rgba(43, 180, 198, 0.62);
        color:rgb(0,0,0,0.7);
        border-radius:50px;
        border:solid 0.5px rgb(255,255,255,0.1);
        font-weight: bold;
        font-size:13px;
    }
    h2.pc-total, h2.pc1-participants, h2.pc2-participants, h2.pc3-participants{
        text-align:right;
        color:grey;
        min-width:14px;
        font-size:14px;
        margin:0;
        padding:0;
        }
    @media(width>980px){
        h2.pc-total, h2.pc1-participants, h2.pc2-participants, h2.pc3-participants{
            min-width:30px;
            font-size:24px;
        }
    }
    div.pc1-count, div.pc2-count, div.pc3-count{
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content:center;
        width:100%;
        margin:0;
        padding:0;
    }

    div.popup-container{
        display:flex;
        align-items:center;
        justify-content:center;
        position:absolute;
        z-index:100;
        top:200px;
        width:260px;
    }
    @media(width>600px){
        div.popup-container{
            width:50%;
        
        }
    }
    div.popup-join{
        display:flex;
        flex-direction:column;
        width:100%;
        height:100%;
        border:solid 5px rgb(112, 211, 211);
        border-radius:20px;
        gap:20px;
        background: linear-gradient(to bottom,rgba(60, 200, 220),rgb(12, 129, 140));
    }
    h2.insert-id{
        margin:20px 20px 0 20px;
        padding:0;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
    }
    .join-form{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:10px;
    }
    .id-input{
        width:70%;
        // max-width:500px;
        height:30px;
        border-radius:5px;
        padding-left:15px;
    }

    .button-join-chat{
        background-color:rgba(114, 232, 222, 0.87);
        margin-bottom:20px;

    }
    @media(width<415px){
        .button-join-chat{
            background-color:rgba(114, 232, 222, 0.87);
            margin-bottom:20px;
        }
    }      

    button.close-x{
        all:unset;
        position: absolute; 
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        border: none;
        border-radius:10px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        line-height: 30px; 
        cursor: pointer;    
    }

    button.close-x:hover {
        color:white;
    }
    .miss-alert-text{
        color:#EA253D;
        opacity:0.8;
        font-size:20px;
        font-weight:bold;
    }
    .public_chat_1, .public_chat_2, .public_chat_3{
        margin-left:47px;
    }
    @media(width>980px){
        .public_chat_1, .public_chat_2, .public_chat_3{
            margin-left:99px;
        }
    }
    
    .create_private, .join_private{
        margin-left:99px;
        margin-right:100px;
    }

    img{
        min-width:10px; 
        height:10px;
        margin-left:5px;
    }
    @media(width>980px){
        img{
            min-width:20px; 
            height:20px;
            margin-left:10px;
        }
    }
    </style>


    <button class="back-home-button">BACK </button>
    <div class="chatselection-body">
        <header-comp></header-comp>
        <h1 class="select_chat">Select a Chatroom</h1>
        <h3 class="public_title">Public</h3>
        <div class="public-buttons">
            <div class="pc-buttons">
                <div class="pc1-button">
                    <button class="public_chat_1">Chatroom 1</button>
                </div>
                <div class="pc2-button">
                    <button class="public_chat_2">Chatroom 2</button>
                </div>
                <div class="pc3-button">
                    <button class="public_chat_3">Chatroom 3</button>
                </div>
            </div>
            <div class="pc-counts">
                <div class="pc1-count">
                    <h2 class="pc1-participants">-</h2>
                    <h2 class="pc-total">/10</h2>
                    <img src=${personIcon}>
                </div>
                <div class="pc2-count">
                    <h2 class="pc2-participants">-</h2>
                    <h2 class="pc-total">/10</h2>
                    <img src=${personIcon}>
                </div>
                <div class="pc3-count">
                    <h2 class="pc3-participants">-</h2>
                    <h2 class="pc-total">/10</h2>
                    <img src=${personIcon}>
                </div>
            </div>
        </div>
        <h3 class="private-title">Private</h3>
        <div class="private-buttons">
            <button class="create_private">Create Chatroom</button>
            <button class="join_private">Join Chatroom</button>
        </div>
        <div class="popup-container"></div>
    </div>

    `
    const backbuttonEl = this.querySelector(".back-home-button")
    backbuttonEl?.addEventListener("click",((e)=>{
        e.preventDefault();
        const target = e.target as any
        Router.go(initURL+"/")
    }));

}
}
customElements.define("chatrooms-page", Chatrooms);
