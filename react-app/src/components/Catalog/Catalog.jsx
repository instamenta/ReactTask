
import dataJSON from './../../api.json'
import './Catalog.css'

export const Catalog = () => {

    const catalogList = dataJSON.map((userData) => {

        const { firstName, lastName, available, phone, email, image, location } = userData
        const fullname = firstName + ' ' + lastName
        return (
            <div className='card'>
                <div className='card-image-container'>
                    <img className='card-image' src={image} alt='img'></img>
                    {available
                        ? <img src="./../../public/icon-available.svg" alt="search-icon" className="card-status-image" />
                        : <img src="./../../public/icon-busy.svg" alt="search-icon" className="card-status-image" />
                    }
                </div>
                <div className='card-description-container'>
                    <span className='card-fullname'>{fullname}</span>
                    <span className='card-location'>{location}</span>
                    <span className='hidden card-phone'>phone: {phone}</span>
                    <span className='hidden card-email'>email: {email}</span>
                </div>
            </div>
        )
    })
    return (
        <div className='card-container'>
            {catalogList}
        </div>
    )
}