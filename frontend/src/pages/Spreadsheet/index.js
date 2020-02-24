import React, { useState } from 'react'
import Table from '../../components/Table'

export default function Spreadsheet ({ match }) {
 
  const [column, setColumn] = useState(4);

  function addColumn() {
    setColumn(column + 1)
  }

  function rmColumn() {
    setColumn(column - 1)
  }

  return (
    <div style={{ width: 'max-content' }}>
    <>
    <Table x={column} y={4} id={match.params.id}/>
    <button onClick={addColumn}>Add Column</button>
    <button onClick={rmColumn}>Delete Column</button>
    </>
  </div>
  );
}
