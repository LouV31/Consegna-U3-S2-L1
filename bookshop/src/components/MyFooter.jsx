import { Component } from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap";

class MyFooter extends Component {
    render() {
        return (
            <footer className="bg-dark">
                <Container>
                    <Row className="p-5">
                        <Col md={4} className="d-flex flex-column">
                            <NavLink className="text-white-50">Servizio Clienti</NavLink>
                            <NavLink className="text-white-50">Assistenza</NavLink>
                            <NavLink className="text-white-50">Numero di Telefono</NavLink>
                        </Col>
                        <Col md={4} className="d-flex flex-column">
                            <NavLink className="text-white-50">Servizio Clienti</NavLink>
                            <NavLink className="text-white-50">Assistenza</NavLink>
                            <NavLink className="text-white-50">Numero di Telefono</NavLink>
                        </Col>
                        <Col md={4} className="d-flex flex-column">
                            <NavLink className="text-white-50">Servizio Clienti</NavLink>
                            <NavLink className="text-white-50">Assistenza</NavLink>
                            <NavLink className="text-white-50">Numero di Telefono</NavLink>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}
export default MyFooter;
