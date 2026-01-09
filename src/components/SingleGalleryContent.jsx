import React from 'react';

const SingleGalleryContent = ({ gallery }) => {
    let { image } = gallery;

    return (
        <>
            <div className="filter-item">
                <div className="gallery-item">
                    <img className='img-full' src={`/img/event/${image}`} alt="gallery" />
                </div>
            </div>
        </>
    );
};

export default SingleGalleryContent;