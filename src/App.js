import React, {Component, Fragment} from 'react';
import './css/App.css';
import Grid from './Grid.js';
import Sidebar from './Sidebar.js';

/*
v1
  - good Search, Filters, good webcrawler
v2
  - Optimize for mobile, In depth pages before routing people to store websites, notifications
v3
  - user accounts, feed, professional flourishes
v4
  - Professional looking css, code spliting, minify css, test for speed
v5
  - build react native apps

*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: "",
      filters: [], // format: {type: type, value: value}
      results: []
    };
  }

  addFilter = filter => {
    const { filters } = this.state;
    this.setState({
      filters: [...filters, filter]
    }, this.loadResults);
  }

  removeFilter = filter => {
    const { filters } = this.state;
    const {type, value} = filter;
    this.setState({
      filters: filters.filter((f) => {
                  return !(f.type == type && f.value == value);
               })
    }, this.loadResults);
  }

  loadResults = () => {

  }

  componentDidMount() {
    // get initial json data here

  }


  render(){
    return (
      <>
      <header>
          <Title />
          <SearchBar />
        </header>
        <div className="main-container">
          <Sidebar addFilter={this.addFilter} removeFilter={this.removeFilter} />
          <Grid />
        </div>
      </>
    );
  }
}

const Title = props => {
  return <a href="/" className="header-logo">MELLESSE </a>;
};

const SearchBar = props => {
  return (
     <div className="search-container">
        <input className="searchbar" type="text" placeholder="Search..." />
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
        </button>
     </div>
  );
};

export default App;
