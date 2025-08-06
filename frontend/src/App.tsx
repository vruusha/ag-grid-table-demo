import React from 'react';
import DataGrid, { GridRow } from './components/DataGrid';
import './App.css';

function App() {

  const handleRowSelection = (rows: GridRow[]) => {
  
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
