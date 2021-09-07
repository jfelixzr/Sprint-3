import React from 'react';

export const MovieSearch = ({
    id,
    url,
    title,
    description,
    categoria
}) => {
    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={url} className="card-img" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{categoria} </p>
                        <p className="card-text">
                            <small className="text-muted">{description}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}