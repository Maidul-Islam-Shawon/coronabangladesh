import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => (
  <>
    <Container fluid className="footer-container">
      <Row>
        <Col md={4}>
          <h5>Corona Bangladesh</h5>
          <p>Coronavirus disease (COVID-19) outbreak situation</p>
        </Col>

        <Col md={4} style={{ padding: "15px" }}>
          <img
            src="https://counter11.stat.ovh/private/freecounterstat.php?c=2ljetht3sr1bt45d1sd9l61166rj1yky"
            border="0"
            title="Visitor counter"
            alt="website counter"
          ></img>
        </Col>

        <Col md={4}>
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
