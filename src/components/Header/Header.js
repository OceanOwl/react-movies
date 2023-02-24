import React from 'react';

import css from './Header.module.css';
import {Form, Link} from "react-router-dom";

const Header = () => {

    // const {register, handleSubmit, reset, setValue, getValues} = useForm();

    return (
        <div className={css.Header}>

            <div className="leftSide">
                <Link to={'movies'}>Movies</Link>
                <Link to={'Genres'}>Genres</Link>
            </div>
            <div className="searchPanel">
                <form>
                    <input type="text" placeholder={'Search for a movie'}/>
                </form>
            </div>
            <h4>User info</h4>
        </div>
    );
};

export {Header};