import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { data } from "./TSR_CSR_weekly.data";

const TSR_CSR_weekly = () => {
  let week1Count: number = 0;
  let week2Count: number = 0;
  const ticketCreatedDay = (day: string) => {
    return parseInt(day.split("T")[0].split("-")[2]);
  };
  data.forEach((ticket) => {
    if (ticketCreatedDay(ticket.created_at) <= 7) {
      week1Count++;
    } else if (ticketCreatedDay(ticket.created_at) < 15) {
      week2Count++;
    }
  });

  const allTicketData = [
    { week: "1/1/23 - 1/7/23", count: week1Count },
    { week: "1/8/23 - 1/14/23", count: week2Count },
  ];

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
