import { Container } from "reactstrap";
import HealthSection from "./components/HealthSection.jsx";
import InfoSection from "./components/InfoSection.jsx";

export default function App() {
  return (
    <Container className="py-4">
      <h1 className="titulo text-center mb-4">Taller IV</h1>
      <HealthSection />
      <InfoSection />
    </Container>
  );
}
