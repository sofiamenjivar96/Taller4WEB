import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "El API está funcionando correctamente",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    status: "ok",
    message: "El API está funcionando",
    integrantes: [
      {
        id: 1,
        nombre: "Nicole Estrada",
        edad: 20,
        carrera: "Ingeniería Informatica",
        materiasAprobadas: 15,
      },
      {
        id: 2,
        nombre: "Sofia Menjivar",
        edad: 19,
        carrera: "Ingeniería Informatica",
        materiasAprobadas: 9,
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
