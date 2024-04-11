import { useLoaderData } from "react-router-dom";
import Swipper from "../Swipper/Swipper";
import Estate from "../Estate/Estate";



const Home = () => {
    const hotels = useLoaderData();
    // console.log(hotels);
    return (
        <div>
            <Swipper></Swipper>
            <div className="mt-10 gap-6 grid md:grid-cols-2 lg:grid-cols-3">
                {
                    hotels.map(hotel=> 
                    <Estate
                        key={hotel.id}
                        hotel={hotel}
                    ></Estate>
                    )
                }
            </div>
        </div>
    );
};

export default Home;