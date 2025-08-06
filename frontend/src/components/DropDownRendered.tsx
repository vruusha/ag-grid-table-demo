import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

const DropdownRenderer = () => {
    const [open, setOpen] = useState(false);
    const actionButtonRef = useRef<HTMLSpanElement>(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    // Memoized event handlers to prevent recreation on every render
    const handleOutsideClick = useCallback((e: MouseEvent) => {
        if (actionButtonRef?.current && !actionButtonRef.current.contains(e.target as Node)) {
            setOpen(false);
        }
    }, []);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setOpen(false);
        }
    }, []);

    useEffect(() => {
        if (open && actionButtonRef.current) {
            const rect = actionButtonRef.current.getBoundingClientRect();
            if (rect) {
                setPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
            }
        }
    }, [open]);

    useEffect(() => {
        if (open) {
            document.addEventListener('mousedown', handleOutsideClick);
            document.addEventListener('keydown', handleKeyDown);
            
            return () => {
                document.removeEventListener('mousedown', handleOutsideClick);
                document.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [open, handleOutsideClick, handleKeyDown]);

    const toggleMenu = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();
        setOpen(prev => !prev);
    }

    const DropdownMenu = () => {
        return (
            <ul className='drop-down-menu' style={{
                position: 'absolute',
                top: `${position.top}px`,
                left: `${position.left}px`,
                border: '1px solid #ccc',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                padding: '8px',
                listStyle: 'none',
                zIndex: 9999,
                minWidth: '150px',
            }}>

                <li>Replace Order</li>
                <li>Cancel Order</li>
                <li>Force Cancel Order</li>
                <li>Downlaod CSV</li>
                <li>Downlaod JSON</li>
            </ul>

        )
    }

    return (
        <>
            <span className={`row-action-button`} onClick={toggleMenu} ref={actionButtonRef}>
                ⋮
            </span>
            {open && ReactDOM.createPortal(<DropdownMenu />, document.body)}
        </>
    )
}

export default DropdownRenderer;