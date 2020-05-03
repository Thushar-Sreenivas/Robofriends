import React from 'react'
import "tachyons"
import *  from './robotsDetails'
const Card = (props) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src="https://robohash.org/test2?200x200" alt="Robot Photos" />
            <div>
                <h2>Name</h2>
                <p>Email</p>
            </div>
        </div>
    )
}

export default Card