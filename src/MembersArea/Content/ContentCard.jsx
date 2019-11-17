import React from 'react'

const ContentCard = ({ children }) => {
    return (
        <div className="row">
            <div className="col-lg-12 grid-margin">
                <div className="card">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContentCard;
