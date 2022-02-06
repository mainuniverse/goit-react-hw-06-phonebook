import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from './../redux/selectors';
import { changeFilter } from './../redux/actions';
import s from './components.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);

    const onChange = event => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <label className={s.label}>
            Find contact by name
            <input type="text" value={value} onChange={onChange}></input>
        </label>
    );
};

export default Filter;