import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";

type Data = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

const examples = () => {
  const data: Data[] = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 200, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page D", uv: 300, pv: 2400, amt: 2400 },
    { name: "Page E", uv: 500, pv: 2400, amt: 2400 },
    { name: "Page F", uv: 150, pv: 2400, amt: 2400 },
    { name: "Page G", uv: 550, pv: 2400, amt: 2400 },
    { name: "Page H", uv: 370, pv: 2400, amt: 2400 },
    { name: "Page I", uv: 500, pv: 2400, amt: 2400 },
    { name: "Page J", uv: 250, pv: 2400, amt: 2400 },
    { name: "Page K", uv: 450, pv: 2400, amt: 2400 },
  ];

  return (
    <div>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#f20000" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis dataKey="uv" />
      </LineChart>
      <br />
      <hr />
      <br />
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="yellow" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      <br />
      <hr />
      <br />
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="green" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <br />
      <hr />
      <br />
      <BarChart width={900} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>
      <br />
      <hr />
      <br />
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="uv" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 30,
            right: 30,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "30px",
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="8 5" />
        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};

export default examples;
