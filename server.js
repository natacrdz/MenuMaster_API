/**
 * EVIDENCIA: GA7-220501096-AA5-EV01
 * ACTIVIDAD: Codificar el backend utilizando herramientas de versionamiento.
 * DESCRIPCIÓN: API para gestión de usuarios (Registro e Inicio de Sesión).
 */

// Librerías necesarias
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Base de datos simulada para el proyecto MenuMaster
let usuarios = [];
let menu = [
    { id: 1, nombre: "Bandeja Paisa", precio: 25000, categoria: "Fuerte" },
    { id: 2, nombre: "Limonada de Coco", precio: 8000, categoria: "Bebida" }
];

// --- SERVICIOS DE AUTENTICACIÓN ---

// Registro de usuario
app.post('/api/registro', (req, res) => {
    const { usuario, contraseña } = req.body;
    if (!usuario || !contraseña) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }
    usuarios.push({ usuario, contraseña });
    res.status(201).json({ mensaje: "Usuario de MenuMaster registrado" });
});

// Login de usuario
app.post('/api/login', (req, res) => {
    const { usuario, contraseña } = req.body;
    const encontrado = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);
    
    if (encontrado) {
        res.status(200).json({ mensaje: "Autenticación satisfactoria" });
    } else {
        res.status(401).json({ error: "Error en la autenticación" });
    }
});

// --- SERVICIOS REST DEL PROYECTO (MenuMaster) ---

// Obtener todo el menú (GET)
app.get('/api/menu', (req, res) => {
    res.status(200).json(menu);
});

// Agregar nuevo plato al menú (POST)
app.post('/api/menu', (req, res) => {
    const { nombre, precio, categoria } = req.body;
    if (!nombre || !precio) {
        return res.status(400).json({ error: "Nombre y precio son obligatorios" });
    }
    const nuevoPlato = { id: menu.length + 1, nombre, precio, categoria };
    menu.push(nuevoPlato);
    res.status(201).json({ mensaje: "Plato agregado al menú", plato: nuevoPlato });
});

app.listen(PORT, () => {
    console.log(`==========================================`);
    console.log(`Servidor MenuMaster PROYECTO escuchando en el puerto ${PORT}`);
    console.log(`==========================================`);
});