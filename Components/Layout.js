import { Container } from "react-bootstrap";
import Head from "next/head";
import NavBar from "../Components/NavBar";
import Jumbotron from "../Components/Jumbotron";
import { Footer } from "./Footer";
//import img from "../assets/CB-Icon.png";

const Layout = (props) => (
  <>
    <Head>
      <title>Corona Bangladesh</title>
      {/* <link rel="shortcut icon" href="../assets/CB-Icon.png" /> */}

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
