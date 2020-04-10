import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => (
  <>
    <Container fluid className="footer-container">
      <Row>
        <Col md={6}>
          <h5>Corona Bangladesh</h5>
          <p>Coronavirus disease (COVID-19) outbreak situation</p>
        </Col>
        <Col md={6}>
          <h5>Links</h5>
          <nav>
            <ul className="footerUl">
              <li className="footerUl-li">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="footerUl-li">
                <Link href="/advice">
                  <a>Advice</a>
                </Link>
              </li>
              <li className="footerUl-li">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>

    <footer className="footer-copyright">
      <div>
        <div className="container">
          Copyright © 2020 - mi Shawon. All Rights Reserved.
        </div>
      </div>
    </footer>
  </>
);
