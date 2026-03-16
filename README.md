# MenuMaster API - Servicios Web de Autenticación

Este proyecto forma parte de la evidencia **GA7-220501096-AA5-EV01**. Consiste en un servicio web (API REST) desarrollado con Node.js y Express para gestionar el registro de usuarios y el inicio de sesión de la plataforma MenuMaster.

## Tecnologías y Estándares
- **Entorno:** Node.js
- **Framework:** Express.js
- **Formato de datos:** JSON
- **Estándar de Codificación:** CamelCase para variables y funciones, comentarios descriptivos en bloques de código.

## Endpoints Principales

### 1. Registro de Usuario
- **Ruta:** `POST /api/registro`
- **Descripción:** Recibe un objeto JSON con `usuario` y `contrasena`. Valida que los campos no estén vacíos y que el usuario no exista previamente.

### 2. Inicio de Sesión (Login)
- **Ruta:** `POST /api/login`
- **Descripción:** Verifica las credenciales. Si la autenticación es correcta, devuelve un mensaje de éxito; de lo contrario, devuelve un error 401.

## Instalación
1. Clonar el repositorio.
2. Instalar dependencias: `npm install`
3. Iniciar servidor: `npm start`

## Autor
- Natalia Chica Rodríguez
- Programa: Análisis y Desarrollo de Software