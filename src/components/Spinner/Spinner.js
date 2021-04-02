import React from 'react';
import loader from '../../images/logo/loader.jpg';
const Spinner = (props) => {
    return (
        <div className="text-center col-12 py-2 my-2" style={{display: props.visibility}}>
            <img src={loader} alt=""/>
        </div>
    );
};

export default Spinner;