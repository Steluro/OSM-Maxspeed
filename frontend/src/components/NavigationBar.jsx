
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router";

export default function NavigationBar() {

    return(
        <Container fluid className="px-5 py-4">
            <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/" className="px-4">
                        Home
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link as={NavLink} to="/stats" className="px-4">
                        Stats
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link as={NavLink} to="/edit" className="px-4">
                        Edit
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item className="ms-auto">
                    <Button variant="outline-primary" className="px-4">
                        Log in
                    </Button>
                </Nav.Item>
            </Nav>
        </Container>
    );
}