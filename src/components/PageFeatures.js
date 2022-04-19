import React from 'react';

const Pagefeatures = (props) => {
    return (


        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <img className="card-img-top" src={props.gif.original.url} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                </div>
            </div>
        </div>


    );
}

export default Pagefeatures;
