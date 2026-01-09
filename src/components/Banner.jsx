import React from 'react';
import BannerData from '../jsonData/BannerData.json'
import Carousel from 'react-multi-carousel';
import SingleBanner from './SingleBanner';

const Banner = () => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="fa-solid fa-chevron-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="fa-solid fa-chevron-left"></i></button>;

    };

    return (
        <>
            <div className="banner-slider-wrap overflow-hidden">
                <Carousel
                    infinite={true}
                    draggable={true}
                    arrows={true}
                    pauseOnHover={true}
                    slidesToSlide={1}
                    showDots={false}
                    swipeable={true}
                    autoPlay={false}
                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}
                    autoPlaySpeed={3000}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1
                            },
                            items: 1,
                        }
                    }}>

                    {BannerData.map(banner =>
                        <SingleBanner banner={banner} key={banner.id} />
                    )}

                </Carousel>
            </div>
        </>
    );
};

export default Banner;