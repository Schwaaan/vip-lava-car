import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Container} from "react-bootstrap";
import FormPage from "./component/Form";
import Title from "./component/title/Title";
import './App.css';

export default function App() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Title></Title>
      </Row>
      <Row>
        <FormPage></FormPage>
      </Row>
      </Container>
  );
}
