import './ResortDetails.scss';

function ResortDetails({ details }) {

	const {resort_name, city, trail_count, base_altitude, summit_altitude, vertical,website,map_url} = details;
    
	return (
		<section className='resort-details'>
            <div className='resort-details__container1'> 
                <div className='resort-name'>
                    <h4 className='resort-name__label'>Resort name:</h4>
                    <p className='resort-name__content'>{resort_name}</p>
                </div>
                <div className='resort-city'>
                    <h4 className='resort-city__label'>City:</h4>
                    <p className='resort-city__content'>{city}</p>
                </div>
                <div className='resort-website'>
                    <h4 className='resort-website__label'>Website:</h4>
                    <a href={website} className="resort-website__content" target="_blank" rel="noopener noreferrer">
                        {website}
                    </a>
                </div>
            </div>

			<div className='resort-details__container2'>
                <div className='resort-trail'>
                    <h4 className='resort-trail__label'>Trail #:</h4>
                    <p className='resort-trail__content'>{trail_count}</p>
                </div>
                <div className='resort-base'>
                    <h4 className='resort-base__label'>Base_Altitude:</h4>
                    <p className='resort-base__content'>{base_altitude}</p>
                </div>
                <div className='resort-summit'>
                    <h4 className='resort-summit__label'>Summit_Altitude:</h4>
                    <p className='resort-summit__content'>{summit_altitude}</p>
                </div>
                <div className='resort-vertical'>
                    <h4 className='resort-vertical__label'>Vertical:</h4>
                    <p className='resort-vertical__content'>{vertical}</p>
                </div>
			</div>
            <div className='resort-details__container3'>
                <div className='resort-map'>
                    <h4 className='resort-map__label'>Map:</h4>
                    <embed
                        src={map_url}
                        type="application/pdf"
                        width="100%"
                        height="500px"
                        className="resort-map__content"
                    />
                </div>
            </div>
		</section>
	);
}

export default ResortDetails;