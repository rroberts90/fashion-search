import React, {Component} from 'react';
import './css/App.css';

class Grid extends Component {

  render(){
    const filledArray = new Array(30).fill(0);
    const gridItems = filledArray.map((item, index) => <Result key={index} name={index}/> );
    return (
      <div className="grid">
        {gridItems}
      </div>
    );
  }

}

const Result = props => {
  return(
    <div className="grid-item">
      <a className="grid-link" href="/">
       <img src="" alt="" />
      </a>
      <div>Item Name</div>
      <div> Brand </div>
      <i className="heart-icon far fa-heart"></i>
    </div>
  );
};


/*function SortDropdown(props) {
  <label htmlfor="sort-results">Sort By: </label>
  <select name="sort-results" id="sort-results">
    <option value="Relevance">
    <option value="Price low to high">
    <option value="Price high to low">
  </select>
}*/

export default Grid;
