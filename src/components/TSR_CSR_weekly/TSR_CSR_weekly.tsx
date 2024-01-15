import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { data } from "./TSR_CSR_weekly.data";

const TSR_CSR_weekly = () => {
  let closedTicketCount: number = 0;
  let dataArrayLength = data.length;
  const closedTickets = data.filter((ticket) => ticket.status === "CLOSED");
  let weeksArray = closedTickets.map((ticket) => {
    if (weeksArray) {
      console;
    }
  });
  closedTickets.forEach((ticket) => {
    switch (ticket.ticket_group_id) {
      case "":
        closedTicketCount++;
        break;
      default:
        break;
    }
  });
  const allTicketData = [{ week: "January", count: closedTicketCount }];

  return (
    <div>
      <div>
        <BarChart width={900} height={300} data={allTicketData}>
          <XAxis dataKey="week" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="count" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
};

export default TSR_CSR_weekly;
