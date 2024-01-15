import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import "./All_Chart.css";
import { data } from "./All_Chart.data";

function All_Chart() {
  let openCount: number = 0;
  let closedCount: number = 0;
  let pendingExternalCount: number = 0;
  let pendingInternalCount: number = 0;
  const closedTickets = data.filter((ticket) => (ticket.status = "CLOSED"));
  closedTickets.forEach((ticket) => {
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
  const allTicketData = [
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
  ];

  return (
    <div>
      <BarChart width={900} height={300} data={allTicketData}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="count" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
}

export default All_Chart;
