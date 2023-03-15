// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import foto from '../../asset/image/home/guci.png'
import Kalung from '../../asset/image/home/kalung.png'
import sepatu from '../../asset/image/home/sepatu.png'
import { BagHeart } from 'react-bootstrap-icons';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';

export default () => {

  return (
    <Swiper
      modules={[Pagination, A11y]}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="hero-image col-12 col-sm-10 col-md-4 d-flex align-items-center flex-column ">
          <img className='img-fluid' src={foto} alt="hero" />
          <h4 className='text-white text-center'>Guci bag Limited edition sasion 1</h4>
          <NavLink to="product/detail/343" className='btn btn-warning my-1 px-4'>Buy Now <BagHeart /> </NavLink>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-image col-12 col-sm-10 col-md-4 d-flex align-items-center flex-column ">
          <img className='img-fluid' src={sepatu} alt="hero" />
          <h4 className='text-white text-center'>Sepatu Convers Limited edition</h4>
          <NavLink to="product/detail/300" className='btn btn-warning my-1 px-4'>Buy Now <BagHeart /> </NavLink>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-image col-12 col-sm-10 col-md-3 d-flex align-items-center flex-column ">
          <div className="kalung col-12 col-md-10">
            <img className='img-fluid' src={Kalung} alt="hero" />
          </div>
          <h4 className='text-white text-center'>Kalung Berlian cantik mahal</h4>
          <NavLink to="product/detail/304" className='btn btn-warning my-1 px-4'>Buy Now <BagHeart /> </NavLink>

        </div>
      </SwiperSlide>
      

    </Swiper>
  );
};