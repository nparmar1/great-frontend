import { useEffect, useState } from "react";

export default function DataTable({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortedField, setSortedField] = useState("");
  const [isSortAsc, setIsSortAsc] = useState(true);

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
    if (sortedField) {
      const sorted = [...sortedData].sort((a, b) => {
        const valueA = a[sortedField];
        const valueB = b[sortedField];

        if (valueA < valueB) return isSortAsc ? -1 : 1;
        if (valueA > valueB) return isSortAsc ? 1 : -1;
        return 0;
      });

      setSortedData(sorted);
    }
  }, [sortedField, isSortAsc]);

  function fieldSort(field) {
    if (field === sortedField) {
      setIsSortAsc(!isSortAsc);
    } else {
      setSortedField(field);
      setIsSortAsc(true);
    }
  }

  return (
    <>
      <h1>Search through Data</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => fieldSort("name")}>Name {sortedField === 'name' && (isSortAsc ? "▲" : "▼")}</th>
            <th onClick={() => fieldSort("email")}>Name {sortedField === 'email' && (isSortAsc ? "▲" : "▼")}</th>
            <th onClick={() => fieldSort("user")}>Name {sortedField === 'user' && (isSortAsc ? "▲" : "▼")}</th>
            <th onClick={() => fieldSort("equipment")}>Name {sortedField === 'equipment' && (isSortAsc ? "▲" : "▼")}</th>
            <th onClick={() => fieldSort("duration")}>Name {sortedField === 'duration' && (isSortAsc ? "▲" : "▼")}</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.user}</td>
              <td>{item.equipment}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
