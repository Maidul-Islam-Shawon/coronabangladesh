import getMainData from "../Utils/getMainData";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function ChartData({ url }) {
  const { coronadata: mainData, error } = getMainData(url);

  //const hello = "hello";

  if (!mainData) return <p>Loading...</p>;
  if (error) return <p>Error...{error}</p>;

  //setCasesChart(mainData.timeline.cases);
  //console.log(casesChart);

  const data = [{ name: 3455 }, { uv: 4000 }, { pv: 2400 }, { amt: 2400 }];

  const newdata = [data];
  let names = Object.keys(newdata);
  let values = Object.values(newdata);
  //Object.entries(data);
  //console.log(Object.fromEntries(Object.entries(data)));

  //console.log([Object.values(mainData.timeline.cases)]);

  //values
  //console.log(localDB);

  //Object.entries(data);

  return (
    <div>
      <h2>Charts</h2>

      {/* <div>
        {Object.entries(Object.values(data)).map((e) => (
          <p>{e}</p>
        ))}
      </div> */}

      <LineChart
        width={500}
        height={300}
        data={mainData.timeline}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={Object.keys(mainData.timeline.cases)} />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey={Object.values(mainData.timeline.cases)}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}
