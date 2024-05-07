import React from "react";
import ResortDetails from '../../components/ResortDetails/ResortDetails';
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import axios from "axios";
import './ResortDetailsPage.scss';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BackArrow from '../../assets/icons/arrow_back.svg';

function ResortDetailsPage () {
	const { itemId } = useParams();
	const [ resortDetails, setResortDetails ] = useState('');
    const navigate = useNavigate();

	useEffect(() => {
		const fetchDetails = async () => {

			try {
				const response = await axios.get(`http://localhost:8080/api/resorts/${itemId}`);
				setResortDetails(response.data);
			} catch (error) {
				console.error(`Error fetching data: ${error}`);
                navigate('/resorts');
			}
		}

		fetchDetails();
	}, [itemId, navigate]);

    return (
        <section className='resort-details-page'>
            <div className='resort-details-header'>
                <div className='resort-details-header__nav'>
                    <img 
                        src={BackArrow} 
                        alt='Back Arrow' 
                        className='resort-details-header__nav-arrow'
                        onClick={() => navigate(-1)}/>
                    <p className='resort-details-header__nav-current'>{resortDetails.resort_name}</p>
                </div>
            </div>
            <hr />
            <ResortDetails details={resortDetails} />
            <WeatherInfo itemId={itemId} />
        </section>
    );
 }

export default ResortDetailsPage;