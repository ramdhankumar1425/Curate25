# Curate - Text-to-Website Generator

<br />
<p align="center">
  <img src="client/public/images/logo-text.png" alt="Curate Logo" width="400"/>
</p>
<br />

## 🌐 Product Overview

_Curate_ is a powerful _Text-to-Website Generator_ that allows users with no coding experience to create _responsive and fully functional websites_ using natural language prompts.
With an intuitive user interface, seamless API integration, and AI-powered automation, Curate enables dynamic website generation and customization within _5 minutes_.

This project is built to reduce the technical barriers faced by non-technical users while ensuring scalability, performance, and reliability.

### ✨ Key Features:

-   _Natural Language Input_ – Convert text descriptions into fully functional websites.
-   _Live Responsive Preview_ – See real-time changes across various devices.
-   _Code Editor & Download_ – Modify the generated website code and export it.
-   _Authentication & Storage_ – Securely save and manage website projects.

---

## 🚀 Live Demo

📺 [Demo Video Link](https://drive.google.com/file/d/1CjHo5Weh7G0gfPRnZY0XQ4LUUxCA_SRz/view?usp=sharing)

---

## 🔗 Deployed Client Link

🔗 [curate25](https://curate2025.vercel.app/)

---

## 🔗 GitHub Repository

🔗 [Project Repository](https://github.com/ramdhankumar1425/Curate25)

---

## 🏗️ Architecture

### _Frontend_

-   Built with _React.js_ for dynamic UI.
-   Styled using _TailwindCSS_ for a scalable and responsive design.
-   Uses _HTML iframe tag_ for live previews.

### _Backend_

-   Developed using _Node.js and Express.js_.
-   _Auth0 Authentication_ for secure user login and project management.
-   Secure database storage with _MongoDB_.
-   Using _Vite_ to bundle the generated React website for fast and efficient client-side rendering.

### _Deployment_

-   _Frontend_ hosted on _Vercel_.
-   _Backend_ deployed using _Render_.
-   _CI/CD Pipelines_ implemented via _GitHub Actions_ for automated deployment.

---

## 🛠️ Installation & Setup

### _Prerequisites_

Ensure you have the following installed:

-   _Node.js_ (Download: [Node.js](https://nodejs.org/))
-   _MongoDB_ (for database storage)
-   _Git_ (for version control)

### _Steps to Run_

1. _Clone the repository_
   sh
   git clone https://github.com/ramdhankumar1425/Kriti25_ProductDev.git
   cd Kriti25_ProductDev

2. _Install Server Dependencies_
   sh
   cd server
   npm install
3. _Install Client Dependencies_
   sh
   cd client
   npm install

4. _Set up environment variables_

    - Create a .env file inside both the client and server directories to store sensitive API credentials.
    - Add the following variables:

    _For Frontend (client/.env):_
    env
    VITE_SERVER_URI=http://localhost:5000
    VITE_AUTH0_DOMAIN=<your_auth0_domain>
    VITE_AUTH0_CLIENT_ID=<your_auth0_client_id>
    VITE_AUTH0_AUDIENCE=<your_auth0_audience>

    _For Backend (server/.env):_
    env
    CLIENT_URI=http://localhost:5173
    AUTH0_AUDIENCE=<your_auth0_audience>
    AUTH0_ISSUER=<your_auth0_issuer>
    CLAUDE_API_KEY=<your_claude_api_key>
    MONGO_URI=<your_mongodb_connection_string>

5. _Run the Server_
   bash
   cd server
   npm start
6. _Run the Client_
   bash
   cd client
   npm run dev

7. _Open in Browser_
   bash
   http://localhost:5173

---

## 🔧 Building with Curate

### ✅ Natural Language Input

-   Users describe their website ideas in plain English.
-   Curate will generate a fully functional, responsive website tailored to their input.
<!--- *Claude API* processes the input to generate structured website content.-->

### ✅ Live Responsive Preview

-   Allows users to see their website across different screen sizes.
-   _CSS media queries_ and _TailwindCSS breakpoints_ ensure responsive design.

<!--### ✅ Drag & Drop Customization
- Users can easily modify their website layout using an intuitive drag-and-drop builder.
- Components such as text, images, buttons, and sections can be repositioned seamlessly.
- Ensures flexibility without needing to write code. -->

### ✅ Code Editor, Download & Local Setup

-   Advanced users can modify the site’s code directly and export it.
-   Uses _Monaco Editor_ for syntax highlighting and easy modifications.
-   Users can download their project as a ZIP file for offline use.
-   To run the project locally after extraction:
    ```sh
    npm install
    npm start
    ```

### ✅ Authentication & Database Integration

-   _Auth0 Authentication_ manages user login and secure access.
-   _MongoDB_ stores previous projects for easy retrieval.

---

_Curate_ represents a _significant step_ towards democratizing website development. By combining _AI-driven automation_ with a _user-friendly design, it empowers \*\*both beginners and professionals_ to create customized, responsive websites effortlessly.

---
