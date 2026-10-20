import { useEffect, useState } from "react";
import {
  Alert,
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Spinner,
} from "reactstrap";

export default function InfoSection() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/info")
      .then((res) => {
        if (!res.ok) throw new Error("Respuesta no válida");
        return res.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <Alert color="danger">No se pudo obtener la información del API.</Alert>;
  }

  if (!data) {
    return (
      <div className="text-center my-4">
        <Spinner color="primary" />
      </div>
    );
  }

  return (
    <section className="mt-4">
      <Alert color="success">{data.message}</Alert>
      <h4 className="mb-3">Integrantes</h4>
      <Row>
        {data.integrantes.map((p) => (
          <Col md="6" key={p.id} className="mb-3">
            <Card className="shadow-sm h-100">
              <CardHeader>
                <CardTitle tag="h5" className="mb-0">
                  {p.nombre}
                </CardTitle>
              </CardHeader>
              <CardBody className="p-0">
                <ListGroup flush>
                  <ListGroupItem>
                    <strong>Edad:</strong> {p.edad} años
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Carrera:</strong> {p.carrera}
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Materias aprobadas:</strong>{" "}
                    <Badge color="primary" pill>
                      {p.materiasAprobadas}
                    </Badge>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
