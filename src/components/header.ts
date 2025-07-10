import imgLogo from "../logo-bckg-removed.png"

class ChatHeader extends HTMLElement{
    shadow!: ShadowRoot
    constructor(){
        super();
        this.attachShadow({ mode: "open" })
        this.render()
    }
connectedCallback(){
    this.render();

}
render(){
    const isChatPage = window.location.pathname.includes("/chat/");
    
    this.shadowRoot!.innerHTML=`
    <style>
    div.header{
        width:100vw;
        margin:0;
        padding:0;
        background: linear-gradient(to bottom,rgb(39, 160, 176),rgba(12, 129, 74, 0.1));
        height:80px;
        display:flex;
        align-items:center;
        border-bottom: solid rgb(0,0,0,0.1) 1px
    }
    
    img.logo{
        width:150px; 
        height:48px; 
        margin-left:20px;
    }
    @media(width<600px){
        img.chat-page{
            margin-left:80px;
        }
    
    }
    </style>

    <div class="header">
        <div class="logo-img">
            <img class="logo ${isChatPage ? "chat-page" :"" } " src=${imgLogo} alt="logo image" style="width:150px; height:48px;">
        </div>
    </div>
    `

}
}
customElements.define("header-comp", ChatHeader);
