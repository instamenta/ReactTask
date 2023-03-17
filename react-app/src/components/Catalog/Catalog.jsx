import userDataArray from '../../api.json'
import './Catalog.css'

export const Catalog = ({ props }) => {
    // Maps all the userData and Filters it if needed
    const catalogList = userDataArray?.map((userData) => {

        const { firstName, lastName, available, phone, email, image, location } = userData;
        const fullname = firstName + ' ' + lastName
        // Add data to searchCriteria to filter based on more data
        const searchCriteria = fullname + email
        // If there is search string value we check if it included in any of our searchCriteria 
        if (props.length > 0 && !searchCriteria.toLowerCase().includes(props.toLowerCase())
        ) return null

        return (
            <div className='card'>
                <div className='card-image-container'>
                    <img className='card-image' src={image} alt='img'></img>
                    {/* Render based on the available boolean => Busy or Available Icon */}
                    {available
                        ? <img src="./../../public/icon-available.svg" alt="search-icon" className="card-status-image" />
                        : <img src="./../../public/icon-busy.svg" alt="search-icon" className="card-status-image" />
                    }
                </div>
                <div className='card-description-container'>
                    {/* Displayed fulltime */}
                    <span className='card-fullname'>{fullname}</span>
                    <span className='card-location'>{location}</span>
                    {/* Hidden class used to hide data if card is not hovered */}
                    <span className='hidden card-phone'>phone: {phone}</span>
                    <span className='hidden card-email'>email: {email}</span>
                </div>
            </div>
        )

    })
    return (
        // This is where we hold all the cards
        <div className='card-container'>
            {/* This is where the card list is displayed */}
            {catalogList}
        </div>
    )
}