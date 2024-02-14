// Import Component
import React, { Component, useState } from 'react';

// UserInput component
const UserInput = (props) => {

    // Return an input element that, on change, does the event passed to update via props
        return (
          <div>
          </div>
        )
    }

// Simple TableRow component for showing a <tr>
const TableRow = (props) => {
    return (
        <tr>
          <td>
            { props.name }
          </td>
          <td>
            { props.title }
          </td>
          <td>
            { props.salary }
          </td>
        </tr>
    )
    }

// Table component
const Table = (props) => {
    // Should return a TableRow component for each element in this.props.data
        return (
            <div>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Salary</th>
                  </tr>
                  {
                  // write your code here!
                  }
                </tbody>
              </table>
            </div>
        )
    }

// Create a SearchApp Component
const SearchApp = (props) => {
  // Set the initial state of search to empty string
  const [search, setSearch] = useState('');

  // In this event, get the target value, and reset the state of `search`
  const handleChange = (event) => {
      // Get event value and set the state of Search to trigger a re-rendering

  }


    // Filter the table data
    let employees = props.data,
        searchString = search.trim().toLowerCase();

    // If the search string isn't an empty string, filter the results using `.match`
    if (searchString.length > 0) {
        // We are searching. Filter the results.
        employees = employees.filter((e) => e.name.toLowerCase().match(searchString));
    }

    // Return a `div` containing a  `UserInput` component and a `Table` component
    return (
        <div>
        </div>
    )
}

// Export the SearchApp
export default SearchApp;
