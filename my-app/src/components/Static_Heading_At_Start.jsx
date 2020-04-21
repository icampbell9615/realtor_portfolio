import React from 'react';
import '../css/Static_Heading_At_Start.css';




const STATIC_HEADING = (props) => {
    return (
        <React.Fragment>
            <h2 className="text-left font-weight-bold font-size">{props.title}</h2>
            <h6 className="text-left font-weight-normal text-wrap text-secondary">
                {props.details}
            </h6>
        </React.Fragment>
    );
};

export default STATIC_HEADING;
