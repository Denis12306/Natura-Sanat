// Tableau permettant de réutiliser le template pour cours, articles etc...
export default function AdminTable({
  columns,
  data,
  renderActions,
}) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr
          style={{
            background: "#f5f5f5",
          }}
        >
          {columns.map((column) => (
            <th
              key={column.key}
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              {column.label}
            </th>
          ))}

          {renderActions && (
            <th
              style={{
                padding: "12px",
                border: "1px solid #ddd",
              }}
            >
              Actions
            </th>
          )}
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td
                key={column.key}
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                {column.render
                  ? column.render(item)
                  : item[column.key]}
              </td>
            ))}

            {renderActions && (
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                }}
              >
                {renderActions(item)}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
