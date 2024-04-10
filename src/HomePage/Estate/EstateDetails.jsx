import { useParams, useLoaderData } from "react-router-dom";


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
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={hotel.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{hotel.estate_title}</h2>
                <p>{hotel.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;