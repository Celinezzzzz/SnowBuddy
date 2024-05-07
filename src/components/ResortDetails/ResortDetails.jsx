import './ResortDetails.scss';

function ResortDetails({ details }) {

	const {city, trail_count, base_altitude, summit_altitude, vertical,website,map_url} = details;
    
	return (
		<section className='resort-details'>
            <div className='resort-details__container1'> 
                <div className='resort-city'>
                    <p className='resort-label'>City:</p>
                    <p className='resort-city__content'>{city}</p>
                </div>
                <div className='resort-website'>
                    <p className='resort-label'>Website:</p>
                    <a href={website} className="resort-website__content" target="_blank" rel="noopener noreferrer">
                        {website}
                    </a>
                </div>
            </div>

			<div className='resort-details__container2'>
                <div className='resort-trail'>
                    <p className='resort-label'>Trail Count:</p>
                    <p className='resort-trail__content'>{trail_count}</p>
                </div>
                <div className='resort-vertical'>
                    <p className='resort-label'>Vertical:</p>
                    <p className='resort-vertical__content'>{vertical}</p>
                </div>
            </div>
            <div className='resort-details__container3'>
                <div className='resort-base'>
                    <p className='resort-label'>Base Altitude:</p>
                    <p className='resort-base__content'>{base_altitude}</p>
                </div>
                <div className='resort-summit'>
                    <p className='resort-label'>Summit Altitude:</p>
                    <p className='resort-summit__content'>{summit_altitude}</p>
                </div>
			</div>
            <div className='resort-details__container4'>
                <div className='resort-map'>
                    <p className='resort-label'>Map:</p>
                    <img src={map_url} alt="Trail Map" className="resort-map__content"/>
                </div>
            </div>
		</section>
	);
}

export default ResortDetails;