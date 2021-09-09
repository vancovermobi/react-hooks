import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
  name: PropTypes.string,  
};
Hero.defaultProps = {
  name: '',  
};

function Hero(props) {
    const { name } = props;
    console.log('Name: ', name )
    return (
        <div>
            Hero Name: { name }
        </div>
    );
}

export default React.memo(Hero);