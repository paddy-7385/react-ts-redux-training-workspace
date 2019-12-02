import React from 'react';
import FilterPanel from '../components/FilterPanel';
import {connect} from "react-redux";

import { setVisibility } from "../actions";

function FilterContainer(props){
  return (
    <div>
      <FilterPanel onClick = { filterName => props.dispatch  (setVisibility(filterName))}
      />
    </div>
  )
}

export default connect()(FilterContainer);