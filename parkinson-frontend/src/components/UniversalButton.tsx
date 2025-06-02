import React from 'react'

type UniversalButtonProps = {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
}

const UniversalButton: React.FC<UniversalButtonProps> = ({
    text,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 ${className}'}
        >
            {text}
        </button>
    );
};

export default UniversalButton;