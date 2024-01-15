import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import "./All_Chart.css";
import { data } from "./All_Chart.data";

function All_Chart() {
  let techSupportCount: number = 0;
  let customerServiceCount: number = 0;
  const closedTickets = data.filter((ticket) => (ticket.status = "CLOSED"));
  closedTickets.forEach((ticket) => {
    switch (ticket.ticket_group_id) {
      case "3" || "17":
        techSupportCount++;
        break;
      case "19" || "18":
        customerServiceCount++;
        break;
      default:
        break;
    }
  });
  const allTicketData = [
    { name: "Tech Support", count: techSupportCount },
    {
      name: "Customer Support",
      count: customerServiceCount,
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
