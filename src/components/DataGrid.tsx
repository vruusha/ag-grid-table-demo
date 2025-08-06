import React, { useState, useCallback } from 'react';
import 'ag-grid-community/styles/ag-theme-balham.css';
import './DataGrid.css';
import {GridApi} from 'ag-grid-community';
import GridToolbar from './GridToolbar';
import ParentOrderGrid from './ParentOrderGrid';
import ChildOrderGrid from './ChildOrderGrid';
import { useDebounce } from '../hooks/useDebounce';

export interface GridRow {
    id: string;
    name: string;
    type: string;
    status: 'new' | 'rejected' | 'pending' | 'filled';
    side: 'BUY' | 'SELL'
    tif: string;
    orderQty: number;
    filledQty: number;
    price: number;
    exchange: string;
    time: string;
    children?: GridRow[] | []
}

interface DataGridProps {
    onRowSelection?: (selectedRows: GridRow[]) => void;
    onExport?: (data: GridRow[]) => void;
}

const DataGrid: React.FC<DataGridProps> = ({ onRowSelection, onExport }) => {
    const [selectedRows, setSelectedRows] = useState<GridRow[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [parentGridApi, setParentGridApi] = useState<GridApi | null>(null);
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    // Handle row selection from parent grid
    const handleRowSelection = useCallback((rows: GridRow[]) => {
        setSelectedRows(rows);
        onRowSelection?.(rows);
    }, [onRowSelection]);

    // Handle export
    const handleExport = useCallback(() => {
        if (parentGridApi) {
          parentGridApi.exportDataAsCsv({
            fileName: 'parent-orders.csv'
          });
        }
      }, [parentGridApi]);

    // Handle error dismiss
    const handleErrorDismiss = useCallback(() => {
        setError(null);
    }, []);

    // Handle search change
    const handleSearchChange = useCallback((value: string) => {
        setSearchTerm(value);
    }, []);

    return (
        <div className='ag-theme-balham-dark'>
            <div className="data-grid-container">
                <GridToolbar
                    searchTerm={searchTerm}
                    onSearchChange={handleSearchChange}
                    onExport={handleExport}
                    loading={loading}
                    error={error}
                    onErrorDismiss={handleErrorDismiss}
                />

                <ParentOrderGrid
                    onRowSelection={handleRowSelection}
                    searchTerm={debouncedSearchTerm}
                    loading={loading}
                    onLoadingChange={setLoading}
                    onErrorChange={setError}
                    onGridApiReady={setParentGridApi}
                />
            </div>
            
            <ChildOrderGrid selectedRows={selectedRows} />
        </div>
    );
};

export default DataGrid; 