import React from 'react';
import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={css.NotFoundPage}>
            {<img className={'notFound'} src={'https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png'} alt={404}/>}
        </div>
    );
};

export {NotFoundPage};