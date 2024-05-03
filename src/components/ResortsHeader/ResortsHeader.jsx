import React from 'react';
import './ResortsHeader.scss';
import { Link } from 'react-router-dom';

function ResortsHeader() {
  return (
    <div className="resorts-header">
        <h1 className="resorts-header__title">resorts</h1>
        <div className="resorts-header__controls">
            <input 
                type="text" 
                className="resorts-header__input" 
                placeholder="Search..." 
            />
        </div>       
    </div>
  );
}

export default ResortsHeader;
