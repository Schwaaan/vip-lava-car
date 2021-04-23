import {Row } from "react-bootstrap";
import FormPage from "../component/Form";
import Title from "../component/title/Title";

export default function Home() {
      return (
            <>
            <Row className="justify-content-center">
                  <Title></Title>
            </Row>
            <Row>
                  <FormPage></FormPage>
            </Row>
            </>
      );
}