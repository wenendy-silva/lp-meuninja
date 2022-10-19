import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


SwiperCore.use([Navigation]);

const Slider2 = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={{
                    prevEl: ".custom_prev",
                    nextEl: ".custom_next",
                }}
                className="custom-class"
            >

                <SwiperSlide>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/1DJ5Du-0oJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </SwiperSlide>
                
                
            </Swiper>

            <div id="carausel-2-columns-1-arrows" className="flex">
                    
                </div>
        </>
    );
};

export default Slider2;