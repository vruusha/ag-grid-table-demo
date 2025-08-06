import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, themeBalham } from 'ag-grid-community';
import { GridRow } from './DataGrid';
import StatusBadge from './StatusBadge';

interface ChildOrderGridProps {
  selectedRows: GridRow[];
}

const ChildOrderGrid: React.FC<ChildOrderGridProps> = ({ selectedRows }) => {
  // Simplified column definitions for child orders
  const childColumnDefs: ColDef[] = useMemo(() => [
    {
      headerName: 'ID',
      field: 'id',
      width: 80,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Symbol',
      field: 'name',
      width: 120,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Status',
      field: 'status',
      width: 100,
      sortable: true,
      filter: true,
      cellRenderer: (params: { value: string }) => <StatusBadge status={params.value} />,
    },
    {
      headerName: 'Side',
      field: 'side',
      width: 80,
      sortable: true,
      filter: true,
      cellRenderer: (params: { value: 'BUY' | 'SELL' }) => (
        <span className={params.value === 'BUY' ? 'side-buy' : 'side-sell'}>
          {params.value}
        </span>
      ),
    },
    {
      headerName: 'Qty',
      field: 'orderQty',
      width: 80,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Price',
      field: 'price',
      width: 100,
      sortable: true,
      filter: true,
    },
  ], []);

  const defaultColDef = useMemo(() => ({
    flex: 1,
    minWidth: 80,
    resizable: true,
    sortable: true,
    filter: true,
    suppressHeaderMenuButton: true,
    suppressHeaderContextMenu: true,
  }), []);

  if (selectedRows.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Child Orders</h3>
      <div style={{ height: 150, width: '100%' }}>
        <AgGridReact
          rowData={selectedRows}
          columnDefs={childColumnDefs}
          defaultColDef={defaultColDef}
          rowModelType="clientSide"
          animateRows={true}
          enableCellTextSelection={true}
          theme={themeBalham}
        />
      </div>
    </div>
  );
};

export default ChildOrderGrid; 