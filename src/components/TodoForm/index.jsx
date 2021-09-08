import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultsProps = {
    onSubmit: null,
};

function TodoForm(props) {
    const { onSubmit } = props ;
    const [value, setValue] = useState('');
    function handleInputOnChange(e){
        // console.log(e.target.value);
        setValue( e.target.value );
    }
    function handleSubmit(e){
        e.preventDefault();

        if(!onSubmit) return;
        const id = Math.trunc(Math.random() * 1000);
        const formvalue ={
            id: id,
            title: value,
        }       
        onSubmit(formvalue);
        setValue("");
    }
    return (
        <form onSubmit={ handleSubmit} >
            <input type="text" 
                    value={ value } 
                    onChange={ handleInputOnChange }
            />
            <button type="submit" onClick={ handleSubmit } >Submit</button>
        </form>
    );
}

export default TodoForm;