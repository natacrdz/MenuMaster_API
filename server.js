/**
 * EVIDENCIA: GA7-220501096-AA5-EV01
 * ACTIVIDAD: Codificar el backend utilizando herramientas de versionamiento.
 * DESCRIPCIÓN: API para gestión de usuarios (Registro e Inicio de Sesión).
 */

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Middlewares
app.use(express.json()); // Permite recibir datos en formato JSON
app.use(cors());         // Habilita peticiones desde el frontend (React/Móvil)

/**
 * Persistencia temporal de datos (Base de datos en memoria).
 * En un entorno real, esto se conectaría a MongoDB o SQL.
 */
const listaUsuarios = [];

/**
 * SERVICIO: Registro de Usuario
 * MÉTODO: POST
 * DESCRIPCIÓN: Recibe credenciales y las almacena tras validaciones.
 */
app.post('/api/registro', (req, res) => {
    const { usuario, contrasena } = req.body;

    // Validación 1: Campos obligatorios presentes
    if (!usuario || !contrasena) {
        return res.status(400).json({ 
            error: "Faltan datos obligatorios: usuario y contraseña." 
        });
    }

    // Validación 2: Verificar si el usuario ya existe
    const usuarioDuplicado = listaUsuarios.find(u => u.usuario === usuario);
    if (usuarioDuplicado) {
        return res.status(409).json({ error: "El nombre de usuario ya está registrado." });
    }

    // Almacenamiento
    listaUsuarios.push({ usuario, contrasena });
    
    console.log(`Nuevo usuario registrado: ${usuario}`);
    res.status(201).json({ mensaje: "Usuario registrado satisfactoriamente." });
});

/**
 * SERVICIO: Inicio de Sesión (Login)
 * MÉTODO: POST
 * DESCRIPCIÓN: Valida la identidad del usuario contra la base de datos.
 */
app.post('/api/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    // Buscamos coincidencia exacta de usuario y contraseña
    const credencialesValidas = listaUsuarios.find(
        u => u.usuario === usuario && u.contrasena === contrasena
    );

    if (credencialesValidas) {
        // Respuesta satisfactoria según requerimiento de la guía
        res.status(200).json({ mensaje: "Autenticación satisfactoria" });
    } else {
        // Respuesta de error según requerimiento de la guía
        res.status(401).json({ error: "Error en la autenticación" });
    }
});

// Lanzamiento del servicio web
app.listen(PORT, () => {
    console.log(`================================================`);
    console.log(`Servidor MenuMaster API escuchando en el puerto ${PORT}`);
    console.log(`Endpoint Registro: http://localhost:${PORT}/api/registro`);
    console.log(`Endpoint Login: http://localhost:${PORT}/api/login`);
    console.log(`================================================`);
});