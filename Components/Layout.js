import { Container } from "react-bootstrap";
import Head from "next/head";
import NavBar from "../Components/NavBar";
import Jumbotron from "../Components/Jumbotron";
import { Footer } from "./Footer";

const Layout = (props) => (
  <>
    <Head>
      <title>Corona Bangladesh</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    <NavBar />
    <Jumbotron />
    <Container>{props.children}</Container>
    <Footer />
  </>
);

export default Layout;
