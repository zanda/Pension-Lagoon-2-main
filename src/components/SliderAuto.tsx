import * as React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { getDataFromFirebase } from '../database/getDataFromFirebase';

export default function SliderAuto({ collection }: any) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      // aller chercher les collections sur firebase
      const response = await getDataFromFirebase(collection);
console.log("toto: " + response);
      setData(response as never[]);
    })();
  }, []);

  return (
    <Swiper
      spaceBetween={0}
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
      {data.map((slide: any) => (
        <SwiperSlide>
          <img
            src={slide.url}
            style={{
              height: '40rem',
              objectFit: 'cover',
              objectPosition: 'top',
              width: '100%',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
