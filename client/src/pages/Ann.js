import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Ann() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(temp);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Navbar className="mt-4 text-white" bg="primary" variant="dark">
              <Container>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#F6FBF4" }}
                >
                  KEMBALI KE HOME PAGE
                </Link>
              </Container>
            </Navbar>
          </Row>
        </Col>

        <Col xs={12}>
          <div className="Ann text-center">
            <br></br>
            <h1>QR Code Generator</h1>
            <div className="input-box">
              <div className="gen">
                <br></br>
                <input
                  type="text"
                  onChange={(e) => {
                    setTemp(e.target.value);
                  }}
                  placeholder="Enter text to encode"
                />
                <button className="button" onClick={handleClick}>
                  Generate
                </button>
              </div>
              <br></br>
            </div>
            <div className="output-box">
              <img src={qrCode} alt="" />
            </div>

            <div className="download">
              <a href={qrCode} target="_blank" download="QRCode">
                <br></br>
                <button type="button">Download</button>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Ann;
