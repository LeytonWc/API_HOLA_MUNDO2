
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/hola", (req, res) => {
    res.json({
        mensaje: "Hola Mundo",
        lenguaje: "JavaScript",
        framework: "Express"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
