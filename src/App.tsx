import React, { useState, useEffect } from 'react';
import DataGrid, { GridRow } from './components/DataGrid';
import './App.css';

function App() {
  const [data, setData] = useState<GridRow[]>([]);
  //const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState<GridRow[]>([]);
  const [apiQuery, setQuery] = useState({start:0, end: 50});

  const handleRowSelection = (rows: GridRow[]) => {
    setSelectedRows(rows);
    console.log('Selected rows:', rows);
  };

  const handleExport = (exportData: GridRow[]) => {
    console.log('Exporting data:', exportData);
    // Here you would typically trigger a download or send to server
  };

  return (
    <div className="App">
      <main className="app-main">
        <h1>Orders</h1>
        <DataGrid
          onRowSelection={handleRowSelection}
          onExport={handleExport}
        />
      </main>
    </div>
  );
}

export default App;
