import React from 'react';
import '../css/SERVICES.css';



function SERVICESLIST (props) {
    return (
        <React.Fragment>
            <div className="col-md-6 mt-1 mb-2 col-sm-6 col-lg-12">
                <div className="d-flex" align='center'>
                    <div className="col-sm block">
                        <img className="icon_size" src={props.src}  alt=""/>
                        <h5 className="font-weight-bold feature_list_font-size text-center">{props.title}</h5>
                        <p className="text-left text-justify text-secondary text-center">{props.details}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>




    );
};

export default SERVICESLIST;
