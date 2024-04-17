import { useParams, useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { GrLocation } from "react-icons/gr";
import Footer from "../Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Helmet } from "react-helmet-async";
// ..
AOS.init();

const EstateDetails = () => {

    const { id } = useParams();
    const hotels = useLoaderData();
    const hotel = hotels.find(hotel => hotel.id === id)


    return (
        <div data-aos="zoom-in" data-aos-duration="3000">
            <Helmet>
                <title>Estate Details of {id}</title>
            </Helmet>
            <div className="card md:card-side lg:card-side bg-base-100 shadow-xl">
                <figure><img data-aos="flip-left" data-aos-duration="3000" src={hotel.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{hotel.estate_title}</h2>
                    <div className="mt-2">
                        <p>{hotel.description}</p>
                        <hr className="mt-2 mb-2" />
                        <Marquee><p>Price: {hotel.price}</p>
                        </Marquee>
                        <p>For: {hotel.status}</p>
                        <hr className="mt-2 mb-2" />
                        <p>Area: {hotel.area}</p>
                        <p className="flex items-center gap-1"><GrLocation></GrLocation>{hotel.location}</p>
                        <hr className="mt-2 mb-2" />
                        <p>Facilities</p>
                        <li>{hotel.facilities[0]}</li>
                        <li>{hotel.facilities[1]}</li>
                        <li>{hotel.facilities[2]}</li>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EstateDetails;