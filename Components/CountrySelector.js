import getMainData from "../Utils/getMainData";
import Stats from "../Components/stats";
import CountryData from "../Components/CountryData";
import ChartData from "./ChartData";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

export default function CountrySelector() {
  //const [flag, setFlag] = useState();
  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");
  const { coronadata: countries, error } = getMainData(
    "https://corona.lmao.ninja/v2/countries"
  );
  //console.log(countries);
  if (!countries) return <p>Loading...</p>;
  if (error) return <p>Error...{error}</p>;

  // function getFlag(data) {
  //   setFlag(data);
  // }
  // console.log(flag);

  return (
    <>
      <Row>
        <Col md={3} style={{ fontSize: "1.5rem", textAlign: "center" }}>
          Select a Country:
        </Col>
        <Col md={9}>
          <div className="form-group">
            <select
              className="custom-select"
              defaultValue="Bangladesh"
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {countries.map((country) => (
                <option key={country.country}>{country.country}</option>
              ))}
            </select>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="countryName">
            <h2>Currently Showing: {selectedCountry}</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <ChartData
            url={"https://corona.lmao.ninja/v2/historical/" + selectedCountry}
          ></ChartData>
        </Col>
      </Row>
      <Row style={{ paddingTop: "20px" }}>
        <Col>
          <CountryData
            url={"https://corona.lmao.ninja/v2/countries/" + selectedCountry}
          ></CountryData>
        </Col>
      </Row>
    </>
  );
}
