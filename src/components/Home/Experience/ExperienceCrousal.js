import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { ArrowDown } from "lucide-react";

function ExperienceCrousal() {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-[#f9fafb] flex flex-col  md:gap-5">
            {/* <div className='w-full flex justify-center items-center bg-[#f9fafb] p-[0.5rem] '> */}
            <div className='flex justify-start items-start ml-[5%] md:ml-[3%]'>
                <h2 className="font-urbanist font-bold text-2xl flex items-center gap-4">
                    <span>Our Service</span> <ArrowDown size={20} />
                </h2>
            </div>
            {/* </div> */}
            <Slider {...settings} className=" gap-2 object-center overflow-hidden h-80 p-8 pb-3 mt-[-4%]">
                <div className="p-2">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1727446476041-390a57.jpeg" className="w-full h-[200px] md:max-h-[200px] lg:max-h-[200px] object-fill  rounded-lg" alt="Game 1" />

                </div>
                <div className="p-2">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1720173604045-456ebe.jpeg" className="w-full h-[200px] md:max-h-[200px] lg:max-h-[200px]object-cover object-fill rounded-lg" alt="Game 3" />
                </div>
                <div className="p-2">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1678454437383-aa4984.jpeg" className="w-full h-[200px] md:max-h-[200px] lg:max-h-[200px]object-cover object-fill rounded-lg" alt="Game 6" />
                </div>
                <div className="p-2">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1726138805913-db2e0e.jpeg" className="w-full h-[200px] md:max-h-[200px] lg:max-h-[200px]object-cover object-fill rounded-lg" alt="Game 6" />
                </div>
                <div className="p-2">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1701759875987-8b654d.jpeg" className="w-full h-[200px] md:max-h-[200px] lg:max-h-[200px]object-cover object-fill rounded-lg" alt="Game 5" />
                </div>
                <div className="p-2">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1711428209166-2d42c0.jpeg" className="w-full h-[200px] md:max-h-[200px] lg:max-h-[200px]object-cover object-fill rounded-lg" alt="Game 2" />
                </div>
                <div className="p-2">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1678463309015-2b92d2.jpeg" className="w-full h-[200px] md:max-h-[200px] lg:max-h-[200px]object-cover object-fill rounded-lg" alt="Game 5" />
                </div>
                <div className="p-2">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1678450687690-81f922.jpeg" className="w-full h-[200px] md:max-h-[200px] lg:max-h-[200px]object-cover object-fill rounded-lg" alt="Game 4" />
                </div>

            </Slider>
        </div>
    );
}


export default ExperienceCrousal;