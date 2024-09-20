import React from 'react';
import '../index.css';

export default function AcceptCheckBox({ checked, onChange, error }) {
    return (
        <div className="custom-checkbox">
            <input
                type="checkbox"
                id="checkbox"
                className="custom-checkbox-input"
                required
                name="acceptTerms"
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor="checkbox" className="custom-checkbox-label">
                I accept
            </label>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank" rel="noopener noreferrer">
                Terms and Privacy Policy
            </a>
            {error && <div className="error_message">{error}</div>}
        </div>
    );
}
