import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
    ColDef, GridReadyEvent, GridApi, ModuleRegistry, AllCommunityModule, NumberFilterModule,
    TextFilterModule, InfiniteRowModelModule,
    ValidationModule, IGetRowsParams, themeBalham
} from 'ag-grid-community';
import { GridRow } from './DataGrid';
import StatusBadge from './StatusBadge';
import DropdownRenderer from './DropDownRendered';
import { buildApiUrl, ENV_CONFIG } from '../config/environment';

ModuleRegistry.registerModules([
    AllCommunityModule,
    NumberFilterModule,
    TextFilterModule,
    InfiniteRowModelModule,
    TextFilterModule,
    ValidationModule
]);

interface ParentOrderGridProps {
  onRowSelection: (selectedRows: GridRow[]) => void;
  searchTerm: string;
  loading: boolean;
  onLoadingChange: (loading: boolean) => void;
  onErrorChange: (error: string | null) => void;
  onGridApiReady: (api: GridApi) => void;
}

const ParentOrderGrid: React.FC<ParentOrderGridProps> = ({
  onRowSelection,
  searchTerm,
  loading,
  onLoadingChange,
  onErrorChange,
  onGridApiReady
}) => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);

  // Column definitions
  const columnDefs: ColDef[] = useMemo(() => [
    {
      headerName: 'Order ID',
      field: 'id',
      sortable: true,
      filter: true,
      width: 100,
      headerCheckboxSelection: true
    },
    {
      headerName: 'Symbol',
      field: 'name',
      sortable: true,
      filter: true,
      width: 200,
    },
    {
      headerName: 'TYPE',
      field: 'type',
      sortable: true,
      filter: true,
      width: 250
    },
    {
      headerName: 'Side',
      field: 'side',
      sortable: true,
      filter: true,
      width: 120,
      cellRenderer: (params: { value: 'BUY' | 'SELL' }) => (
        <span className={params.value === 'BUY' ? 'side-buy' : 'side-sell'}>
          {params.value}
        </span>
      ),
    },
    {
      headerName: 'Status',
      field: 'status',
      sortable: true,
      filter: true,
      width: 120,
      cellRenderer: (params: { value: string }) => <StatusBadge status={params.value} />,
    },
    {
      headerName: 'TIF',
      field: 'tif',
      sortable: true,
      filter: true,
      width: 150,
    },
    {
      headerName: 'Order Qty',
      field: 'orderQty',
      sortable: true,
      filter: "agNumberColumnFilter",
      width: 180,
    },
    {
      headerName: 'Filled Qty',
      field: 'filledQty',
      sortable: true,
      filter: true,
      width: 180
    },
    {
      headerName: 'Price',
      field: 'price',
      sortable: true,
      filter: true,
      width: 150,
    },
    {
      headerName: 'Exchange',
      field: 'exchange',
      sortable: true,
      filter: true,
      width: 150,
    },
    {
      headerName: 'Time',
      field: 'time',
      sortable: true,
      filter: true,
      width: 150,
    },
    {
      headerName: '',
      field: 'action',
      sortable: false,
      filter: false,
      width: 10,
      pinned: 'right',
      cellRenderer: DropdownRenderer,
    },
  ], []);

  // Default column definitions
  const defaultColDef = useMemo(() => ({
    flex: 1,
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: true,
    suppressHeaderMenuButton: true,
    suppressHeaderContextMenu: true,
  }), []);

  // Grid ready event
  const onGridReady = useCallback((params: GridReadyEvent) => {
    setGridApi(params.api);
    onGridApiReady(params.api);

    const dataSource = {
      getRows: async (params: IGetRowsParams) => {
        const { startRow, endRow, successCallback, failCallback } = params;
        
        onLoadingChange(true);
        onErrorChange(null);
        
        try {
          const url = buildApiUrl(ENV_CONFIG.API_ENDPOINTS.ORDERS, { start: startRow, end: endRow });
          const res = await fetch(url, {
            headers: { 'Content-Type': 'application/json' }
          });
          
          if (!res.ok) {
            throw new Error(`HTTP ${res.status}: ${res.statusText}`);
          }
          
          const data = await res.json();
          successCallback(data.rows, data.totalCount);
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Failed to fetch orders';
          onErrorChange(errorMessage);
          console.error("Failed to fetch orders", err);
          failCallback();
        } finally {
          onLoadingChange(false);
        }
      }
    };
    
    params.api.setGridOption('datasource', dataSource);
  }, [onLoadingChange, onErrorChange, onGridApiReady]);

  // Row selection changed
  const onSelectionChanged = useCallback(() => {
    if (gridApi) {
      const selectedNodes = gridApi.getSelectedNodes();
      const selectedData = selectedNodes.reduce((acc, node) => {
        if (node.data?.children?.length) {
          acc.push(...node.data.children);
        }
        return acc;
      }, [] as GridRow[]);
      
      onRowSelection(selectedData);
    }
  }, [gridApi, onRowSelection]);

  // Apply search filter
  useEffect(() => {
    if (gridApi) {
      gridApi.setFilterModel({
        quickFilter: {
          filter: searchTerm,
          type: 'contains'
        }
      });
    }
  }, [searchTerm, gridApi]);

  return (
    <div style={{ height: 'calc(100vh - 80px)', width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowModelType="infinite"
        cacheBlockSize={25}
        maxBlocksInCache={5}
        onGridReady={onGridReady}
        onSelectionChanged={onSelectionChanged}
        rowSelection="multiple"
        theme={themeBalham}
        animateRows={true}
        enableCellTextSelection={true}
        suppressRowClickSelection={false}
        suppressCellFocus={false}
        infiniteInitialRowCount={100}
      />
    </div>
  );
};

export default ParentOrderGrid; 