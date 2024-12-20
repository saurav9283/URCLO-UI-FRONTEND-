import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
                <div className="md:w-[70%]">
                    <Carousel  autoPlay interval={3000} infiniteLoop>
                        {serviceChunks?.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="grid  grid-cols-2 md:grid-cols-3 gap-4 mb-8 mt-[7%]">
                                {chunk?.map((service, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition"
                                    >
                                        <div className="text-3xl">{service.icon}</div>
                                        <p className="mt-2 text-center text-sm md:text-base font-medium">
                                            {service.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img
                        src="https://via.placeholder.com/400x300"
                        alt="Service Example 1"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                        src="https://via.placeholder.com/400x300"
                        alt="Service Example 2"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                        src="https://via.placeholder.com/400x300"
                        alt="Service Example 3"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                        src="https://via.placeholder.com/400x300"
                        alt="Service Example 2"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails
