import React from 'react';

function Table({ columns, data, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="admin-table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="admin-table-header">
                {col.label}
              </th>
            ))}
            <th className="admin-table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="p-4 text-center text-admin-dark">
                No data available
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={row.id} className="border-b-2 border-admin-black hover:bg-admin-grey">
                {columns.map((col, index) => (
                  <td key={index} className="p-2 font-sans text-sm">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
                <td className="p-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(row)}
                      className="admin-btn text-xs"
                    >
                      EDIT
                    </button>
                    <button
                      onClick={() => onDelete(row.id)}
                      className="admin-btn-danger text-xs"
                    >
                      DELETE
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
