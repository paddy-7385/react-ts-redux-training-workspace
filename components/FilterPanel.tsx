import React, { Component } from 'react';
import FilterButton from './FilterButton';

export default class FilterPanel  extends Component {

  constructor(props){
    super(props);    
    this.state = {
       currentFilter : "SHOW_ALL"
    }
    this.onChangedHandler = this.onChangedHandler.bind(this);
  }

  onChangedHandler(value){
    this.props.onClick(value)
    this.setState({currentFilter: value})
  }

  render() {    
     return(
       <div>
         <FilterButton 
          value = "Show All" 
          name = "SHOW_ALL" 
          filter = {this.state.currentFilter}
          onClick = {this.onChangedHandler}
         />

        <FilterButton 
         value = "Show Completed"
         name = "SHOW_COMPLETED"  
         filter = {this.state.currentFilter}
         onClick = {this.onChangedHandler}
        />

        <FilterButton
         value = "Show Pending"
         name = "SHOW_PENDING"  
         filter = {this.state.currentFilter}
         onClick = {this.onChangedHandler}
        />
       </div>
     )
  }
}