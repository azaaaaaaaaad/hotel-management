import { useParams, useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { GrLocation } from "react-icons/gr";

const EstateDetails = () => {

    const { id } = useParams();
    const hotels = useLoaderData();
    const hotel = hotels.find(hotel => hotel.id === id)


    // {
    //     "image": "https://i.ibb.co/nbCHgbH/villa-anavaya-samui-seaview.jpg",
    //     "estate_title": "Luxury Villa with Ocean View",
    //     "id": "001",
    //     "segment_name": "Hotels",
    //     "description": "Beautiful villa overlooking the ocean, with spacious rooms and modern amenities.",
    //     "price": "$2,500,000",
    //     "status": "sale",
    //     "area": "5000 sq ft",
    //     "location": "Malibu, California",
    //     "facilities": ["living room", "swimming pool", "kitchen"]
    // },

    return (
        <div className="card md:card-side lg:card-side bg-base-100 shadow-xl">
            <figure><img src={hotel.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{hotel.estate_title}</h2>
                <div className="mt-2">
                    <p>{hotel.description}</p>
                    <hr className="mt-2 mb-2"/>
                    <Marquee><p>Price: {hotel.price}</p>
                    </Marquee>
                    <p>For: {hotel.status}</p>
                    <hr className="mt-2 mb-2"/>
                    <p>Area: {hotel.area}</p>
                    <p className="flex items-center gap-1"><GrLocation></GrLocation>{hotel.location}</p>
                    <hr className="mt-2 mb-2"/>
                    <p>Facilities</p>
                    <li>{hotel.facilities[0]}</li>
                    <li>{hotel.facilities[1]}</li>
                    <li>{hotel.facilities[2]}</li>
                </div>
                
            </div>
        </div>
    );
};

export default EstateDetails;