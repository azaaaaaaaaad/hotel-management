import PhotoAlbum from "react-photo-album";
import Footer from "../Footer/Footer";

// https://i.ibb.co/K2fLnr2/p1.webp
// https://i.ibb.co/0Dk3R5X/p2.jpg
// https://i.ibb.co/HKTv8Z8/p3.jpg
// https://i.ibb.co/bNqkbxW/p4.jpg
// https://i.ibb.co/hBxxzKy/p5.jpg

const photos = [
    { src: "https://i.ibb.co/K2fLnr2/p1.webp", width: 1080, height: 800 },
    { src: "https://i.ibb.co/0Dk3R5X/p2.jpg", width: 1080, height: 1620 },
    { src: "https://i.ibb.co/HKTv8Z8/p3.jpg", width: 1080, height: 720 },
    { src: "https://i.ibb.co/bNqkbxW/p4.jpg", width: 1080, height: 721 },
    { src: "https://i.ibb.co/hBxxzKy/p5.jpg", width: 1080, height: 1620 },
    { src: "https://i.ibb.co/K2fLnr2/p1.webp", width: 1080, height: 607 },
    { src: "https://i.ibb.co/0Dk3R5X/p2.jpg", width: 1080, height: 608 },
    { src: "https://i.ibb.co/HKTv8Z8/p3.jpg", width: 1080, height: 720 },
    { src: "https://i.ibb.co/bNqkbxW/p4.jpg", width: 1080, height: 1549 },
    { src: "https://i.ibb.co/hBxxzKy/p5.jpg", width: 1080, height: 720 },
    { src: "https://i.ibb.co/K2fLnr2/p1.webp", width: 1080, height: 694 },
    { src: "https://i.ibb.co/0Dk3R5X/p2.jpg", width: 1080, height: 1620 },
    { src: "https://i.ibb.co/HKTv8Z8/p3.jpg", width: 1080, height: 720 },
    { src: "https://i.ibb.co/bNqkbxW/p4.jpg", width: 1080, height: 1440 },
    { src: "https://i.ibb.co/hBxxzKy/p5.jpg", width: 1080, height: 1620 },
    { src: "https://i.ibb.co/K2fLnr2/p1.webp", width: 1080, height: 810 },
    { src: "https://i.ibb.co/0Dk3R5X/p2.jpg-3_fE", width: 1080, height: 610 },
    { src: "https://i.ibb.co/HKTv8Z8/p3.jpg", width: 1080, height: 160 },
    { src: "https://i.ibb.co/bNqkbxW/p4.jpg", width: 1080, height: 810 },
    { src: "https://i.ibb.co/hBxxzKy/p5.jpg", width: 1080, height: 720 },
    { src: "https://i.ibb.co/K2fLnr2/p1.webp", width: 1080, height: 1440 },
  ];

const Clients = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center mt-6 mb-6">Happy Clients</h2>
            <PhotoAlbum layout="masonry" photos={photos} />
            <Footer></Footer>
        </div>
    );
};

export default Clients;