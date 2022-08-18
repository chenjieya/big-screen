import Swiper from "swiper";

export default function swiper(dom='.swiper-container') {
    const mySwiper = new Swiper(dom, {
        //direction: 'vertical', // 垂直切换选项
        //mousewheel: true, //滚轮
        autoplay: { //自动开始
            delay: 8000, //时间间隔
            disableOnInteraction: false, //*手动操作轮播图后不会暂停*
        },
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: false, // 循环模式选项
    })

    mySwiper.el.onmouseover = function(){
        mySwiper.autoplay.stop();
    }
    mySwiper.el.onmouseout = function(){
        mySwiper.autoplay.start();
    }

}