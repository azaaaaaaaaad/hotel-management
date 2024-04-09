
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import b1 from  '../../assets/b1.jpg'
import b2 from  '../../assets/b2.jpg'
import b3 from  '../../assets/b3.jpg'
import b4 from  '../../assets/b4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swipper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Swipper = () => {
    return (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={b2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={b3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={b4} alt="" /></SwiperSlide>
          </Swiper>
        </>
      );
};

export default Swipper;