import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay} from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect  } from 'react';

const Carousel = ({ serviceData }) => {
    const [activeIndex, setActiveIndex] = useState(1); // Start with center slide
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [isMobile, setIsMobile] = useState(false);
    
    // Check for mobile viewport on client-side
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        checkMobile();
        
        // Add resize listener
        window.addEventListener('resize', checkMobile);
        
        // Clean up
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    return (
        <div className="w-full flex flex-col items-center py-6 px-3 md:py-12 md:px-4">
            
            <div className="w-full relative">
                {/* Custom Navigation Buttons */}
                <div className="hidden md:block absolute top-1/2 left-2 z-10 transform -translate-y-1/2">
                    <button 
                        ref={prevRef} 
                        className="bg-white/80 border border-white dark:border-white
                            hover:bg-white dark:bg-darkTheme dark:hover:bg-darkHover 
                                text-gray-800 dark:text-white
                                p-2 md:p-3 rounded-full shadow-md transition-all duration-300"
                    >
                        <ArrowLeft size={18} />
                    </button>
                </div>
                
                <div className="hidden md:block absolute top-1/2 right-2 z-10 transform -translate-y-1/2">
                    <button 
                        ref={nextRef} 
                        className="bg-white/80 border border-white dark:border-white
                            hover:bg-white dark:bg-darkTheme dark:hover:bg-darkHover 
                                text-gray-800 dark:text-white
                                p-2 md:p-3 rounded-full shadow-md transition-all duration-300"
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>

  
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={isMobile ? 1 : 'auto'}
                    initialSlide={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: false
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,

                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="w-full max-w-5xl"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {serviceData.map(({ image, title, description }, index) => (
                        <SwiperSlide key={index} className={`${isMobile ? 'h-auto' : 'max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'} my-4 md:my-8`}>
                            {({ isActive }) => (
                                <motion.div 
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.3 }}
                                animate={{
                                    rotateY: !isActive ? 20 : 0, // Flip left for even, right for odd slides
                                    transition: { duration: 0.3, ease: "easeInOut" }
                                }}
                                className={`w-full h-96 sm:h-96 
                                    md:h-64 flex flex-col md:flex-row 
                                    rounded-lg md:rounded-xl overflow-hidden 
                                    shadow-lg bg-white transition-all duration-500 
                                    border border-white dark:border-white 
                                    dark:hover:shadow-white dark:hover:bg-darkHover 
                                    dark:hover:bg-opacity-80 
                                    ${isActive ? 'opacity-100 scale-100 z-10' : 'opacity-50 scale-95'}`}                                
                            >
                                {/* Left side - Image Section */}
                                <div className="w-full md:w-1/2 h-80 sm:h-96 md:h-full relative overflow-hidden">
                                    <Image 
                                        src={image} 
                                        alt={title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className={`transition-all duration-500 ${isActive ? 'saturate-100' : 'saturate-75'}`}
                                    />
                                </div>
                            
                                {/* Content Section - Full width on mobile, half width on larger screens */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center p-5 md:p-6 bg-white relative dark:bg-darkTheme">
                                        <h3 className="font-bold text-2xl text-gray-800 mb-1 md:mb-2">{title}</h3>
                                        {description && (
                                            <p className="text-sm text-gray-600 font-outfit line-clamp-3">{description}</p>
                                        )}
                                        
                                        {/* Learn More Link */}
                                        <div className="mt-3 flex items-center text-blue-500 text-sm font-outfit font-medium">
                                            <span>See more</span>
                                            <ChevronRight size={16} className="ml-1" />
                                        </div>
                                    </div>
                                    
                                    {/* Overlay for non-active slides */}
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-white/10 backdrop-blur-xs pointer-events-none"></div>
                                )}
                            </motion.div>
                            
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* Current Slide Indicator */}
                <div className="mt-4 md:mt-6 text-center">
                    <p className="text-xs md:text-sm text-gray-500">
                        {activeIndex + 1} of {serviceData.length}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;