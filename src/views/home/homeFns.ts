import {onMounted} from 'vue'
import Swiper, {
    Autoplay,
    EffectCoverflow,
    EffectCube,
    Pagination,
    Navigation,
  } from "swiper";
Swiper.use([Autoplay, EffectCoverflow, EffectCube, Pagination, Navigation]);
export const useSwiper = () :void =>{
    onMounted(() => {
        console.log('swiper creagte')
        new Swiper(".swiper1", {
            pagination: {
            el: ".swiper-pagination",
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            hideOnClick: true,
            },
            autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            },
            on: {
                navigationShow: function () {
                    console.log("按钮显示了");
                },
            },
        });
    })

}