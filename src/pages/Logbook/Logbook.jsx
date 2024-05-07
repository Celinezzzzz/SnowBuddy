import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Logbook.scss';
import { useNavigate } from 'react-router-dom';

const Logbook = () => {
    const [entries, setEntries] = useState([]);
    const [resorts, setResorts] = useState([]); 
    const [form, setForm] = useState({ resort_id: '', date: '', number_of_runs: '', start_time: '', end_time: '' });
    const [editingId, setEditingId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            console.log("No token found, redirecting to login...");
            navigate('/login');
            return;
        }

        const fetchData = async () => {
            try {
                const [resortsResponse, entriesResponse] = await Promise.all([
                    axios.get('http://localhost:8080/api/resorts', {
                        headers: { Authorization: `Bearer ${token}` }
                    }),
                    axios.get('http://localhost:8080/api/logbook', {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                ]);
                setResorts(resortsResponse.data);
                setEntries(entriesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                }
            }
        };
        fetchData();
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('authToken');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        try {
            if (editingId) {
                await axios.put(`http://localhost:8080/api/logbook/${editingId}`, form, config);
            } else {
                await axios.post('http://localhost:8080/api/logbook', form, config);
            }
            setForm({ resort_id: '', date: '', number_of_runs: '', start_time: '', end_time: '' });
            setEditingId(null);
            const response = await axios.get('http://localhost:8080/api/logbook', config);
            setEntries(response.data);
        } catch (error) {
            console.error('Error submitting entry:', error);
        }
    };

    const handleEdit = (entry) => {
        setForm(entry);
        setEditingId(entry.id);
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('authToken');
        try {
            await axios.delete(`http://localhost:8080/api/logbook/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setEntries(entries.filter(entry => entry.id !== id));
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    };

    return (
        <div className="logbook">
            <h1>Logbook</h1>
            <form onSubmit={handleSubmit}>
                <select name="resort_id" value={form.resort_id} onChange={handleChange}>
                    <option value="">Select Resort</option>
                    {resorts.map(resort => (
                        <option key={resort.id} value={resort.id}>
                            {resort.resort_name}
                        </option>
                    ))}
                </select>
                <input type="date" name="date" value={form.date} onChange={handleChange} />
                <input type="number" name="number_of_runs" placeholder="Number of Runs" value={form.number_of_runs} onChange={handleChange} />
                <input type="time" name="start_time" value={form.start_time} onChange={handleChange} />
                <input type="time" name="end_time" value={form.end_time} onChange={handleChange} />
                <button type="submit">{editingId ? 'Update Entry' : 'Add Entry'}</button>
            </form>
            <div className="entries">
                {entries.map(entry => (
                    <div key={entry.id} className="entry">
                        <div>Date: {entry.date}</div>
                        <div>Resort: {resorts.find(r => r.id === entry.resort_id)?.resort_name || 'Unknown'}</div>
                        <div>Runs: {entry.number_of_runs}</div>
                        <div>Start: {entry.start_time}</div>
                        <div>End: {entry.end_time}</div>
                        <button onClick={() => handleEdit(entry)}>Edit</button>
                        <button onClick={() => handleDelete(entry.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Logbook;
