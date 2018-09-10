import React from "react";
import { render } from "react-dom";
import {
  SortingState,
  IntegratedSorting,
  FilteringState,
  IntegratedFiltering
} from "@devexpress/dx-react-grid";
import // State or Local Processing Plugins
"@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableBandHeader,
  TableHeaderRow,
  ColumnChooser,
  TableColumnVisibility,
  Toolbar,
  TableFilterRow,
  TableColumnResizing,
  VirtualTable
} from "@devexpress/dx-react-grid-bootstrap4";

import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";

import "./style.css";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: "name", title: "Name" },
        { name: "city", title: "City" },
        { name: "sex", title: "Sex" },
        { name: "car", title: "Car" }
      ],
      columnBands: [
        {
          title: "Population",
          children: [{ columnName: "sex" }, { columnName: "car" }]
        }
      ],
      rows: [
        { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" },
        { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
        { sex: "Male", name: "Mark", city: "Paris", car: "Honda Accord" },
        { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
        { sex: "Female", name: "Linda", city: "Austin", car: "Toyota Corolla" },
        {
          sex: "Male",
          name: "Robert",
          city: "Las Vegas",
          car: "Chevrolet Cruze"
        },
        { sex: "Female", name: "Lisa", city: "London", car: "BMW 750" },
        { sex: "Male", name: "Mark", city: "Chicago", car: "Toyota Corolla" },
        {
          sex: "Male",
          name: "Thomas",
          city: "Rio de Janeiro",
          car: "Honda Accord"
        },
        { sex: "Male", name: "Robert", city: "Las Vegas", car: "Honda Civic" },
        { sex: "Female", name: "Betty", city: "Paris", car: "Honda Civic" },
        {
          sex: "Male",
          name: "Robert",
          city: "Los Angeles",
          car: "Honda Accord"
        },
        {
          sex: "Male",
          name: "William",
          city: "Los Angeles",
          car: "Honda Civic"
        },
        { sex: "Male", name: "Mark", city: "Austin", car: "Nissan Altima" }
      ],

      defaultHiddenColumnNames: []
    };
  }
  render() {
    const { rows, columns, columnBands, defaultHiddenColumnNames } = this.state;

    return (
      <Grid rows={rows} columns={columns}>
        <SortingState
          defaultSorting={[{ columnName: "city", direction: "asc" }]}
        />
        <IntegratedSorting />
        <FilteringState defaultFilters={[]} />
        <IntegratedFiltering />
        <Table />
        <VirtualTable />
        <TableHeaderRow showSortingControls />
        <TableBandHeader columnBands={columnBands} />
        <TableColumnVisibility
          defaultHiddenColumnNames={defaultHiddenColumnNames}
        />
        <Toolbar />
        <TableFilterRow />
        <ColumnChooser />
      </Grid>
    );
  }
}

render(<App />, document.getElementById("root"));
