import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap"

const Navigationbar = () => {
    return (
        <Navbar variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">SUFLIX</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigationbar