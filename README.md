# 📦 SaaS Inventory - Sistema de Gestión de Inventario / Inventory Management System

<div align="center">
  <a href="https://saas-inventory-1.onrender.com">
    <img src="https://img.shields.io/badge/Demo-Live-brightgreen?style=for-the-badge&logo=render&logoColor=white" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/Backend-Spring%20Boot%203-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/AI--Assisted-Gemini-blueviolet?style=for-the-badge&logo=google-gemini&logoColor=white" alt="AI Assisted" />
</div>

<div align="center">
  <h3>[ <a href="#español">Español</a> ] | [ <a href="#english">English</a> ]</h3>
</div>

---

# English Version

Hello! This is my SaaS Inventory project. It is a system to manage products and stock that I built to learn how to connect a modern frontend with a real backend server and a relational PostgreSQL database in production.

🔗 Live Demo (Frontend): https://saas-inventory-1.onrender.com

🔗 API URL (Backend): https://saas-inventory-h49i.onrender.com

🔗 Interactive Documentation (Swagger): https://saas-inventory-h49i.onrender.com/swagger-ui/index.html

## 🚀 Live Demo & Links
* **Frontend Web App (Render):** [https://saas-inventory-1.onrender.com](https://saas-inventory-1.onrender.com/)
* **Backend API (Render):** [https://saas-inventory-h49i.onrender.com](https://saas-inventory-h49i.onrender.com)
* **API Documentation (Swagger UI):** [https://saas-inventory-h49i.onrender.com/swagger-ui/index.html](https://saas-inventory-h49i.onrender.com/swagger-ui/index.html)

## 📸 Dashboard Preview
Here is a look at the inventory in action, showing the company inventory dashboard, search filtering, and CRUD operations:

<div align="center">
  <img src="./screenshots/dashboard.png" alt="SaaS Inventory Dashboard" width="90%" style="border-radius: 10px; border: 1px solid #333;" />
</div>

🚀 Issues I Encountered & How I Solved Them (My Learning Journey)
Deploying an application to production (Render) has its challenges. These were the most important issues I had to solve to get the app running properly:

1. The "/api/v1" Route Error (404 Error)
What happened: Initially, the frontend was trying to fetch products from /productos but the backend had them mapped under /api/v1/productos. The server couldn't find the route and returned a 404 error.

How I fixed it: I updated the ProductService.js file in React to unify all endpoints under the correct API prefix.

2. The Brackets "Monster URL" (ERR_NAME_NOT_RESOLVED)
What happened: When setting up the server URL in the environment variables, I accidentally included brackets: [https://saas-inventory-h49i.onrender.com]. This caused React to try to call an invalid address that the browser could not understand.

How I fixed it: I cleaned up the environment variable in the Render dashboard, leaving it clean (without brackets), and added a small text "sanitizer" in my axiosInstance.js file to ensure the URL is always processed without strange characters.

3. The CORS Block (CORS Policy Error)
What happened: For security reasons, the Spring Boot backend blocked requests coming from the React frontend URL because it didn't recognize it as a safe origin.

How I fixed it: I added a CORS configuration class in Java (WebConfig.java) to explicitly tell Spring Boot to safely allow cross-origin requests from my React app on Render.

4. Infinite JSON Recursion Loop (StackOverflowError)
What happened: When setting up the bidirectional One-to-Many relationship between Company and Product, the JSON serializer kept trying to serialize the product within the company, and the company within the product forever.

How I fixed it: I cleanly structured the relationship using Jackson annotations: @JsonManagedReference in the Empresa entity and @JsonBackReference in the Producto entity.

## 🤖 AI Assistance & Collaboration 

This project was developed using modern **AI-assisted development** workflows. Generative AI (Gemini) was utilized as a pair-programmer to assist in:
* Architectural decision-making (JPA bidirectional relationships & Jackson references).
* Debugging system errors (such as CORS configurations and React rendering cycles).
* Writing and optimization of clean, modular code for both Spring Boot and React.

## 🛠️ Tech Stack
Java 17 & Spring Boot 3 (for the backend server).

Gradle (for managing Java dependencies).

Spring Data JPA & Hibernate (for the ORM).

PostgreSQL (for the database).

React with Vite (for the fast web interface).

Axios (for making network calls between React and Java).

Lucide React & React Hot Toast (for UI icons and notifications).

## 💡 Key Features
* **Multi-tenant Concept:** Products are bidirectionally mapped to specific companies without infinite JSON serialization loops.
* **Full CRUD Operations:** Seamless creation, reading, updating, and deletion of products and companies.
* **Live Search Filter:** Instant client-side search filtering by name or description.
* **Interactive API Playground:** Fully documented endpoints via Swagger.
* **Secure CORS Configuration:** Standardized origins supporting local and cloud environments.

⚙️ How to Run the Project Locally
1. Start the Backend (Java)
  1. Go to the backend folder.

  2. Open the src/main/resources/application.yaml file and fill in your local PostgreSQL database details:

  spring:
    datasource:
      url: jdbc:postgresql://localhost:5432/tu_base_datos
      username: tu_usuario
      password: tu_contraseña
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true

  3. Run the server from your terminal or IDE (like IntelliJ or VS Code):

   ./gradlew bootRun

2. Start the Frontend (React)
   1. Go to the frontend folder in another terminal window.

   2. Install the required libraries:

      npm install

   3. Create a file named .env in the root of the frontend folder and set your local server URL:

   # ✅ Make sure not to use brackets [] or trailing slashes /
     VITE_API_URL=http://localhost:8080

   4. Start the React development server:
      npm run dev

🌐 Key Configuration for Production (On Render)
To make the deployed project work on Render, the Frontend environment variable must be configured in the dashboard as follows:

Key: VITE_API_URL

Value: https://saas-inventory-h49i.onrender.com (No brackets, no parentheses!)

⚠️ Important Note: Every time you change this variable on Render, remember to trigger a Manual Deploy -> Clear Cache and Deploy on the Frontend service so React compiles with the new URL.
---

# Versión en Español

Este es un sistema moderno y de extremo a extremo (**Full-Stack**) para la **Gestión de Inventario SaaS**, diseñado para manejar modelos de negocio multi-empresa. La aplicación permite registrar empresas, asignar productos personalizados a cada una, gestionar niveles de stock en tiempo real y filtrar artículos dinámicamente.

## 🚀 Enlaces del Proyecto y Demo en Vivo
* **Aplicación Frontend:** [https://saas-inventory-1.onrender.com](https://saas-inventory-1.onrender.com)
* **API Backend (Render):** [https://saas-inventory-h49i.onrender.com](https://saas-inventory-h49i.onrender.com)
* **Documentación Interactiva (Swagger UI):** [https://saas-inventory-h49i.onrender.com/swagger-ui/index.html](https://saas-inventory-h49i.onrender.com/swagger-ui/index.html)

## 📸 Vista Previa de la Interfaz
Así luce la aplicación finalizada, mostrando el listado de productos, el sistema de búsqueda y el formulario de gestión:

<div align="center">
  <img src="./screenshots/dashboard.png" alt="Panel de Inventario SaaS" width="90%" style="border-radius: 10px; border: 1px solid #333;" />
</div>

## 🛠️ Tecnologías Utilizadas
* **Backend:** Java 17, Spring Boot 3, Spring Data JPA, Lombok, Gradle.
* **Frontend:** React, Axios (instancia configurada), Lucide React (Iconos), React Hot Toast (Notificaciones).
* **Base de Datos:** PostgreSQL.
* **Despliegue / Hosting:** Render (Servicio Web y PostgreSQL Gestionado).

## 💡 Características Clave
* **Estructura Multi-empresa:** Productos asociados bidireccionalmente a empresas específicas sin bucles infinitos de serialización JSON.
* **Operaciones CRUD Completas:** Creación, lectura, actualización y eliminación fluida de productos y empresas.
* **Buscador en Tiempo Real:** Filtro de búsqueda instantáneo en el cliente por nombre o descripción.
* **Documentación Interactiva:** Endpoints del backend testeables y documentados con Swagger UI.
* **CORS Seguro:** Configuración robusta que permite la comunicación fluida entre entornos locales y de producción en la nube.

 ## 🤖 Collaboration asistida con IA

Este proyecto fue desarrollado utilizando flujos de trabajo modernos de **desarrollo asistido por IA**. Se utilizó IA generativa (Gemini) como copiloto de programación (*pair-programming*) para apoyar en:
* Toma de decisiones de arquitectura (relaciones bidireccionales de JPA y referencias de Jackson).
* Resolución de errores (*debugging*) del sistema (como configuraciones de CORS y ciclos de renderizado de React).
* Escritura y optimización de código limpio y modular tanto en Spring Boot como en React.

---

