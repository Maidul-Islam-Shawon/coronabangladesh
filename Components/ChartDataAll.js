import getMainData from "../Utils/getMainData";
import ChartDataList from "./ChartDataList";

export default function ChartDataAll({ url }) {
  const { coronadata: mainData, error } = getMainData(url);

  if (!mainData) return <p>Loading...</p>;
  if (error) return <p>Error...{error}</p>;

  //const data = [{ date1: 3455, date2: 4000, date3: 2400, date4: 2400 }];

  //.....get Cases History Data....//
  let HistoryCases = [mainData.cases];
  let HistoryDeaths = [mainData.deaths];
  let HistoryRecovered = [mainData.recovered];

  let date = Object.keys(HistoryCases[0]);
  let people = Object.values(HistoryCases[0]);
  let death = Object.values(HistoryDeaths[0]);
  let recovered = Object.values(HistoryRecovered[0]);
  //console.log(death);

  let Chart = getChart(date, people, death, recovered);
  //console.log(FinalCases);

  //.....function to get chart Data....//
  function getChart(date, people, death, recovered) {
    let allCases = [];
    let obj = new Object({ Date: "", Cases: "", Deaths: "", Recovered: "" });

    for (let i = 0; i < date.length; i++) {
      obj = {
        Date: date[i],
        Cases: people[i],
        Deaths: death[i],
        Recovered: recovered[i],
      };
      allCases[i] = obj;
    }
    return allCases;
    // console.log(allCases);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ color: "lightseagreen" }}>History (All)</h3>
      <ChartDataList Chart={Chart} />
    </div>
  );
}
