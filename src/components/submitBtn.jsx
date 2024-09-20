import React from 'react';
import '../index.css';

export default function SubmitBtn({ color }) {
    return (
        <div className='btn_container'>
            <button type='submit' className='btn' style={{ backgroundColor: color }}>
                Send
            </button>
        </div>
    );
}
