import React from 'react'

const searchBox = ({searchFeild, searchChange}) =>{
    return(
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
            type="SearchBox" 
            placeholder="Search Robot"
            onChange={searchChange}>
                
            </input>
        </div>
    )
}
export default searchBox;