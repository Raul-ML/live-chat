# Raul's Live Chat

ENGLISH (ESPAÑOL más abajo)

Raul's Live Chat is a fully functional real-time chat application built to practice and demonstrate frontend and backend integration, Firebase real-time database management, and user session handling. The app features public and private chat rooms, participant tracking, message expiration, and color-coded user identities.

Purpose

  This project was created to:
- Explore full-stack development with Firebase and custom API endpoints.
- Practice frontend routing and state handling.
- Handle real-time data updates using Firebase Realtime Database.
- Deploy a secure backend service separately from the client using Render.
- Build a clean and modular app with separate folders for frontend, backend, components, and pages.

Technologies Used
- TypeScript / JavaScript
- Parcel (bundler for the frontend)
- Firebase Realtime Database (data storage and sync)
- Express (Node.js) for backend API
- Render (for backend deployment)
- GitHub Pages (for frontend deployment)
- Vaadin Router for SPA-style client routing
- UUIDv4 for private room IDs
- Random color assignment to identify users

Main Features
- Public and private rooms, each with unique short/long IDs.
- Real-time chat updates using Firebase.
- Usernames and colors stored per session.
- Inactive messages auto-cleaned after a set number of days.
- Backend handles API routes for room cleanup and management.
- Firebase security rules restrict unauthorized database access.

How to Use

Before launching the chat app, you must activate the backend API by visiting:

➡️ https://backend-live-chat.onrender.com

Wait for a blank page that says: "Cannot GET /"

This step "wakes up" the Render backend service (Render puts it to sleep when inactive).

Once done, open the frontend app:

➡️ https://raul-ml.github.io/live-chat/

ℹ️ Notes

Firebase credentials are protected using a .env and deployed via Render.

The backend is hosted separately from the frontend for security purposes.

All user data is stored and synced in real-time through Firebase.

Participants are automatically removed from rooms when they disconnect, and rooms are deleted when empty.

___________________________________________________________________________________________________________

ESPAÑOL

Raul's Live Chatl es una aplicación de chat en tiempo real completamente funcional, creada para practicar e implementar integración frontend-backend, gestión de base de datos en tiempo real con Firebase y manejo de sesiones de usuario. La app incluye salas públicas y privadas, seguimiento de participantes, expiración de mensajes y usuarios identificados por colores únicos.

Objetivo del Proyecto

  Este proyecto fue desarrollado para:

- Explorar el desarrollo full-stack con Firebase y endpoints de API personalizados.
- Practicar el enrutamiento frontend y el manejo de estados.
- Gestionar actualizaciones de datos en tiempo real con Firebase Realtime Database.
- Desplegar un backend seguro por separado del cliente utilizando Render.
- Construir una app limpia y modular con carpetas diferenciadas para frontend, backend, componentes y páginas.

Tecnologías Utilizadas

- TypeScript / JavaScript
- Parcel (como bundler para el frontend)
- Firebase Realtime Database (almacenamiento y sincronización de datos)
- Express (Node.js) para la API del backend
- Render (para desplegar el backend)
- GitHub Pages (para desplegar el frontend)
- Vaadin Router para enrutamiento tipo SPA
- UUIDv4 para generar IDs únicos en salas privadas
- Asignación aleatoria de colores para identificar usuarios

Funciones Principales

- Salas públicas y privadas con identificadores cortos y largos únicos
- Actualización del chat en tiempo real mediante Firebase
- Nombres de usuario y colores almacenados por sesión
- Eliminación automática de mensajes inactivos tras varios días
- El backend gestiona rutas API para limpieza y mantenimiento de salas
- Las reglas de seguridad de Firebase limitan el acceso no autorizado a la base de datos

Cómo Usarlo

Antes de iniciar la aplicación de chat, debes activar la API del backend accediendo al siguiente enlace:

➡️ https://backend-live-chat.onrender.com

Espera a que aparezca una pantalla en blanco con el texto: "Cannot GET /"
Este paso "despierta" el backend alojado en Render (Render lo pone en reposo si no tiene actividad).

Una vez hecho esto, ya puedes abrir la app del frontend:

➡️ https://raul-ml.github.io/live-chat/

ℹ️ Notas

Las credenciales de Firebase están protegidas mediante un archivo .env y gestionadas en el backend en Render.

El backend está alojado por separado del frontend para mayor seguridad.

Todos los datos de usuario se almacenan y sincronizan en tiempo real usando Firebase.

Los participantes se eliminan automáticamente de las salas al desconectarse, y las salas privadas se borran cuando están vacías.
