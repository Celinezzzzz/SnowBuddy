import React from 'react';
import './ResortsHeader.scss';

function ResortsHeader({ onSearch }) {
    return (
        <div className="resorts-header">
            <h1 className="resorts-header__title">Resorts</h1>
            <div className="resorts-header__controls">
                <input 
                    type="text" 
                    className="resorts-header__input" 
                    placeholder="Search..."
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>       
        </div>
    );
}

export default ResortsHeader;
