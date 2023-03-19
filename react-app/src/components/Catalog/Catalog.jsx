import React from 'react';
import userDataArray from '../../api.json';
import './Catalog.css';

export const Catalog = ({ props }) => {
    let searchString = props;
    let key = 1;
    // Maps all the userData and Filters it if needed
    const catalogList = userDataArray?.map((userData) => {
        key++;
        const { firstName, lastName, available, phone, email, image, location } = userData;
        const fullname = firstName + ' ' + lastName;
        // Add data to searchCriteria to filter based on more data
        const searchCriteria = fullname + email;
        // If there is search string value we check if it included in any of our searchCriteria
        // and filter out items that don't match the search string
        if (searchString
            && searchString?.length > 0
            && !searchCriteria.toLowerCase().includes(searchString.toLowerCase())) {
            return null;
        }
        if (typeof searchString === 'string') {
            return (
                <div className="card" key={key} data-testid="catalog-card">
                    <div className="card-image-container">
                        <img className="card-image" src={image} alt="img" data-testid="card-image" />
                        {/* Render based on the available boolean => Busy or Available Icon */}
                        {available ? (
                            <img src="/icon-available.svg" alt={"available-icon-" + key} className="card-status-image" data-testid="available-icon" />
                        ) : (
                            <img src="/icon-busy.svg" alt={"busy-icon-" + key} className="card-status-image" data-testid="busy-icon" />
                        )}
                    </div>
                    <div className="card-description-container" data-testid="card-description-container">
                        {/* Displayed fulltime */}
                        <span className="card-fullname" data-testid="card-fullname">
                            {fullname}
                        </span>
                        <span className="card-location" data-testid="card-location">
                            {location}
                        </span>
                        {/* Hidden class used to hide data if card is not hovered */}
                        <span className="hidden card-phone" data-testid="card-phone">
                            phone: {phone}
                        </span>
                        <span className="hidden card-email" data-testid="card-email">
                            email: {email}
                        </span>
                    </div>
                </div>
            );
        } else {
            return null
        }
    });

    return (
        // This is where we hold all the cards
        <div className="card-container" data-testid="catalog">
            {/* This is where the card list is displayed */}
            {catalogList}
        </div>
    );
};