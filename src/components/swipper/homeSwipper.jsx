// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import foto from '../../asset/image/home/guci.png'
import { BagHeart } from 'react-bootstrap-icons';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[ Pagination, A11y]}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="hero-image col-12 col-sm-10 col-md-4 d-flex align-items-center flex-column ">
                    <img className='img-fluid' src={foto} alt="hero" />
                <h4 className='text-white text-center'>Guci bag Limited edition sasion 1</h4>
                <button className='btn btn-warning my-1 px-4'>Buy Now <BagHeart/> </button>

        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};