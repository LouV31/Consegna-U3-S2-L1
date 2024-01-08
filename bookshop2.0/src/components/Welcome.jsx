import { Alert, Container } from "react-bootstrap";

const Welcome = ({ title, subtitle }) => {
    return (
        <Container className="mt-5 text-center">
            <Alert className="fs-3 fw-bold">{title.toUpperCase()}</Alert>
            <h2 className="text-italic fs-5 fw-medium">{subtitle}</h2>
        </Container>
    );
};
export default Welcome;
