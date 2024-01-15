import { useEffect, useState } from "react";
import { JSON } from "./data";
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";
import All_Chart from "./components/All_Chart/All_Chart";
import TSR_CSR_weekly from "./components/TSR_CSR_weekly/TSR_CSR_weekly";

interface TicketDataType {
  name: string;
  count: number;
}

const App = () => {
  const [ticketDataArray, setTicketDataArray] = useState<TicketDataType[]>([]);
  useEffect(() => {
    const ticketInfoObject = () => {
      let openCount: number = 0;
      let closedCount: number = 0;
      let pendingExternalCount: number = 0;
      let pendingInternalCount: number = 0;
      JSON.forEach((ticket) => {
        switch (ticket.status) {
          case "OPEN":
            openCount++;
            break;
          case "CLOSED":
            closedCount++;
            break;
          case "PENDING_EXTERNAL":
            pendingExternalCount++;
            break;
          case "PENDING_INTERNAL":
            pendingInternalCount++;
            break;
          default:
            break;
        }
      });
      setTicketDataArray([
        { name: "Closed", count: closedCount },
        { name: "Open", count: openCount },
        {
          name: "Pending Ext",
          count: pendingExternalCount,
        },
        {
          name: "Pending Int",
          count: pendingInternalCount,
        },
      ]);
    };
    ticketInfoObject();
  }, []);

  return (
    <div>
      <BarChart width={500} height={300} data={ticketDataArray}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <CartesianGrid stroke="#ccc" strokeDasharray="8 5" />
        <Bar dataKey="count" fill="#8884d8" barSize={30} />
      </BarChart>
      <br />
      <hr />
      <hr />

      <h2>CLOSED TICKETS || JAN 1 - JAN 14 </h2>
      <All_Chart />
      <br />
      <hr />
      <hr />
      <br />
      <TSR_CSR_weekly />
    </div>
  );
};

export default App;
