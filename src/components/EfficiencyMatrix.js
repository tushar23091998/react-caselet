import { AgGridReact } from "ag-grid-react";
import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./CalendarOptimization.css";
import CampaignDetails from "../dummy_data/campaign_matrix.json";

const columnDefs = [
  { headerName: "Classification", field: "classification_name" },
  { headerName: "Number of Offers", field: "number_of_offers" },
  {
    headerName: "Total Incremental Sales (€)",
    field: "total_incremental_sales",
  },
  {
    headerName: "Total Incremental Margin (€)",
    field: "total_incremental_margin",
  },
  { headerName: "Classification (%)", field: "classification" },
];

const gridStyleMatrix = {
  "padding-top": "40px",
  "padding-left": "50px",
  height: "300px",
  width: "90%",
};

const chartMatrixStyle = {
  width: "93.5%",
  height: "350px",
  'margin-bottom': '50px'
};

class EfficiencyMatrix extends Component {
  total_margin = CampaignDetails.reduce(
    (total, currentValue) =>
      (total = total + parseFloat(currentValue.total_incremental_margin)),
    0
  );
  total_sales = CampaignDetails.reduce(
    (total, currentValue) =>
      (total = total + parseFloat(currentValue.total_incremental_sales)),
    0
  );
  state = {
    campaignMatrix: CampaignDetails,
  };

  render() {
    return (
      <div>
        <h6 style={{ "font-weight": "bold" }}>Campaign Effectiveness Matrix</h6>
        <div className="ag-theme-alpine" style={gridStyleMatrix}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={this.state.campaignMatrix}
            defaultColDef={{ flex: 1 }}
          ></AgGridReact>
        </div>
        <div style={chartMatrixStyle}>
          <ResponsiveContainer>
            <BarChart
              width={500}
              height={200}
              data={this.state.campaignMatrix}
              margin={{
                top: 20,
                right: 40,
                left: 40,
                bottom: -30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="classification_name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <ReferenceLine y={0} stroke="#000" />
              <Bar dataKey="total_incremental_margin" fill="#29b6f6" />
              <Bar dataKey="total_incremental_sales" fill="#66bb6a" />
              <Bar dataKey="number_of_offers" fill="#f44336" />
              <Bar dataKey="classification" fill="#ffa726" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default EfficiencyMatrix;
