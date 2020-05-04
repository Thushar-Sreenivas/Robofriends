import React from 'react'
import cardList from '../Cards/CardList'

const searchBar = ({id, robots}) => {
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

export default searchBar