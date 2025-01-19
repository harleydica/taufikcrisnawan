import React from 'react'

interface TableProps {
  headers: string[]
  rows: string[][]
}

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <div className='overflow-x-auto my-4'>
      <table className='table-auto w-full border-collapse border border-gray-700'>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className='bg-gray-100 dark:bg-gray-800 uppercase text-sm font-semibold border border-gray-700'
                style={{ padding: '16px' }} // Inline padding untuk header
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className='bg-gray-100 dark:bg-gray-800'>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className='border border-gray-700 dark:text-gray-300 text-gray-700'
                  style={{ padding: '12px' }} // Inline padding untuk cell
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
