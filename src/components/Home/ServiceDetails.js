import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { CiStar } from "react-icons/ci";
import { PiUsersThreeLight } from "react-icons/pi";
import { getMastercategory } from '../../Service/api-path';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';


function ServiceDetails() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMasterCategory = async () => {
        try {
            const data = await getMastercategory();
            console.log('data: ', data);
            const filteredData = data.data.map((item) => {
                return {
                    name: item.masterName,
                    icon: item.image_url,
                    masterId: item.masterId
                };
            });
            console.log('filteredData: ', filteredData);
            setServices(filteredData);
            setLoading(false);
        } catch (error) {
            console.error('Error in fetching master category:', error);
            setLoading(true);
        }
    };

    useEffect(() => {
        fetchMasterCategory();
    }, []);

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
                <div className="md:w-[70%] w-full md:mt-[-15px] mx-auto px-4">
                    <Carousel autoPlay interval={3000} infiniteLoop showArrows={true}>
                        {loading ? (
                            // Show skeleton while loading
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 mt-6">
                                {[...Array(6)].map((_, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            bgcolor: '#121212',
                                            p: 8,
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Skeleton
                                            sx={{ bgcolor: 'grey.900' }}
                                            variant="rectangular"
                                            width={210}
                                            height={118}
                                        />
                                    </Box>
                                ))}
                            </div>
                        ) : (
                            serviceChunks?.map((chunk, chunkIndex) => (
                                <div key={chunkIndex} className=" grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 mt-6">
                                    {chunk?.map((service, index) => (
                                        <>
                                            {/* <div key={index} className="cursor-pointer relative flex flex-col items-center justify-end p-3 bg-white shadow-md rounded-xl hover:shadow-lg transition transform hover:scale-105 h-36 overflow-hidden"> */}
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 1.3 }}
                                                className="cursor-pointer relative flex flex-col items-center justify-end p-3 bg-white shadow-md rounded-xl hover:shadow-lg transition-transform h-36 overflow-hidden"
                                            >
                                                <div className="relative w-full h-36">
                                                    <img
                                                        className="h-full w-full object-cover rounded-t-lg shadow-lg"
                                                        src={service.icon}
                                                        alt={service.name}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-t-lg"></div>
                                                </div>
                                                <p className=" cursor-pointer absolute bottom-0 w-full text-center flex justify-center items-center md:mt-0 text-[11px] md:text-[14px] font-normal font-bellota text-white bg-black/90 h-12">
                                                    {service.name}
                                                </p>
                                            </motion.div>
                                            {/* </div> */}
                                        </>
                                    ))}
                                </div>
                            ))
                        )}
                    </Carousel>

                    <div className="flex  md:flex-row gap-8 items-center justify-center mt-[-20px]">
                        <div className="flex items-center gap-4">
                            <CiStar size={30} className="text-yellow-500" />
                            <div>
                                <p className="text-2xl font-bold font-montserrat">4.8</p>
                                <p className="text-sm font-bold text-[#321c6d] font-urbanist">Service Rating</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <PiUsersThreeLight size={30} className="text-blue-500" />
                            <div>
                                <p className="text-2xl font-bold font-montserrat">12M+</p>
                                <p className="text-sm font-bold text-[#321c6d] font-urbanist">Customers Globally</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex hidden w-[30%] md:w-[70%]">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1 max-[450px]:grid-cols-1 max-[600px]:grid-cols-2 min-[600px]:grid-cols-2'>
                        {/* Skeleton loading for images */}
                        {loading ? (
                            [...Array(4)].map((_, index) => (
                                <Box
                                    sx={{
                                        bgcolor: '#121212',
                                        p: 8,
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Skeleton
                                        sx={{ bgcolor: 'grey.900' }}
                                        variant="rectangular"
                                        width={210}
                                        height={118}
                                    />
                                </Box>
                            ))
                        ) : (
                            <>
                                {/* Actual images here */}
                                <img
                                    src="https://media.istockphoto.com/id/1461683093/photo/man-painting-wall-with-light-blue-dye-indoors-back-view.jpg?s=612x612&w=0&k=20&c=TDg87xVDJh-VA4zVClGlMnqpdqTh2QcZ--raihCv9XU="
                                    alt="Image 1"
                                    className="object-fill w-80 h-60 rounded-tl-lg max-[450px]:rounded-lg"
                                />
                                <img
                                    src="https://www.shutterstock.com/image-photo/cleaner-using-mops-mop-uniform-600nw-2501295075.jpg"
                                    alt="Image 3"
                                    className="object-fill w-80 h-48 rounded-tr-lg max-[450px]:rounded-lg"
                                />
                                <img
                                    src="https://media.istockphoto.com/id/1339613829/photo/plumber-at-work-in-a-bathroom-plumbing-repair-service-assemble-and-install-concept.jpg?s=612x612&w=0&k=20&c=lQREIzjwRM3ApTkRzTnbIA_BCRCy_ER-e51tofKsaP0="
                                    alt="Image 2"
                                    className="object-fill w-80 h-60 rounded-bl-lg max-[450px]:rounded-lg"
                                />
                                <img
                                    src="https://t3.ftcdn.net/jpg/03/18/50/34/360_F_318503457_FLLfdUmw3Mo5KVcaaRc4ovFSjkXW20d7.jpg"
                                    alt="Image 4"
                                    className="object-fill w-80 h-72 rounded-br-lg max-[450px]:h-60 max-sm:mt-[.5px] max-md:mt-[-9px] mt-[-48px] max-[450px]:rounded-lg"
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetails;
