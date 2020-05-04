import React from 'react'
import cardList from '../Cards/CardList'
import Card from '../Card/Card'
const searchBar = ({id, robots}) => {
    return (
        <form className="pa4 black-80">
            <input id="name" className="center input-reset ba b--black-20 pa2 mb2 db w-70" 
                type="search" aria-describedby="name-desc" 
                value={this.state.searchValue} 
                onChange={this.searchResultHandler}>
            </input>
        </form>
    )
}

export default searchBar




// const searchBar = ({id, robots}) => {
//     const cardArray = robots.map((user, index) => {
//         if (id == 1) {
//             return (
//                 <Card 
//                     key={robots[1].id} 
//                     id={robots[1].id} 
//                     name={robots[1].name} 
//                     email={robots[1].email}
//                 />
//             )
//         }
//     })
//     return cardArray
// }

// export default searchBar