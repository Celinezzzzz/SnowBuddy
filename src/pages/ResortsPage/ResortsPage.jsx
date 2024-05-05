import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResortsPage.scss';
import ResortsHeader from '../../components/ResortsHeader/ResortsHeader'; 
import ResortsList from '../../components/ResortsList/ResortsList';

function ResortsPage() {
  
    const [resorts, setResorts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState('resort_name');
    const [sortOrder, setSortOrder] = useState('asc');
    

    const fetchResorts = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/resorts`, {
                params: {
                    sort_by: sortField,
                    order_by: sortOrder
                }
            });
            setResorts(response.data);
        } catch (error) {
            console.error('Error fetching resorts:', error);
        }
    };

    useEffect(() => {
        fetchResorts();
    }, [sortField, sortOrder]);

    useEffect(() => {
        if (searchTerm) {
            const filtered = resorts.filter(resort =>
                resort.resort_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                resort.province.toLowerCase().includes(searchTerm.toLowerCase()) ||
                resort.city.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setResorts(filtered);
        } else {
            fetchResorts(); // Refetch if search term is cleared
        }
    }, [searchTerm]);

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    const handleSortChange = (field) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
        fetchResorts();
    };

    return (
        <>
            <div className="resorts-page">
                <ResortsHeader onSearch={handleSearchChange} />
                <ResortsList resorts={resorts} onSortChange={handleSortChange} />
            </div>
        </>
    );
}

export default ResortsPage;