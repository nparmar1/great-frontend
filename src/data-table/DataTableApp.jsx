import DataTable from "./DataTable";

const data = [
  {
    user: 8,
    duration: 50,
    equipment: ["bench"],
    name: "Jada Mcclure",
    email: "jm@example.com",
  },
  {
    user: 7,
    duration: 150,
    equipment: ["dumbbell"],
    name: "Carolyn Watson",
    email: "cw@example.com",
  },
  {
    user: 1,
    duration: 10,
    equipment: ["barbell"],
    name: "Wyatt Horton",
    email: "wh@example.com",
  },
  {
    user: 7,
    duration: 100,
    equipment: ["bike", "kettlebell"],
    name: "Carolyn Watson",
    email: "cw@example.com",
  },
  {
    user: 7,
    duration: 200,
    equipment: ["bike"],
    name: "Carolyn Watson",
    email: "cw@example.com",
  },
  {
    user: 2,
    duration: 200,
    equipment: ["treadmill"],
    name: "Gina Ramsey",
    email: "gr@example.com",
  },
  {
    user: 2,
    duration: 200,
    equipment: ["bike"],
    name: "Gina Ramsey",
    email: "gr@example.com",
  },
];

export default function DataTableApp() {
  return <DataTable data={data} />;
}
