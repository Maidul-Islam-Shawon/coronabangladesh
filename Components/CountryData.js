import React from "react";
import getMainData from "../Utils/getMainData";
import { Row, Col, Image } from "react-bootstrap";
import CountrySelector from "./CountrySelector";

export default function CountryData({ url }) {
  const { coronadata: mainData, error } = getMainData(url);
  //const hello = "hello";

  if (!mainData) return <p>Loading...</p>;
  if (error) return <p>Error...{error}</p>;

  let UpdateDate = new Date(mainData.updated).toTimeString();

  //   function sendData() {
  //     props.parentCallback(hello);
  //   }

  //console.log(mainData);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Image
          thumbnail
          src={mainData.countryInfo.flag}
          alt="Corona Bangladesh"
          style={{ textAlign: "center", width: "5rem" }}
        />
      </div>
      <Row style={{ paddingTop: "10px", textAlign: "center" }}>
        <Col md={4}>
          <div className="card text-white bg-primary  mb-3">
            <div className="card-header">
              <h3>New Cases (Today) </h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                {mainData.todayCases.toLocaleString()}
              </h4>
            </div>
            <span className="card-footer">Last Update: {UpdateDate}</span>
          </div>
        </Col>

        <Col md={4}>
          <div className="card text-white bg-danger  mb-3">
            <div className="card-header">
              <h3>New Deaths (Today) </h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                {mainData.todayDeaths.toLocaleString()}
              </h4>
            </div>
            <span className="card-footer">Last Update: {UpdateDate}</span>
          </div>
        </Col>

        <Col md={4}>
          <div className="card text-white bg-info  mb-3">
            <div className="card-header">
              <h3>Active Cases </h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">{mainData.active.toLocaleString()}</h4>
            </div>
            <span className="card-footer">Last Update: {UpdateDate}</span>
          </div>
        </Col>
      </Row>

      <Row style={{ paddingTop: "10px", textAlign: "center" }}>
        <Col md={4}>
          <div className="card text-white bg-success mb-3">
            <div className="card-header">
              <h3>Total Recovered </h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                {mainData.recovered.toLocaleString()}
              </h4>
            </div>
            <span className="card-footer">Last Update: {UpdateDate}</span>
          </div>
        </Col>

        <Col md={4}>
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">
              <h3>Total Cases </h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">{mainData.cases.toLocaleString()}</h4>
            </div>
            <span className="card-footer">Last Update: {UpdateDate}</span>
          </div>
        </Col>

        <Col md={4}>
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">
              <h3>Total Deaths </h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">{mainData.deaths.toLocaleString()}</h4>
            </div>
            <span className="card-footer">Last Update: {UpdateDate}</span>
          </div>
        </Col>
      </Row>

      <Row style={{ paddingTop: "10px", textAlign: "center" }}>
        <Col md={4}>
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">
              <h3>Critical Cases </h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                {mainData.critical.toLocaleString()}
              </h4>
            </div>
            <span className="card-footer">Last Update: {UpdateDate}</span>
          </div>
        </Col>

        <Col md={4}>
          <div className="card text-white bg-success mb-3">
            <div className="card-header">
              <h3>Total Tests </h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">{mainData.tests.toLocaleString()}</h4>
            </div>
            <span className="card-footer">Last Update: {UpdateDate}</span>
          </div>
        </Col>

        <Col md={4}>
          <div className="card text-white bg-info mb-3">
            <div className="card-header">
              <h3>Deaths / 1 Million </h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                {mainData.deathsPerOneMillion.toLocaleString()}
              </h4>
            </div>
            <span className="card-footer">Last Update: {UpdateDate}</span>
          </div>
        </Col>
      </Row>
    </>
  );
}
