import React from 'react';

import {useDispatch} from "react-redux";

const Film = ({movie}) => {
    const {id, title}=movie

    // const dispatch = useDispatch();

    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
        </div>
    );
};

export {Film};