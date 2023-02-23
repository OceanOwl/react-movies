import React from 'react';


import css from './Header.module.css';
import {Form, Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const Header = () => {

    // const {register, handleSubmit, reset, setValue, getValues} = useForm();

    return (
        <div className={css.Header}>

                <div className={'leftSide'}>
                    <Link className={'hrefka'} to={'movies'}>Movies</Link>
                    <Link className={'hrefka'} to={'Genres'}>Genres</Link>
                </div>
                <div className={'searchPanel'}>
                    <form>
                        <input type="text" placeholder={'Search for a movie'}/>
                        <i className="fa-solid fa-magnifying-glass"></i>

                    </form>
                </div>

        </div>
    );
};

export {Header};