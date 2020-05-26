
import React, {Component, useState} from 'react';
import './css/App.css';

class Sidebar extends Component {

  render(){
    const listFilterSource = [
     {name: "CATEGORY", options: ["Dresses", "Pants", "Tops", "Leggings", "Hoodies"]},
     {name: "SIZE", options: ["0", "1", "2", "3", "4", "5", "6"]},
     {name: "COLOR", options: ["Red", "Blue", "Yellow", "Green", "Black"]},
     {name: "BRAND", options: ["Torrid", "Fashion To Figure", "Shein", "Eloquii"]},
     {name: "PRICE", options: ["Under $25", "$25 to $50", "$50 to $100", "Over $100"]}
    ];

    const listFilters = listFilterSource.map((item) => {
      return <ListFilter key={item.name} name={item.name} options={item.options}
             addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} />;
    });

    return(
      <div className="sidebar">
        {listFilters}
        <SaleFilter addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} />

      </div>
    );
  }

}

// props: name, options
const ListFilter = props => {
  const filterOptions = props.options.map((option) => {
    return <li key={option}> <ListFilterOption type={props.name} name={option} addFilter={props.addFilter} removeFilter={props.removeFilter}/> </li>;
  });

  return (
    <div className="filter-category">
      <CategoryButton name={props.name} />
      <ul>
        {filterOptions}
      </ul>
    </div>
  );
};

const ListFilterOption = props =>{
  const [toggle, setToggle]  = useState(false);
  const onClick = () => {
      setToggle(!toggle);
      const filter = {type: props.type, value: props.name };
      toggle ? props.removeFilter(filter) : props.addFilter(filter);
  };
  return(
    <button className={`list-filter-option ${toggle ? "selected": ""}`} onClick={onClick}>
      {props.name}
    </button>
  );
};

const PriceFilter = props =>{
    return (
      <div className="filter-category">
      <CategoryButton name="PRICE" />
        <ul>
          <li>
            <i className="dollar-sign fas fa-dollar-sign"></i>
            <input type="number" className="price-box" id="priceMin" placeholder="Min" />
            <span className="price-spacer">To</span>
            <input type="number" className="price-box" id="priceMax" placeholder="Max" />
          </li>
          <li>
           <SaleFilter addFilter={props.addFilter} removeFilter={props.removeFilter} />
          </li>
        </ul>

      </div>
    );
};

const SaleFilter = props => {
  const [checked, setChecked] = useState(false);  //hacky?
  const onClick = () => {
    setChecked(!checked);
    const filter = {type: "onSale", value: true };
    checked ? props.removeFilter(filter) : props.addFilter(filter);
  };
  return (
    <div className={`sale-filter ${checked ? "selected":""}`}>
      <input type="checkbox"  id="sale-filter" name="sale-filter" onClick={onClick} />
      <label htmlFor="sale-filter">On Sale</label>
    </div>
  );
};

const CategoryButton = props => {
  //try hooks
  const [toggle, setToggle]  = useState(false);
  //const toggleClass = toggle ? "category-title closed" : "category-title";
  //const

  return (
    <button className={`category-title ${toggle ? "closed" : ""}`} onClick={()=>setToggle(!toggle)}>
      {props.name}
      <span className="plus-sign">{toggle ? "+":"-"}</span>
    </button>
  );
};

export default Sidebar;
/*<PriceFilter addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} />*/
