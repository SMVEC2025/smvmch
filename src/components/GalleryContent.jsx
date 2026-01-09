import React, { useState } from 'react';
import GalleryData from '../jsonData/GalleryData'
import SingleGalleryContent from './SingleGalleryContent';
import { HashLink as Link } from 'react-router-hash-link';

const GalleryContent = () => {

    let [items, setItems] = useState(GalleryData)
    let [activeCategory, setActiveCategory] = useState('all');

    let filterItem = (categoryItem) => {
        let updatedItems = GalleryData.filter((currentElement) => {
            return currentElement.category === categoryItem
        })
        
        setItems(updatedItems)
        setActiveCategory(categoryItem);
    }


    return (
        <>
            <ul className="simple-filter">
                <li className={activeCategory === 'all' ? 'active' : ''} onClick={() => { setItems(GalleryData); setActiveCategory('all'); }} >All</li>
                <li className={activeCategory === 'institute' ? 'active' : ''} onClick={() => filterItem('institute')} >institute </li>
                <li className={activeCategory === 'library' ? 'active' : ''} onClick={() => filterItem('library')}>library</li>
                <li className={activeCategory === 'entertainment' ? 'active' : ''} onClick={() => filterItem('entertainment')}>entertainment</li>
                <li className={activeCategory === 'classroom' ? 'active' : ''} onClick={() => filterItem('classroom')}>classroom</li>
            </ul>

            <div className="gallery-container">
                <div className="row">
                    {items.map(gallery =>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={gallery.id}>
                            <SingleGalleryContent gallery={gallery} />
                        </div>
                    )}
                </div>
            </div>

            <div className="col-md-12">
                <div className="gallery-load-more-btn">
                    <Link to="#">Load More Gallery</Link>
                </div>
            </div>
        </>
    );
};

export default GalleryContent;