import React from 'react';
import notFound from '../../notFound/404.jpg'

const PageNotFound = () => {
    return (
        <div>
            <img className='w-25' src={notFound} alt="" />
        </div>
    );
};

export default PageNotFound;