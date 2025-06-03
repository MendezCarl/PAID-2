import React from 'react';

interface ExcelLayoutProps {
    children: React.ReactNode;
}

const ExcelLayout: React.FC<ExcelLayoutProps> = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#F3F2F1',
            width: '100%',
            boxSizing: 'border-box',
            paddingTop: '60px' // Height of navbar
        }}>
            <div style={{
                flex: 1,
                padding: '1rem',
                backgroundColor: 'white',
                margin: '1rem',
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                width: 'calc(100% - 2rem)',
                boxSizing: 'border-box',
                overflow: 'auto'
            }}>
                {children}
            </div>
        </div>
    );
};

export default ExcelLayout; 