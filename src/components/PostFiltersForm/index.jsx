import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFiltersForm.defaultsProps = {
    onSubmit: null,
};

function PostFiltersForm(props) {
    const { onSubmit } = props ;
    const [value, setValue] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleInputOnChange(e){
        // console.log(e.target.value);
        const inputValue = e.target.value 
        setValue(inputValue );
  
        if(!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formvalue ={
              searchTerm: inputValue ,
            }       
            onSubmit(formvalue); 
        }, 300);
    }
    return (
        <form  >
            <input type="text" style={{ marginRight:'0.5rem'}}
                    value={ value } 
                    onChange={ handleInputOnChange }
            />
            <button type="submit"  >Submit</button>
        </form>
    );
}

export default PostFiltersForm;