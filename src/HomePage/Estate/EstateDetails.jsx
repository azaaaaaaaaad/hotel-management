import { useParams } from "react-router-dom";


const EstateDetails = ({ hotel }) => {

    const { id } = useParams()
    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

export default EstateDetails;