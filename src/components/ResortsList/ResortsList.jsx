import React from 'react';
import ResortsItem from '../ResortsItem/ResortsItem';
import SortIcon from '../../assets/icons/sort-24px.svg';
import './ResortsList.scss'; 


function ResortsList({ resorts, onSortChange, activeSortField }) { 
    return (
        <section className="resorts-list-section">
            <div className="resorts-list-section__labels">
                <div className="resorts-list-section__label-container resorts-list-section__label-container-resorts">
                    <div className="resorts-list-section__label">Name</div> 
                    <img 
                        src={SortIcon} 
                        alt="Sort" 
                        className={`resorts-list-section__label-img ${activeSortField === 'resort_name' ? 'active' : ''}`} 
                        onClick={() => onSortChange('resort_name')} 
                    />
                </div>
                <div className="resorts-list-section__label-container resorts-list-section__label-container-province">
                    <div className="resorts-list-section__label">Province</div> 
                    <img 
                        src={SortIcon} 
                        alt="Sort" 
                        className={`resorts-list-section__label-img ${activeSortField === 'province' ? 'active' : ''}`} 
                        onClick={() => onSortChange('province')}
                    />
                </div>
                <div className="resorts-list-section__label-container resorts-list-section__label-container-city">
                    <div className="resorts-list-section__label">City</div> 
                    <img 
                        src={SortIcon} 
                        alt="Sort" 
                        className={`resorts-list-section__label-img ${activeSortField === 'city' ? 'active' : ''}`} 
                        onClick={() => onSortChange('city')}
                    />
                </div>
                <div className="resorts-list-section__label-container resorts-list-section__label-container-trails">
                    <div className="resorts-list-section__label"># Trails</div>
                    <img 
                        src={SortIcon} 
                        alt="Sort" 
                        className={`resorts-list-section__label-img ${activeSortField === 'trail_count' ? 'active' : ''}`} 
                        onClick={() => onSortChange('trail_count')}
                    />
                </div>
            </div>
            <ul className="resorts-list">
                {resorts.map((item) => (
                    <ResortsItem 
                        key={item.id} 
                        resorts={item} 
                    />
                ))}
            </ul>           
        </section>
    );
}

export default ResortsList;