import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";
import "../styles/MovieNavbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Newcontext } from "../App";
import { API_KEY } from "./Api";
function MovieNavbar() {
  const {  movie, setMovie ,apidata,setApidata,popular,setPopular,latest,setLatest,comedy, setComedy} = useContext(Newcontext);

  let [search, setSearch] = useState("");
  let handleChange = async (e) => {
    
    setSearch(e.target.value)
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
    );
      setApidata(response.data.results)
      // setPopular(response.data.results)
      // setComedy(response.data.results)
      // setLatest(response.data.results)
   
  };
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            Movie HUB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto nav">
              <Nav.Link href="#home" className="nav-item">
                <Link className="text-light text-decoration-none " to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#link" className="nav-item">
                <Link className="text-light text-decoration-none" to="/movies">
                  Movies
                </Link>
              </Nav.Link>
              <Nav.Link href="#link" className="nav-item">
                <Link to="/popular" className="text-light text-decoration-none">
                  Popular
                </Link>
              </Nav.Link>
              <Nav.Link href="#link" className="nav-item">
                <Link className="text-light text-decoration-none" to="/latest">
                  Latest
                </Link>
              </Nav.Link>
              <Nav.Link href="#link" className="nav-item">
                <Link className="text-light text-decoration-none" to="/comedy">
                  Comedy
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="form" inline onSubmit={(e)=>e.preventDefault()}>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    value={search}
                    onChange={handleChange}
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MovieNavbar;
