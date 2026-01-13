import React from 'react';
import Carousel from 'react-multi-carousel';
import '../assets/css/about-achievements.css';

const achievements = [
    {
        id: 1,
        images: ['/img/event/g1.jpg', '/img/event/g2.jpg', '/img/event/g3.jpg'],
        title: 'The coveted British Medical Journal Award for Infectious Disease Initiative of the Year',
        year: '2016'
    },
    {
        id: 2,
        images: ['/img/event/g4.jpg', '/img/event/g5.jpg', '/img/event/g6.jpg'],
        title: 'National Excellence Award for Clinical Innovation and Patient Safety',
        year: '2019'
    },
    {
        id: 3,
        images: ['/img/event/g7.jpg', '/img/event/g8.jpg', '/img/banner/slide2.jpg'],
        title: 'Recognized for Community Health Impact and Outreach Programs',
        year: '2023'
    }
];

const AboutAchievements = () => {
    const CustomRightArrow = ({ onClick }) => (
        <button className="smv-achv__arrow smv-achv__arrow--right" onClick={() => onClick()}>
            <i className="fa-solid fa-chevron-right"></i>
        </button>
    );

    const CustomLeftArrow = ({ onClick }) => (
        <button className="smv-achv__arrow smv-achv__arrow--left" onClick={() => onClick()}>
            <i className="fa-solid fa-chevron-left"></i>
        </button>
    );

    return (
        <section className="smv-achv">
            <h2 className="smv-achv__title">Our Achievements</h2>
            <div className="smv-achv__carousel">
                <Carousel
                    infinite={true}
                    draggable={true}
                    arrows={true}
                    pauseOnHover={true}
                    slidesToSlide={1}
                    showDots={false}
                    swipeable={true}
                    autoPlay={false}
                    autoPlaySpeed={3000}
                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 992 },
                            items: 1
                        },
                        tablet: {
                            breakpoint: { max: 991, min: 768 },
                            items: 1
                        },
                        mobile: {
                            breakpoint: { max: 767, min: 0 },
                            items: 1
                        }
                    }}
                >
                    {achievements.map((achievement) => (
                        <div className="smv-achv__slide" key={achievement.id}>
                            <div className="smv-achv__images">
                                {achievement.images.map((img, index) => (
                                    <div className="smv-achv__image" key={index}>
                                        <img src={img} alt={achievement.title} />
                                    </div>
                                ))}
                            </div>
                            <div className="smv-achv__content">
                                <p>{achievement.title}</p>
                                <span className="smv-achv__year">{achievement.year}</span>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default AboutAchievements;
