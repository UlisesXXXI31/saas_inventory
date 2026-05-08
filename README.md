# 📦 SaaS Inventory Management System

<div align="center">
  <a href="https://saas-inventory-h49i.onrender.com/swagger-ui.html">
    <img src="https://img.shields.io/badge/Demo-Live-brightgreen?style=for-the-badge&logo=render&logoColor=white" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/Backend-Spring%20Boot%203-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</div>

---

## 🌎 Language / Idioma
* [English Version](#english-version)
* [Versión en Español](#versión-en-español)

---

# English Version

This is a modern, full-stack **SaaS Inventory Management System** built to handle multi-company business models. The application allows users to create companies, assign custom products to each, track real-time stock levels, and search items dynamically. 

## 🚀 Live Demo & Links
* **Frontend Web App:** [Link to your Frontend Demo (e.g., Vercel/Netlify)]
* **Backend API (Render):** [https://saas-inventory-h49i.onrender.com](https://saas-inventory-h49i.onrender.com)
* **API Documentation (Swagger UI):** [https://saas-inventory-h49i.onrender.com/swagger-ui/index.html](https://saas-inventory-h49i.onrender.com/swagger-ui/index.html)

## 📸 Dashboard Preview
Here is a look at the inventory in action, showing the company inventory dashboard, search filtering, and CRUD operations:

<div align="center">
  <img src="./screenshots/dashboard.png" alt="SaaS Inventory Dashboard" width="90%" style="border-radius: 10px; border: 1px solid #333;" />
</div>

## 🛠️ Tech Stack
* **Backend:** Java 17, Spring Boot 3, Spring Data JPA, Lombok, Gradle.
* **Frontend:** React, Axios (with custom instances), Lucide React (Icons), React Hot Toast (Notifications).
* **Database:** PostgreSQL.
* **Hosting:** Render (Web Service & Managed PostgreSQL).

## 💡 Key Features
* **Multi-tenant Concept:** Products are bidirectionally mapped to specific companies without infinite JSON serialization loops.
* **Full CRUD Operations:** Seamless creation, reading, updating, and deletion of products and companies.
* **Live Search Filter:** Instant client-side search filtering by name or description.
* **Interactive API Playground:** Fully documented endpoints via Swagger.
* **Secure CORS Configuration:** Standardized origins supporting local and cloud environments.

---

# Versión en Español

Este es un sistema moderno y de extremo a extremo (**Full-Stack**) para la **Gestión de Inventario SaaS**, diseñado para manejar modelos de negocio multi-empresa. La aplicación permite registrar empresas, asignar productos personalizados a cada una, gestionar niveles de stock en tiempo real y filtrar artículos dinámicamente.

## 🚀 Enlaces del Proyecto y Demo en Vivo
* **Aplicación Frontend:** [Enlace a tu Frontend en producción (ej. Vercel/Netlify)]
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