import React from 'react';
import '../css/STATICHEADINGATSTART.css';




const STATICHEADING = (props) => {
    return (
        <React.Fragment>
            <h2 className="text-left font-weight-bold font-size">{props.title}</h2>
            <h6 className="text-left font-weight-normal text-wrap text-secondary">
                {props.details}
            </h6>
        </React.Fragment>
    );
};

export default STATICHEADING;
