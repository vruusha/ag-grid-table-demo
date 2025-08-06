import React, { memo } from 'react';

interface StatusBadgeProps {
    status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = memo(({ status }) => {
    const getStatusColor = (status: string) => {
        const colors = {
            new: '#007bff',
            pending: '#ffc107',
            filled: '#28a745',
            rejected: '#dc3545'
        };
        return colors[status as keyof typeof colors] || '#6c757d';
    };
    
    return (
        <span 
            className="status-badge"
            style={{
                backgroundColor: getStatusColor(status),
                color: 'white',
                padding: '1px 4px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500',
                textTransform: 'capitalize',
                display: 'inline-block',
                minWidth: '60px',
                textAlign: 'center'
            }}
        >
            {status}
        </span>
    );
});

StatusBadge.displayName = 'StatusBadge';

export default StatusBadge; 