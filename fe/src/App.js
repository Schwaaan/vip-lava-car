import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Container } from "react-bootstrap";
import FormPage from "./component/Form";
import Title from "./component/title/Title";
import './App.css';
import NavBar from './component/navBar/NavBar';

export default function App() {
  return (
    <div>
      <NavBar className="nav"></NavBar>
      <Row className="justify-content-center title">
        <Title></Title>
      </Row>
      <Row className="hero-bg">
        <FormPage></FormPage>
      </Row>
    </div>
  );
}
