import React from 'react'
import "tachyons"

const Card = (props) => {
    return (
        <div className="tc bg-light-green">
            <img src="https://robohash.org/test2" alt="Robot Photos" />
            <div>
                <h2>Name</h2>
                <p>Email</p>
            </div>
        </div>
    )
}

export default Card