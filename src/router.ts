import {Router} from '@vaadin/router';

import "./pages/chatselection/index.ts";
import "./pages/homepage/index.ts";
import "./pages/chat/index.ts";

const router = new Router(document.querySelector(".root"));
console.log("se ha iniciado el router.")


router.setRoutes([
  {path: '/', component: 'home-page'},
  {path: '/chatrooms', component: 'chatrooms-page'},
  {path: '/chat/:id', component: 'chats-page'},
]);

