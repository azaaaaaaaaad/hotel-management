import { useLoaderData } from "react-router-dom";
import Swipper from "../Swipper/Swipper";
import Estate from "../Estate/Estate";
import Footer from "../Footer/Footer";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const hotels = useLoaderData();
    // console.log(hotels);
    return (
        <div>
            <Swipper></Swipper>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="space-y-2">
                <h2 className="text-center font-semibold text-2xl mt-6 ">Estates</h2>
                <Marquee><p>a piece of landed property, especially one of large extent with an elaborate house on it: to have an estate in the country. Law. property or possessions. the legal position or status of an owner, considered with respect to property owned in land or other things.</p></Marquee>
            </div>
            <div className="mt-10 gap-6 grid md:grid-cols-2 lg:grid-cols-3">
                {
                    hotels.map(hotel =>
                        <Estate
                            key={hotel.id}
                            hotel={hotel}
                        ></Estate>
                    )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;