import Layout from "../Components/Layout";
import { Row, Col } from "react-bootstrap";

export default function Advice() {
  return (
    <Layout>
      <Row>
        <Col>
          <h2>Coronavirus disease (COVID-19) advice for the public</h2>
          <hr />
          <p>
            Stay aware of the latest information on the COVID-19 outbreak,
            available on the WHO website and through your national and local
            public health authority. Most people who become infected experience
            mild illness and recover, but it can be more severe for others. Take
            care of your health and protect others by doing the following:
          </p>

          <h3>Coronavirus disease (COVID-19) advice for the public</h3>
          <p>
            Regularly and thoroughly clean your hands with an alcohol-based hand
            rub or wash them with soap and water. Why? Washing your hands with
            soap and water or using alcohol-based hand rub kills viruses that
            may be on your hands.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Maintain social distancing</h3>
          <p>
            Maintain at least 1 metre (3 feet) distance between yourself and
            anyone who is coughing or sneezing. Why? When someone coughs or
            sneezes they spray small liquid droplets from their nose or mouth
            which may contain virus. If you are too close, you can breathe in
            the droplets, including the COVID-19 virus if the person coughing
            has the disease.
          </p>

          <h3>Avoid touching eyes, nose and mouth</h3>
          <p>
            Why? Hands touch many surfaces and can pick up viruses. Once
            contaminated, hands can transfer the virus to your eyes, nose or
            mouth. From there, the virus can enter your body and can make you
            sick.
          </p>

          <h3>Practice respiratory hygiene</h3>
          <p>
            Make sure you, and the people around you, follow good respiratory
            hygiene. This means covering your mouth and nose with your bent
            elbow or tissue when you cough or sneeze. Then dispose of the used
            tissue immediately. Why? Droplets spread virus. By following good
            respiratory hygiene you protect the people around you from viruses
            such as cold, flu and COVID-19.
          </p>

          <h3>
            If you have fever, cough and difficulty breathing, seek medical care
            early
          </h3>
          <p>
            Stay home if you feel unwell. If you have a fever, cough and
            difficulty breathing, seek medical attention and call in advance.
            Follow the directions of your local health authority. Why? National
            and local authorities will have the most up to date information on
            the situation in your area. Calling in advance will allow your
            health care provider to quickly direct you to the right health
            facility. This will also protect you and help prevent spread of
            viruses and other infections.
          </p>
          <hr />
          <div class="alert alert-dismissible alert-info">
            <button type="button" class="close" data-dismiss="alert">
              &times;
            </button>
            <strong>References: World Health Organization: WHO </strong>
            <br />
            <a class="alert-link">
              https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public
            </a>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}
