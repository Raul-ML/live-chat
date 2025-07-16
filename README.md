# Raul's Live Chat

(ESPAÑOL más abajo)

Raul's Live Chat is a fully functional real-time chat application built to practice and demonstrate frontend and backend integration, Firebase real-time database management, and user session handling. The app features public and private chat rooms, participant tracking, message expiration, and color-coded user identities.

🔧 Purpose
- This project was created to:
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

