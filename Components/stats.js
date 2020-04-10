import getMainData from "../Utils/getMainData";
import { Row, Col } from "react-bootstrap";

export default function Stats({ url }) {
  const { coronadata: mainData, error } = getMainData(url);

  console.log(mainData);
  if (!mainData) return <p>Loading...</p>;
  if (error) return <p>Error...{error}</p>;

  let UpdateDate = new Date(mainData.updated).toTimeString();

  let people = mainData.cases.toLocaleString();
  console.log(people);

  return (
    <>
      <Row style={{ paddingTop: "15px", textAlign: "center" }}>
        <Col md={4}>
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">
              <h3>Coronavirus Cases </h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">{mainData.cases.toLocaleString()}</h4>
            </div>
            <span className="card-footer">Last Update: {UpdateDate}</span>
          </div>
        </Col>

        <Col md={4}>
          <div className="card text-white bg-success mb-3">
            <div className="card-header">
              <h3>Recovered </h3>
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
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">
              <h3>Deaths </h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">{mainData.deaths.toLocaleString()}</h4>
            </div>
            <span className="card-footer">Last Update: {UpdateDate}</span>
          </div>
        </Col>
      </Row>
    </>
  );
}
