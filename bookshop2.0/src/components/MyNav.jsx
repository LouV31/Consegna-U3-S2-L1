import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = ({ brand }) => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid="xl" className="">
                    <Navbar.Brand href="#" className="">
                        {brand}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="basic-navbar-nav justify-content-end">
                        <Nav>
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Browse</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
export default MyNav;
