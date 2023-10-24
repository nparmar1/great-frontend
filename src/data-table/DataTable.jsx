import { useState, useEffect } from "react";

export default function DataTable({ data }) {
  const [sortedData, setSortedData] = useState(data);
  const [query, setQuery] = useState("");
  const [fieldData, setFieldData] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const sort = data.filter((item, idx) =>
      Object.values(item).join(" ").toLowerCase().includes(query.toLowerCase())
    );

    setSortedData(sort);
  }, [query]);

  useEffect(() => {
    if (sortedData) {
      const sorted = [...sortedData].sort((a, b) => {
        const valueA = a[fieldData];
        const valueB = b[fieldData];

        if (valueA > valueB) return isAscending ? 1 : -1;
        if (valueA < valueB) return isAscending ? -1 : 1;

        return 0;
      });

      setSortedData(sorted);
    }
  }, [fieldData, isAscending]);

  function handleSort(field) {
    if (field === fieldData) {
      setIsAscending(!isAscending);
    } else {
      setFieldData(field);
      setIsAscending(true);
    }
  }

  return (
    <>
      <h1>Search Data</h1>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              Name {fieldData === "name" && (isAscending ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("email")}>
              Email {fieldData === "email" && (isAscending ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("user")}>
              User {fieldData === "user" && (isAscending ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("equipment")}>
              Equipment {fieldData === "equipment" && (isAscending ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("duration")}>
              Duration {fieldData === "duration" && (isAscending ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((item, idx) => (
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
