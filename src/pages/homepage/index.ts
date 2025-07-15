import {Router} from "@vaadin/router"
import "../../components/header.ts"

class HomePage extends HTMLElement{
    name: string|null|undefined
    warning: string|null|undefined
    shadow!: ShadowRoot
    container!: HTMLDivElement;
    constructor(){
        super();
        this.attachShadow({ mode: "open" })
        this.container=document.createElement("div");
        this.shadowRoot!.appendChild(this.container);
        this.container.className="shadow"
        this.name=localStorage.getItem("name")
        this.warning=``
    }
firstVisit(){
    return this.name===null||undefined
}
containsBadWords(text:string){
    const badWords=["ass", "nig", "whore", "dick", "hole", "bitch","pussy","69","suck", "cock","sex","fuck","fagg","puta","puto","nazi",
        "gil","polla","pene","verga","subnor","imbecil","foll","coñi","coño","vagin","choch","chucha","hdp", "moro","null","undefined",
        "raul","Raul","raúl","Raúl"]
    const textLower=text.toLowerCase();
    return badWords.some(word => textLower.includes(word));
}

connectedCallback(){    
    // the router needs to add empty component, so we insert HTML in connectedCallback() that executes after putting the element in the DOM.
    this.render(); 
}
getNiceRandomColor() {
    const min = 100;
    const max = 200;
    const r = Math.floor(Math.random() * (max - min) + min);
    const g = Math.floor(Math.random() * (max - min) + min);
    const b = Math.floor(Math.random() * (max - min) + min);
    return `rgb(${r}, ${g}, ${b})`;
}

render(){
    const initURL='/live-chat'

    this.container!.innerHTML=`
    <style>
    .homepage-body{
        height:100vh;
        width: 100vw;
        background:linear-gradient(to bottom,rgba(114, 232, 222, 0.87) , rgb(12, 129, 74,0.3));
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    header-comp{
        margin-bottom:100px;
    }
    h1, h2, p{
        margin: 0;
        color: white;
    }
    div.titles{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:10px;
        padding-bottom:30px;
    }
    
    @media (width>600px){
        div.titles{
            flex-direction:row;
        }
    }

    h1{
        font-size:40px;
        -webkit-text-stroke: 0.1px rgb(0,0,0,0.5);
    } 

    @media(width>980px){
        h1{
            font-size:60px;
        }
    }

    div.label-input{
        display:flex;
        justify-content:center;
        margin-bottom:15px;
    }

    label{
        font-size:20px;
        font-weight:bold;
    
    }
    input{
        width:35vW;
        height:30px;
        padding-left:20px;
        border-radius:50px;
    }

    button{
        color:rgb(0,0,0,0.7);
        background-color: rgba(43, 180, 198, 0.62);
        border-radius:50px;
        border:solid 2px rgb(255,255,255,0.5);
        margin-left:5px;
        font-weight:bold;
        font-size:16px;
        height:50px;
        width:180px;
        font-family: "McLaren";

    }

    @media(width<600px){
        .input-button{
            flex-direction:column;
        }
        input{
            width:200px;
        }
    }
    @media(width>980px){
        label{
            font-size:30px;
            margin-bottom:20px;
        }
        input{
            width:400px;
            height:30px;
        }
        button{
            font-size:22px;
            height:55px;
            width:220px;
        }
        
    }

    h2{
        display:flex;
        gap:10px;

    }
    span.name{
        background-color:white;
        color: rgb(39, 160, 176);
        padding-right:10px;
        padding-left:10px;
<<<<<<< HEAD
=======
        // font-style: oblique;
>>>>>>> 6f8fab9ee20e9c26d707603155d0e2565f492358
        border-radius:50px;
    }
    form{
        width:100vw;
    }
    .input-button{
        display:flex;
        gap:20px;
        justify-content:center;
        align-items:center;
    }
    div.badwords{
        height:100px;
        width:100vw;
        display:flex;
        justify-content:center;
        padding-top:30px;
    }

    p.warning{
        color: #EA253D;
        opacity:0.7;
        font-size:20px;
        font-weight:bold;
    }
    
    @media(width>980px){
        p.warning{
            font-size:30px;
        }
    }

    .to-chatrooms{
        margin-top:20px;
        color-background:;
    }
    
    .change-name{
        margin-top:20px;
    }

    </style>


    <div class="homepage-body">
    <header-comp></header-comp>
        <div class="titles">
            <h1 class="main_title-welcome">Welcome to </h1>
            <h1 class="main_title-livechat"> Raul's LiveChat</h1>
        </div>
    ${this.firstVisit()? 
        `<form class="form">
            <div class="label-input">
                <label class="enter_name">Enter your name</label>
            </div> 
            <div class="input-button">
                <input class="input_name" type="text" name="name" placeholder="Name">
                <button class="form_button">Start LiveChat</button>
            </div>
        </form>       
        <div class="badwords">`+this.warning+`</div>
        `:
        `<h2 class="subtitle">Welcome back    <span class="name">${this.name}</span>!</h2>    
        <button class="to-chatrooms">Start LiveChat</button>
        <button class="change-name">Change Name</button>
        </div>`
    }`
        //set the form 
        const formEl = this.container.querySelector(".form")
        if (formEl){
        formEl?.addEventListener("submit",((e)=>{
            e.preventDefault();
            const target = e.target as any
            const nameInput=target.elements.name.value.trim()
    
            if (this.containsBadWords(nameInput)||nameInput===""){
                this.warning=`<p class="warning">Please, use other words as a name.</p>`
                this.render()
            }
            else{
                localStorage.setItem("name", nameInput)
                localStorage.setItem("color", this.getNiceRandomColor())
                this.name=nameInput
                Router.go(initURL+"/chatrooms"); 
            } 
        }))}
    
        //button to chatrooms
        const divToChat=this.container.querySelector(".to-chatrooms")
        if(divToChat){
    
            divToChat.addEventListener("click",((e)=>{
                e.preventDefault();
                Router.go(initURL+"/chatrooms")
            }))
        }
        
        //button change name
        const buttonDeleteEl=this.container.querySelector(".change-name")
        if (buttonDeleteEl){
    
            buttonDeleteEl?.addEventListener("click",((e)=>{
                e.preventDefault();
                const target = e.target as any
                localStorage.removeItem("name")
                this.name=null
                this.render()
            }))
        }
    
}
}
customElements.define("home-page", HomePage);
