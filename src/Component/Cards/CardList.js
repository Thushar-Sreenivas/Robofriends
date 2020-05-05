import React from 'react'
import Card from '../Card/Card'

const cardList = ({robots}) => {
    // if (true) {
    //     throw new Error("Yeyeyeye")
    // }
    const cardArray = robots.map((user, index) => {
        return (
            <Card 
                key={robots[index].id} 
                id={robots[index].id} 
                name={robots[index].name} 
                email={robots[index].email}
            />
        )
    })
    return cardArray
}

export default cardList