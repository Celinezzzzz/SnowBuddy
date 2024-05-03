import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResortsPage.scss';
import ResortsHeader from '../../components/ResortsHeader/ResortsHeader'; 
import ResortsList from '../../components/ResortsList/ResortsList';

function ResortsPage() {
  
    const [resorts, setResorts] = useState([]);

    const fetchResorts = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/resorts/`);
            setResorts(response.data);
        } catch (error) {
            console.error('Error fetching resorts:', error);
        }
    };

    useEffect(() => {
        fetchResorts();
    }, []);

    return (
        <>
            <div className="resorts-page">
                <ResortsHeader />
                <ResortsList resorts={resorts} />
            </div>
        </>
    );
}

export default ResortsPage;
