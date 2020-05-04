import React from 'react'
// import cardList from '../Cards/CardList'
// import Card from '../Card/Card'

const searchBar = ({searchChange}) => {
    return (
        <div className="pa2">
            <input  className="center input-reset ba b--black-20 pa2 mb2 db w-70" 
                type="search" placeholder="search robots"  
                onChange={searchChange}/>
        </div>
    )
}

export default searchBar

