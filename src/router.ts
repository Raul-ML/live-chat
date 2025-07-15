import {Router} from '@vaadin/router';

import "./pages/chatselection/index.ts";
import "./pages/homepage/index.ts";
import "./pages/chat/index.ts";

// const initURL=''
const initURL='/live-chat'

const router = new Router(document.querySelector(".root"), {
  baseUrl: initURL,
});
console.log("se ha iniciado el router.")

console.log("la abse url del router es: ",router.baseUrl)
router.setRoutes([
  {path: '/', component: 'home-page'},
  {path: '/chatrooms', component: 'chatrooms-page'},
  {path: '/chat/:id', component: 'chats-page'},
]);


