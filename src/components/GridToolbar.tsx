import React, { useCallback } from 'react';

interface GridToolbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onExport: () => void;
  loading: boolean;
  error: string | null;
  onErrorDismiss: () => void;
}

const GridToolbar: React.FC<GridToolbarProps> = ({
  searchTerm,
  onSearchChange,
  onExport,
  loading,
  error,
  onErrorDismiss
}) => {
  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  }, [onSearchChange]);

  return (
    <>
      {error && (
        <div className="error-banner" style={{
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: 'var(--spacing-md)',
          marginBottom: 'var(--spacing-md)',
          borderRadius: 'var(--border-radius-sm)',
          border: '1px solid #f5c6cb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>Error: {error}</span>
          <button 
            onClick={onErrorDismiss}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              fontSize: 'var(--font-size-lg)',
              color: '#721c24'
            }}
          >
            ×
          </button>
        </div>
      )}
      
      <div className="grid-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search all columns..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="quick-filter-input"
            disabled={loading}
          />
          {loading && (
            <span style={{ marginLeft: '10px', color: 'var(--text-secondary)' }}>
              Loading...
            </span>
          )}
        </div>
        <div className="action-buttons">
          <button 
            className="primary-button"
            disabled={loading}
          >
            Create Order
          </button>
          <button
            onClick={onExport}
            className="export-button"
            disabled={loading}
          >
            Export
          </button>
        </div>
      </div>
    </>
  );
};

export default GridToolbar; 