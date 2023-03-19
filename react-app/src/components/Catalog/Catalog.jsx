import React from 'react';
import userDataArray from '../../api.json';
import './Catalog.css';

export const Catalog = ({ props }) => {

    let searchString = props;
    let key = 1;    // used as react key prop


    // Maps all the userData and Filters it if needed
    const catalogList = userDataArray?.map((userData) => {
        const { firstName, lastName, available, phone, email, image, location } = userData;
        const fullname = firstName + ' ' + lastName;
        // Add data to searchCriteria to filter based on more data
        const searchCriteria = fullname + email;

        if (searchString
            && searchString?.length > 0
            && !searchCriteria.toLowerCase().includes(searchString.toLowerCase())) {
            // Checks if searchString is a invalid and if it is NOT included 
            return null;
        }
        if (typeof searchString === 'string') {
            // Validates searchString 

            key++   // unique key prop is updated
            return (
                <div className="card" key={key} data-testid="catalog-card">
                    <div className="card-image-container">
                        <img className="card-image" src={image} alt="img" data-testid="card-image" />
                        {/* Render based on the available boolean => Busy or Available Icon */}
                        {available ? (      // AVAILABLE
                            <img src="/icon-available.svg" alt={"available-icon-" + key}
                                className="card-status-image" data-testid="available-icon"
                            />
                        ) : (               // BUSY
                            <img src="/icon-busy.svg" alt={"busy-icon-" + key}
                                className="card-status-image" data-testid="busy-icon"
                            />
                        )}
                    </div>
                    {/* User Data and Status */}
                    <div className="card-description-container" data-testid="card-description-container">

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
            return null;
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