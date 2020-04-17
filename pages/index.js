import Layout from "../Components/Layout";
import Stats from "../Components/stats";
import CountrySelector from "../Components/CountrySelector";

import CountryData from "../Components/CountryData";

export default function Index() {
  const data = "data from index";
  return (
    <Layout>
      <h2 style={{ textAlign: "center", color: "#21464b" }}>
        Covid19 Cases Worldwide
      </h2>

      <Stats url="https://corona.lmao.ninja/v2/all"></Stats>
      <hr />
      <CountrySelector />
    </Layout>
  );
}
