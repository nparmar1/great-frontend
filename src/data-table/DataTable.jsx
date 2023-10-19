import { useEffect, useState } from "react";

export default function DataTableApp({ data }) {
  const [sortedData, setSortedData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSortAsc, setIsSortAsc] = useState(true);
  const [sortField, setSortField] = useState("");

  useEffect(() => {
    const filteredData = data.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    setSortedData(filteredData);
  }, [searchTerm]);

  useEffect(() => {
    if (sortField) {
      const sort = [...sortedData].sort((a, b) => {
        const valueA = a[sortField];
        const valueB = b[sortField];

        if (valueA > valueB) return isSortAsc ? 1 : -1;
        if (valueA < valueB) return isSortAsc ? -1 : 1;

        return 0;
      });

      setSortedData(sort);
    }
  }, [sortField, isSortAsc]);

  function handleSort(field) {
    if (field === sortField) {
      setIsSortAsc(!isSortAsc);
    } else {
      setSortField(field);
      setIsSortAsc(true);
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              Name {sortField === "name" && (isSortAsc ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("email")}>
              Email {sortField === "email" && (isSortAsc ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("user")}>
              User {sortField === "user" && (isSortAsc ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("equipment")}>
              Equipment {sortField === "equipment" && (isSortAsc ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("duration")}>
              Duration {sortField === "duration" && (isSortAsc ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.user}</td>
              <td>{item.equipment.join(", ")}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
