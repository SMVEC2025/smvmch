import React from 'react';
import SearchWidget from './SearchWidget';
import SubjectWidget from './SubjectWidget';
import NewsWidget from './NewsWidget';
import TagWidgets from './TagWidgets';

const Widgets = () => {
    return (
        <>
            <aside>
                <SearchWidget />
                <SubjectWidget />
                <NewsWidget />
                <TagWidgets />
            </aside>
        </>
    );
};

export default Widgets;