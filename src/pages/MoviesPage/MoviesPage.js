import React from 'react';
import {useSelector} from "react-redux";

import {Films} from "../../components";

const MoviesPage = () => {
    const selector = useSelector(state => state.movies);

    return (
        <div>
            <Films/>
        </div>
    );
};

export {MoviesPage};