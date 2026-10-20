import { useEffect, useState } from "react";

export default function HealthSection() {
  const [estado, setEstado] = useState({ cargando: true, ok: false, mensaje: "" });

  useEffect(() => {
    fetch("/api/health")
      .then((res) => {
        if (!res.ok) throw new Error("Respuesta no válida");
        return res.json();
      })
      .then((data) =>
        setEstado({ cargando: false, ok: true, mensaje: data.message })
      )
      .catch(() =>
        setEstado({
          cargando: false,
          ok: false,
          mensaje: "No se pudo conectar con el API",
        })
      );
  }, []);

  const clase = estado.cargando ? "pendiente" : estado.ok ? "exito" : "error";

  return (
    <section className="health-section">
      <div className={`health-box ${clase}`}>
        <h4>Estado del API</h4>
        <p>{estado.cargando ? "Verificando..." : estado.mensaje}</p>
      </div>
    </section>
  );
}
