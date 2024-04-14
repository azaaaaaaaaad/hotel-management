import { Link } from "react-router-dom";

const Estate = ({ hotel }) => {
    const { estate_title,
        image,
        id,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities

    } = hotel;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <p className="font-bold">{segment_name}</p>
                    <p>Price: {price}</p>
                    <p>For: {status}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/hotels/${id}`}><button className="btn btn-primary">View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;