const express = require('express');
const app = express();
const PORT = 3011;

// curl -X POST http://localhost:3011/usuarios -H "Content-Type: application/json" -d "{\"name\": \"Juan Perez\", \"date\": \"2023-10-15\", \"link\": \"https://ejemplo.com\", \"photo\": \"ddd.img\"} //

app.use(express.json());
let usuarios = []; 
app.get('/usuarios', (req, res) => res.json(usuarios)); 
app.post('/usuarios', (req, res) => {
    const nuevoUsuario = {
        id: Math.floor(100000 + Math.random() * 900000),
        link: req.body.link,
        photo: req.body.photo,
        name: req.body.name,
        date: req.body.date
    };
    usuarios.push(nuevoUsuario); 
    res.status(201).json(nuevoUsuario);
});
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));