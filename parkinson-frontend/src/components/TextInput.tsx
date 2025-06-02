import React from 'react'

type TextInputProps = {
    label: string;
    value: string;
    onChange: (NewValue: string) => void;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    value,
    onChange,
    placeholder = '',
    type = 'text',
}) => {
    return (
        <div style={{marginBottom: '1rem'}}>
            <label style={{display: 'block', marginBottom: '0.25rem'}}>{label}</label>
            <input 
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                style={{
                    padding:'0.5rem',
                    fontSize:'1rem',
                    border:'1px solid #ccc',
                    borderRadius:'4px',
                    width: '100%',
                }}
            />
        </div>
    )
}

export default TextInput;