import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  var currentYear = new Date().getFullYear();
  //alert(maxYear);
    const handleFilterYear = (event) => {
      //console.log(event.target.value);
      props.onChangeFilter(event.target.value);
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value = {props.selectedYear} onChange = {handleFilterYear}>
          <option value={currentYear - 2}>{currentYear - 2}</option>
          <option value={currentYear - 1}>{currentYear - 1}</option>
          <option value={currentYear}>{currentYear}</option>
          <option value={currentYear + 1}>{currentYear + 1}</option>
          <option value={currentYear + 2}>{currentYear + 2}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;