import React, { useEffect } from 'react';
import { Alert, AlertTitle } from '@mui/material';

export default function SimpleAlert({ message, severity, onClose }) {

    // Automatically close the alert after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            width: "350px",
            zIndex: 1000, // Ensure it appears on top
        }}>
            <Alert severity={severity} onClose={onClose}>
                <AlertTitle>{severity}</AlertTitle>
                {message}
            </Alert>
        </div>
    );
}

