import React from 'react';

import {useSelector} from "react-redux";

const SelectedFilm = () => {

    const {selectedMovie} = useSelector(state =>state.movies)

    return (
        <div>
            {selectedMovie &&
                <div>{selectedMovie.id}-----{selectedMovie.overview}</div>
            }
            {/*{selectedMovie.map(selectedMovie=><MovieDetails key={selectedMovie.id}selectedMovie={selectedMovie}/> )}*/}
        </div>
    );
};

export {SelectedFilm};