import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { CiStar } from "react-icons/ci";
import { PiUsersThreeLight } from "react-icons/pi";
function ServiceDetails() {

    const services = [
        { name: "Women's Salon & Spa", icon: "👩‍🦰" },
        { name: "Men's Salon & Massage", icon: "🧔‍♂️" },
        { name: "AC & Appliance Repair", icon: "❄️" },
        { name: "Cleaning", icon: "🧹" },
        { name: "Electrician, Plumber & Carpenter", icon: "🔧" },
        { name: "Electrician, Plumber & Carpenter", icon: "🔧" },
        { name: "Native Water Purifier", icon: "💧" },
        { name: "Men's Salon & Massage", icon: "🧔‍♂️" },
        { name: "AC & Appliance Repair", icon: "❄️" },
        { name: "Men's Salon & Massage", icon: "🧔‍♂️" },
        { name: "AC & Appliance Repair", icon: "❄️" },
    ];

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const serviceChunks = chunkArray(services, 6);


    return (
        <div className="p-4 md:p-8 bg-gray-50">
            <h1 className="text-xl md:text-4xl font-bold text-center mb-6">
                Home services at your doorstep
            </h1>

            <div className='md:flex gap-10'>
                <div className="md:w-[70%] ">
                    <Carousel autoPlay interval={3000} infiniteLoop showArrows={false}>
                        {serviceChunks?.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 mt-[7%]">
                                {chunk?.map((service, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col  items-center justify-between p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition h-40"
                                    >
                                        <div className="text-3xl">{service.icon}</div>
                                        <p className="mt-2 text-center text-xs md:text-base font-medium font-montserrat">
                                            {service.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                    <div className='flex gap-12 mt-[-5%]'>
                        <div className=' flex'>
                            <CiStar size={30} className='' />
                            <div>
                                <p className='pl-8 text-xl font-bold flex flex-col font-montserrat'>4.8</p>
                                <p className='pl-8 text-[#321c6d] text-sm font-bold font-urbanist'>Service rating</p>
                            </div>
                        </div>
                        <div className=' flex'>
                            <PiUsersThreeLight size={30} />
                            <div>
                                <p className='pl-8  text-xl font-bold flex flex-col  font-montserrat'>12M+</p>
                                <p className='pl-8 text-[#321c6d] text-sm font-bold font-urbanist'>Customers Globally</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex hidden w-[30%] md:w-[70%] ">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1 max-[450px]:grid-cols-1  max-[600px]:grid-cols-2 min-[600px]:grid-cols-2 '>
                        {/* Top Image */}
                        <img
                            src="https://media.istockphoto.com/id/1461683093/photo/man-painting-wall-with-light-blue-dye-indoors-back-view.jpg?s=612x612&w=0&k=20&c=TDg87xVDJh-VA4zVClGlMnqpdqTh2QcZ--raihCv9XU="
                            alt="Image 1"
                            className="object-fill w-80 h-60 rounded-tl-lg max-[450px]:rounded-lg"
                        />
                        {/* Middle Image */}
                        <img
                            src="https://www.shutterstock.com/image-photo/cleaner-using-mops-mop-uniform-600nw-2501295075.jpg"
                            alt="Image 3"
                            className="object-fill w-80 h-48 rounded-tr-lg  max-[450px]:rounded-lg"
                        />
                        {/* Bottom Image */}
                        <img
                            src="https://media.istockphoto.com/id/1339613829/photo/plumber-at-work-in-a-bathroom-plumbing-repair-service-assemble-and-install-concept.jpg?s=612x612&w=0&k=20&c=lQREIzjwRM3ApTkRzTnbIA_BCRCy_ER-e51tofKsaP0="
                            alt="Image 2"
                            className="object-fill w-80 h-60 rounded-bl-lg  max-[450px]:rounded-lg"
                        />

                        {/* Last Image */}
                        <img
                            src="https://t3.ftcdn.net/jpg/03/18/50/34/360_F_318503457_FLLfdUmw3Mo5KVcaaRc4ovFSjkXW20d7.jpg"
                            alt="Image 4"
                            className="object-fill  w-80 h-72 rounded-br-lg max-[450px]:h-60 max-sm:mt-[.5px] max-md:mt-[-9px] mt-[-48px]  max-[450px]:rounded-lg"
                        />
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default ServiceDetails
