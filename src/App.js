import React, { Component }from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchFeild: "",
        }
    }
    onSearchChange = (event)=> {
        this.setState({searchFeild: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchFeild.toLowerCase())
        });
        return (
            <div className="tc">
                <h1>Robot Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}
export default App;