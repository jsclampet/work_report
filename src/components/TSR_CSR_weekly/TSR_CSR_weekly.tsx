import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { data } from "./TSR_CSR_weekly.data";

const TSR_CSR_weekly = () => {
  const week1 = {
    week: "1/1/23 through 1/7/23",
    csrTicketCount: 0,
    tsrTicketCount: 0,
  };
  const week2 = {
    week: "1/8/23 through 1/14/23",
    csrTicketCount: 0,
    tsrTicketCount: 0,
  };
  const dayOfMonth = (date: string) => {
    return parseInt(date.split("T")[0].split("-")[2]);
  };
  const csrTickets = data.filter(
    (ticket) =>
      ticket.ticket_group_id === "19" || ticket.ticket_group_id === "18"
  );
  const tsrTickets = data.filter(
    (ticket) =>
      ticket.ticket_group_id === "17" || ticket.ticket_group_id === "3"
  );
  csrTickets.forEach((ticket) => {
    if (dayOfMonth(ticket.created_at) <= 7) {
      week1.csrTicketCount++;
    } else if (dayOfMonth(ticket.created_at) < 14) {
      week2.csrTicketCount++;
    }
  });
  tsrTickets.forEach((ticket) => {
    if (dayOfMonth(ticket.created_at) <= 7) {
      week1.tsrTicketCount++;
    } else if (dayOfMonth(ticket.created_at) < 14) {
      week2.tsrTicketCount++;
    }
  });

  const allTicketData = [week1, week2];

  return (
    <div>
      <div>
        <BarChart width={600} height={400} data={allTicketData}>
          <XAxis dataKey="week" stroke="#ccc" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Legend />
          <Bar dataKey="csrTicketCount" fill="#8884d8" barSize={30} />
          <Bar dataKey="tsrTicketCount" fill="#82ca9d" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
};

export default TSR_CSR_weekly;
