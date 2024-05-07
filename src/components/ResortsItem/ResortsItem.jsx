import React from 'react';
import './ResortsItem.scss';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '../../assets/icons/chevron_right-24px.svg';

function ResortsItem({resorts}) {

    return (
        <div className="resorts-item">
            <div className="resorts-item__main-container">
                <div className="resorts-item__container1">
                    <div className="resorts-item__name-container">
                        <p className="resorts-item__label-mobile">RESORT NAME</p>
                        <Link to={`/resorts/${resorts.id}`} className="resorts-item__name-sub-container">
                            <p className="resorts-item__name">{resorts.resort_name}</p>
                            <img src={ChevronRightIcon} alt="More details" className="resorts-item__chevron" />
                        </Link>
                    </div>
                    <div className="resorts-item__trails-container">
                        <p className="resorts-item__label-mobile">TRAIL COUNT</p>
                        <p className="resorts-item__trails">{resorts.trail_count}</p>
                    </div>
                </div>
                <div className="resorts-item__container2">
                    <div className="resorts-item__province-container">
                        <p className="resorts-item__label-mobile">PROVINCE</p>
                        <p className="resorts-item__province">{resorts.province}</p>
                    </div>
                    <div className="resorts-item__city-container">
                        <p className="resorts-item__label-mobile">CITY</p>
                        <p className="resorts-item__city">{resorts.city}</p>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default ResortsItem;
