import "./styles.css";

export default function Table({ rows, columns }) {
  return (
    <table>
      <tbody>
        {Array.from({ length: rows }, () => 0).map((_, row) => (
          <tr key={row}>
            {Array.from({ length: columns }, () => 0).map((_, column) => (
              <td key={column}>
                {console.log(rows * (column + 1) - row)}
                {column % 2 === 0
                  ? rows * column + (row + 1)
                  : rows * (column + 1) - row}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
